import React from 'react';

function ThreeJsDemo() {
  return(
    <div className='threeJsDemoContainer'>
      <div className='text'>Three Js Demo</div>
      <style jsx>{`
        .threeJsDemoContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
          margin: 1em 20px;
        }
        .text {
          padding-bottom:10px;
          user-select:all;
          cursor:cell;
        }
      `}</style>
    </div>
  );
}

export default ThreeJsDemo;
