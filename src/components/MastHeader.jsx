import React from 'react';

function MastHeader() {

  function returnHome() {

  }

  return(
    <div className='mastHeaderContainer'>
      <h1>
        Johnny Ray Alt
      </h1>
      <style jsx>{`
        .mastHeaderContainer {
          user-select:none;
          font-family: 'Raleway', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default MastHeader;
