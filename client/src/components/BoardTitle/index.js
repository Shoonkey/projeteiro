import React, { useState, useEffect, useRef } from 'react';

import Button from "../../core/Button";
import Tooltip from "../../core/Tooltip";
import Input from "../../core/Input";
import api, { formatError } from '../../util/api';
import { Container } from './styles';

function BoardTitle({ projectId, children: columnTitle, ...props }){

  const [editingTitle, setEditingTitle] = useState(false);
  const [title, setTitle] = useState(columnTitle);

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

    if (editingTitle || title === columnTitle) return;

    api.post("/track/board/changeTitle", { projectId, oldTitle: columnTitle, newTitle: title })
      .catch(e => formatError(e));

  }, [projectId, columnTitle, editingTitle, title]);

  return (
    <Container {...props}>
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
    </Container>
  );

};

export default BoardTitle;