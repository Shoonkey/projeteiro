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
      <Dialog active={dialogOpen} onClose={() => setDialogOpen(false)}>
        <h1 className="title">A very good title</h1>
        <div className="description">
          <p>
            Esse pariatur tempor laboris laborum veniam et sunt commodo nisi laboris enim culpa ut eiusmod. Irure irure ad Lorem consectetur nulla. Sunt cupidatat quis consequat ipsum. Consectetur dolor reprehenderit sit nisi ad labore consectetur et Lorem amet anim occaecat dolor. Fugiat magna quis elit pariatur est nisi. Pariatur ipsum sunt ad voluptate ea.
            Anim officia velit do ut nulla aliquip commodo pariatur reprehenderit irure. 
          </p>
          <p>
            Velit reprehenderit aliqua aute amet duis in magna dolore dolor amet. Fugiat nulla aute eiusmod proident enim esse incididunt aliquip sint exercitation duis do. Non ipsum mollit sint occaecat. Est exercitation aute commodo duis irure eu.
          </p>
          <p>
            Culpa aute commodo ad consequat Lorem cupidatat pariatur ex voluptate irure. Excepteur do velit aliqua et aliqua aute adipisicing nisi. Anim deserunt velit duis culpa sunt do. Nisi in ipsum et nulla proident ea aliqua sunt. Eiusmod qui pariatur eiusmod sint excepteur esse eu. Nulla sunt nulla mollit est nisi. Commodo laboris excepteur labore in mollit.
          </p>
          <p>
            Consectetur officia adipisicing aliquip in adipisicing ad ullamco nulla nisi culpa velit proident. Laboris quis voluptate enim veniam adipisicing cillum occaecat voluptate quis. Irure ex Lorem voluptate sit ipsum. Dolor proident commodo mollit cillum ut exercitation pariatur ullamco eiusmod nostrud ea nulla. Consectetur do quis do cillum tempor quis non.
          </p>
        </div>
      </Dialog>
    </Container>
  );
}

export default Navbar;