import React, { useState } from 'react';

import Button from '../../core/Button';
import Tooltip from '../../core/Tooltip';
import Input from '../../core/Input';
import Error from '../../core/Error';

import { Container } from './styles';
import api, { formatError } from '../../util/api';

function TaskEditDialog({ active, onClose, activator, task, onTaskEdited }){

  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");

  const updateTask = () => {
    api.post("/track/task/edit", { projectId: task.projectId, cardId: task.id, title, description })
      .then(onTaskEdited)
      .catch(e => setError(formatError(e)));
  };

  return (
    <Container active={active} onClose={onClose} activator={activator}>
      {error && <Error message={error} />}
      <div className="title-container">
        {
          editing ? 
            <Input 
              label="Title"
              type="text" value={title} onChange={e => setTitle(e.target.value)}
            /> : (
              <>
                <h1 className="title">{task.title}</h1>
                <Tooltip content="Edit task info">
                  <Button 
                    icon="brush-outline" ariaLabel="Edit task info" 
                    onClick={() => setEditing(true)}
                    className="edit-btn" 
                  />
                </Tooltip>
              </>
            )
        }
      </div>
      {
        editing ? 
          <Input 
            label="Description"
            type="text" value={description} onChange={e => setDescription(e.target.value)}
          /> :
          <p className="description">{task.description}</p>
      }
      {editing && <Button className="save-btn" onClick={updateTask}>Save</Button>}
    </Container>
  );

};

export default TaskEditDialog;