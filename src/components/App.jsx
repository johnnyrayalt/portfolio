import React from 'react';
import MastHeader from './MastHeader';
import ContentDisplayArea from './ContentDisplayArea';

class App extends React.Component {

  render() {
    return (
      <div>
        <MastHeader />
        <ContentDisplayArea />
      </div>
    );
  }
}

export default App;
