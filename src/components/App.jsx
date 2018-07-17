import React from 'react';
import MastHeader from './MastHeader';
import MainDisplayController from './MainDisplayController';

function App() {
  return (
    <div>
      <MastHeader class='mastHeader' />
      <MainDisplayController />
      <style jsx>{`
          .mastHeader {
            position:fixed;
          }`}</style>
    </div>
  );
}

export default App;
