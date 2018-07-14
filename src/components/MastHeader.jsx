import React from 'react';

function MastHeader() {

  function returnHome() {

  }

  return(
    <div className='mastHeaderContainer'>
      <h1 onClick={returnHome}>
        Johnny Ray Alt
      </h1>
      <style jsx>{`
        .mastHeaderContainer {
          font-family: 'Raleway', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default MastHeader;
