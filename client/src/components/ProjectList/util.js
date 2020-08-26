import api, { formatError } from '../../util/api';

export function splitProjectsIntoRows(colsPerRow, projectList){
  const rowNum = Math.ceil(projectList.length / colsPerRow);
  let content = [];

  let i;
  for (i = 0; i < rowNum; i += 3)
    content.push(projectList.slice(i, 3));

  if (i !== rowNum - 1)
    content.push(projectList.slice(i, projectList.length)); 
  
  return content;
}

export function moveCard(result, config){

  const { source, destination } = result;
  const { list, setList, setError, cols } = config;

  // Drag was cancelled
  if (!destination) return;

  // Element was dropped at its original place, so there's no need to reorder
  if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

  let newList = [...list];
    
  let droppedOriginalIdx = parseInt(source.droppableId) * cols + source.index;
  let targetOriginalIdx = parseInt(destination.droppableId) * cols + destination.index;

  let droppedProject = newList[droppedOriginalIdx];

  // remove the just dropped card from its original position in the list
  newList.splice(droppedOriginalIdx, 1);
  // insert it at the position of the targeted card, subsequently moving target and next cards one
  // index forward
  newList.splice(targetOriginalIdx, 0, droppedProject);
  setList(newList);

  api.post("/project/move", { sourceIndex: droppedOriginalIdx, targetIndex: targetOriginalIdx })
    .then(res => res.data)
    .catch(e => {
      setError(formatError(e));
      setList(list);
    });

}