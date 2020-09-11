import React, { useState, useRef, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import Button from "../../core/Button";
import Tooltip from "../../core/Tooltip";
import Input from "../../core/Input";
import TaskCard from '../TaskCard';
import api, { formatError } from '../../util/api';
import { Container } from './styles';

function TaskContainer({ projectId, columnName, cards, index }){

  const [editingTitle, setEditingTitle] = useState(false);
  const [title, setTitle] = useState(columnName);

  const titleInput = useRef();

  useEffect(() => {

    if (!titleInput.current) return;

    function saveOnEnter(e){
      if (e.key === 'Enter'){
        setTitle(e.target.value);
        setEditingTitle(false);
      }
    }

    if (editingTitle){
      titleInput.current.focus();
      titleInput.current.addEventListener("keydown", saveOnEnter);
    } else
      titleInput.current.removeEventListener("keydown", saveOnEnter);

  }, [editingTitle]);

  useEffect(() => {

    if (editingTitle || title === columnName) return;

    api.post("/track/board/changeTitle", { projectId, oldTitle: columnName, newTitle: title })
      .catch(e => formatError(e));

  }, [projectId, columnName, editingTitle, title]);

  return (
    <Draggable draggableId={columnName} index={index}>
      {provided => (
        <Container 
          className="task-container"
          key={`column-${columnName}`}
          ref={provided.innerRef} 
          {...provided.draggableProps} 
        >
          <div className="title-container" {...provided.dragHandleProps}>
            {
              editingTitle ?
                <Input 
                  label="Title"
                  type="text" value={title} onChange={e => setTitle(e.target.value)}
                  inputRef={titleInput}
                /> :
                <h1 className="title">{title}</h1>
            }
            <Tooltip content={editingTitle ? "Save" : "Edit title"}>
              <Button 
                onClick={() => setEditingTitle(!editingTitle)}
                icon={editingTitle ? "checkmark-outline" : "brush-outline"}
                ariaLabel={editingTitle ? "Save" : "Edit title"}
                className="edit-btn"
                style={editingTitle ? { opacity: 1 } : null}
              />
            </Tooltip>
          </div>
          <Droppable droppableId={columnName} type="task">
            {provided => (
              <div 
                className="task-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((card, index) => (
                  <TaskCard 
                    key={card.id} 
                    index={index}
                    id={card.id}
                    title={card.title} 
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );

};

export default TaskContainer;