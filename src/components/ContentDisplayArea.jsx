import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayController from './ContentDisplayController';

class ContentDisplayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [{
        aboutMe: 1,
        projectsList: 2,
      }]
    };
    this.handleShowingSelectedContent = this.handleShowingSelectedContent.bind(this);
  }

  handleShowingSelectedContent(selectedLinkStringId) {
    console.log(selectedLinkStringId);
  }

  render() {
    return(
      <div className='contentDisplayAreaContainer'>
        <NavLinksContainer
          handleShowingSelectedContent={this.handleShowingSelectedContent}
          className='navLinksContainer' />
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
}

export default ContentDisplayArea;
