import React from 'react';
import MastHeader from './MastHeader';
import MainDisplayController from './MainDisplayController';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='mastHeaderContainer'>
        <MastHeader />
      </div>
        <Switch>
          <Route exact path='/' component={MainDisplayController} />
          <Route path='*' render={() =>
            <Redirect to='/' />
          } />
        </Switch>
    </div>
  );
}

export default App;
