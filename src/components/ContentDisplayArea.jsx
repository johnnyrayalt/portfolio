import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayController from './ContentDisplayController';

function ContentDisplayArea() {
  return(
    <div className='contentDisplayAreaContainer'>
      <NavLinksContainer className='navLinksContainer' />
      <ContentDisplayController className='contentDisplay' />

      <style jsx>{`
        .contentDisplayAreaContainer {
          display:flex;
        }
        .navLinksContainer {
          position: fixed;
        }
      `}</style>
    </div>
  );
}

export default ContentDisplayArea;
