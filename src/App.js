import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './pages/Game/Game';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Game} />
        <Route path='/level/:level' component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
