import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Store from '../pages/Store';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component= {Login} />
        <Route exact path="/store" component= {Store} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
