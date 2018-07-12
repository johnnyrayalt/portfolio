import React from 'react';
import MastHeader from './MastHeader';
import ContentDisplayController from './ContentDisplayController';

class App extends React.Component {

  render() {
    return (
      <div>
        <MastHeader />
        <ContentDisplayController />
      </div>
    );
  }
}

export default App;
