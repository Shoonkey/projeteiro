import fs from 'fs';

const METADATA_PATH = "../../data/meta.json";

export function getMetadata(){
  return require(METADATA_PATH);
}

export function setMetadata(metadata){
  try {
    fs.writeFileSync(METADATA_PATH, JSON.stringify(metadata));
  } catch (e) {
    console.error(e.message);
    throw new Error("Unable to update metadata");
  }
}