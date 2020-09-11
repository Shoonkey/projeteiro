import React from 'react';

import { Container } from './styles';

function InfoDialog({ active, onClose, activator }){

  return (
    <Container active={active} onClose={onClose} activator={activator}>
      <h1 className="title">About <span style={{ color: "#ff5757" }}>Projeteiro</span></h1>
      <div className="description">
        <p>
          Projeteiro is a tool for managing your projects completely locally. It requires no data
          connection and also has all data exposed on the server folder (which is why it's only
          supposed to be ran locally) so you can modify or replace it however you want.
        </p>
        <p>
          Through this website it'll be possible to create, modify and track info about ideally
          any project. The tracking system has drag-and-drop boards and cards to organize tasks,
          just like other project tracking apps on the web.
        </p>
      </div>
    </Container>
  );

};

export default InfoDialog;