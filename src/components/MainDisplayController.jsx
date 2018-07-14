import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayAbout from './ContentDisplayAbout';
import ContentDisplayProjectsList from './ContentDisplayProjectsList';

class MainDisplayController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iaActive: false,
      pageId: NaN,
    };
    this.handleShowingSelectedContent = this.handleShowingSelectedContent.bind(this);
  }


  handleShowingSelectedContent(pageIdRequested) {
    this.setState({
      isActive: true,
      pageId: pageIdRequested,
    });
    console.log(this.state.pageId);
  }

  render() {
    let currentlyVisibleContent = null;
    if(this.state.isActive && this.state.pageId === 0) {
      currentlyVisibleContent = <ContentDisplayProjectsList />;
    } else if(this.state.isActive && this.state.pageId === 1) {
      currentlyVisibleContent = <ContentDisplayAbout />;
    }
    return(
      <div className='contentDisplayAreaContainer'>
        <NavLinksContainer
          handleShowingSelectedContent={this.handleShowingSelectedContent}
          className='navLinksContainer' />
        {currentlyVisibleContent}
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

export default MainDisplayController;
