import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import Dialog from '../Dialog';
import Tooltip from '../Tooltip';
import { ThemeContext } from '../ThemeProvider';
import { Container } from './styles';

function Navbar() {

  const { themeName, setTheme } = useContext(ThemeContext);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Container>
      <Link to="/">
        <h1 className="logo">Projeteiro</h1>
      </Link>
      <div className="option-container">
        <Tooltip content="Info">
          <Button
            icon="information-circle-outline"
            ariaLabel="Information"
            onClick={() => setDialogOpen(true)}
          />
        </Tooltip>
        <Tooltip content="Change theme">
          <Button 
            icon="contrast-outline" 
            ariaLabel="Change theme"
            onClick={() => setTheme(themeName === "dark" ? "light" : "dark")}
          />
        </Tooltip>
      </div>
      <Dialog active={dialogOpen} onClose={() => setDialogOpen(false)} className="info-dialog">
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
      </Dialog>
    </Container>
  );
}

export default Navbar;