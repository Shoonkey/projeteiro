export function moveCard(result, getConfig){

  const { source, destination, type } = result;
  const { list, setList } = getConfig(type);

  // Drag was cancelled
  if (!destination) return;

  // Element was dropped at its original place, so there's no need to reorder
  if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

  let newList, droppedItem;

  // Modifies the data structure according to where the element was dragged from and dropped at
  switch(type){
    case "task":
      newList = {...list};
      droppedItem = newList[source.droppableId][source.index];
    
      newList[source.droppableId].splice(source.index, 1);
      newList[destination.droppableId].splice(destination.index, 0, droppedItem);
      break;
    case "column":
      newList = [...list];
      droppedItem = newList[source.index];

      newList.splice(source.index, 1);
      newList.splice(destination.index, 0, droppedItem);
      break;
    default:
      throw new Error(`Unrecognized droppable type: "${type}"`);
  }

  setList(newList);

}