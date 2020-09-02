import fs from 'fs';
import path from 'path';

import { getMetadata, setMetadata, pushToProjectsList, toJSONString } from './util';

export class Project {

  static getAll(){

    const expectedFilePath = path.resolve("data/", "projects.json");
    if (!fs.existsSync(expectedFilePath))
      throw new Error("Unable to find project list file");

    try {
      const projects = require(expectedFilePath);
      return projects;
    } catch (e) {
      console.error(e.message);
      throw new Error("Unable to get project list");
    }
    
  }

  static getById(id){

    const expectedFilePath = path.resolve("data/", `project-${id}.json`);
    if (!fs.existsSync(expectedFilePath))
      throw new Error("Unable to find project w/ ID " + id);

    try {
      const project = require(expectedFilePath);
      return project;
    } catch (e) {
      throw new Error("Unable to read project file");
    }

  }

  static addProject({ title, type }){

    const meta = getMetadata();

    const newProject = {
      id: meta.nextProjectID,
      title,
      type
    };
  
    try {

      fs.writeFileSync(
        `${process.cwd()}/data/project-${meta.nextProjectID}.json`, 
        toJSONString(newProject)
      );

      pushToProjectsList(newProject);
      setMetadata({ ...meta, nextProjectID: meta.nextProjectID + 1 });

      return newProject;

    } catch (e) {
      console.error(e);
      throw new Error("Failed to save project into a new file");
    }

  }

  static moveProject({ sourceIndex, targetIndex }){

    const expectedFilePath = path.resolve("data/", "projects.json");
    if (!fs.existsSync(expectedFilePath))
      throw new Error("Unable to find project list file");

    const projects = require(expectedFilePath);
    const movedProject = projects[sourceIndex];

    projects.splice(sourceIndex, 1);
    projects.splice(targetIndex, 0, movedProject);

    try {

      fs.writeFileSync(
        `${process.cwd()}/data/projects.json`, 
        toJSONString(projects)
      );

    } catch (e) {
      console.error(e);
      throw new Error("Failed to update project position");
    }

  }

  static moveTrackTask({ projectId, cardId, source, target }){

    const expectedFilePath = path.resolve("data/", `project-${projectId}.json`);
    if (!fs.existsSync(expectedFilePath))
      throw new Error("Unable to find project w/ ID " + id);

    const project = require(expectedFilePath);

    const { columns, columnOrder } = project.track;
    
    // `columnOrder` is used here so that column names can be accessed without having to process
    // keys out of the `columns` dictionary
    if (columnOrder.indexOf(source.column) === -1)
      throw new Error(`Invalid source board "${source.column}"`);
    if (columnOrder.indexOf(target.column) === -1)
      throw new Error(`Invalid target board "${target.column}"`);

    // Source index should be within the bounds of the source column, as it must represent a task
    if (source.index >= columns[source.column].length)
      throw new Error("Invalid source task index");
    
    // Target index should either be within the bounds of the target column or its length + 1 so it
    // needs to be pushed into the list
    if (target.index > columns[target.column].length)
      throw new Error("Invalid target index");

    columns[source.column].splice(source.index, 1);
    columns[target.column].splice(target.index, 0, cardId);

    try {
      fs.writeFileSync(expectedFilePath, toJSONString(project));
    } catch (e) {
      console.error(e);
      throw new Error("Failed to update task card position");
    }

  }

  static moveTrackBoard({ projectId, sourceIndex, targetIndex }){

    const expectedFilePath = path.resolve("data/", `project-${projectId}.json`);
    if (!fs.existsSync(expectedFilePath))
      throw new Error("Unable to find project w/ ID " + id);

    const project = require(expectedFilePath);

    const columns = project.track.columnOrder;

    console.log("mid motion");

    if (sourceIndex > columns.length)
      throw new Error("Invalid source column index");
    if (targetIndex > columns.length)
      throw new Error("Invalid target column index");
    
    const sourceColumnName = columns[sourceIndex];
    columns.splice(sourceIndex, 1);
    columns.splice(targetIndex, 0, sourceColumnName);
    
    try {
      fs.writeFileSync(expectedFilePath, toJSONString(project));
    } catch (e) {
      console.error(e);
      throw new Error("Failed to update board position");
    }

  }

}