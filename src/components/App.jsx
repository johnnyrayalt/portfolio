import React from 'react';
import MastHeader from './MastHeader';
import MainDisplayController from './MainDisplayController';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <MastHeader class='mastHeader' />
        <Switch>
          <Route exact path='/' component={MainDisplayController} />
          <Route path='*' render={() =>
            <Redirect to='/' />
          } />
        </Switch>
      <style jsx>{`
          .mastHeader {
            position:fixed;
          }`}</style>
    </div>
  );
}

export default App;
