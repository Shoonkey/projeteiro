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

}