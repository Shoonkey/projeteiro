import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../core/Button';
import Tooltip from '../../core/Tooltip';
import { ThemeContext } from '../../core/ThemeProvider';
import InfoDialog from '../../dialogs/InfoDialog';
import { Container } from './styles';

function Navbar() {

  const { themeName, setTheme } = useContext(ThemeContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const infoDialogBtnRef = useRef();

  return (
    <Container>
      <Link to="/">
        <h1 className="logo">Projeteiro</h1>
      </Link>
      <div className="option-container">
        <Button
          icon="information-circle-outline"
          ariaLabel="Information"
          ref={infoDialogBtnRef}
          onClick={() => setDialogOpen(true)}
        />
        <Tooltip content="Info" reference={infoDialogBtnRef} />
        <Tooltip content="Change theme">
          <Button 
            icon="contrast-outline" 
            ariaLabel="Change theme"
            onClick={() => setTheme(themeName === "dark" ? "light" : "dark")}
          />
        </Tooltip>
      </div>
      <InfoDialog 
        active={dialogOpen} 
        onClose={() => setDialogOpen(false)}
        activator={infoDialogBtnRef}
      />
    </Container>
  );
}

export default Navbar;