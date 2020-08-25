import fs from 'fs';

const METADATA_PATH = process.cwd() + "/data/meta.json";

export function toJSONString(object){
  return JSON.stringify(object, null, 2);
}

export function getMetadata(){
  return require(METADATA_PATH);
}

export function setMetadata(metadata){
  try {
    fs.writeFileSync(METADATA_PATH, toJSONString(metadata));
  } catch (e) {
    console.error(e.message);
    throw new Error("Unable to update metadata");
  }
}

export function pushToProjectsList(project){
  const projects_path = `${process.cwd()}/data/projects.json`;
  const projects = require(projects_path);
  projects.push(project);
  return fs.writeFileSync(projects_path, toJSONString(projects));
}