import api, { formatError } from "../../util/api";

export function moveCard(result, getConfig){

  const { draggableId, source, destination, type } = result;
  const { projectId, list, setList, setError } = getConfig(type);

  // Drag was cancelled
  if (!destination) return;

  // Element was dropped at its original place, so there's no need to reorder
  if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

  let newList, droppedItem, args;

  // Modifies the data structure according to where the element was dragged from and dropped at
  switch(type){
    case "task":
      newList = {...list};
      droppedItem = newList[source.droppableId][source.index];
    
      newList[source.droppableId].splice(source.index, 1);
      newList[destination.droppableId].splice(destination.index, 0, droppedItem);

      args = {
        projectId, 
        cardId: draggableId, 
        source: { index: source.index, column: source.droppableId },
        target: { index: destination.index, column: destination.droppableId }
      };

      break;
    case "board":
      newList = [...list];
      droppedItem = newList[source.index];

      newList.splice(source.index, 1);
      newList.splice(destination.index, 0, droppedItem);

      args = {
        projectId,
        sourceIndex: source.index,
        targetIndex: destination.index
      };

      break;
    default:
      return setError(`Failed to move object due to unknown droppable type: "${type}"`);
  }

  api.post(`/track/${type}/move`, args)
    .then(() => setList(newList))
    .catch(e => setError(formatError(e)));

}