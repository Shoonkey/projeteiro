import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ThemeProvider from './components/ThemeProvider';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <div className="app">
            <Route exact path='/' component={Home} />
          </div>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
