import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplay from './ContentDisplay';

class ContentDisplayController extends React.Component {
  render() {
    return(
      <div className='contentDisplayControllerContainer'>
        <NavLinksContainer className='navLinksContainer' />
        <ContentDisplay className='contentDisplay' />

        <style jsx>{`
          .contentDisplayControllerContainer {
            display:flex;
          }
          .navLinksContainer {
            position: fixed;
          }
        `}</style>
      </div>
    );
  }
}

export default ContentDisplayController;
