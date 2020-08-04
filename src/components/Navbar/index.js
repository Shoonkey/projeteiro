import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import { ThemeContext } from '../ThemeProvider';
import { Container } from './styles';

function Navbar() {

  const { themeName, setTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Link to="/">
        <h1 className="logo">Projeteiro</h1>
      </Link>
      <div className="option-container">
        <Button 
          icon="contrast-outline" 
          onClick={() => setTheme(themeName === "dark" ? "light" : "dark")}
        />
      </div>
    </Container>
  );
}

export default Navbar;