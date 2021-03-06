import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ThemeProvider from './core/ThemeProvider';
import { Home, Project } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <div className="app">
            <Route exact path='/' component={Home} />
            <Route path='/project/:id' component={Project} />
          </div>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
