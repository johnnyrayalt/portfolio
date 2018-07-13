import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayAbout from './ContentDisplayAbout';
import ContentDisplayProjectsList from './ContentDisplayProjectsList';

class MainDisplayController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      pageId: NaN,
      pageIdList: [
        0: 'projectList',
        1: 'aboutMe'
      ]
    };
    this.handleShowingSelectedContent = this.handleShowingSelectedContent.bind(this);
  }


  handleShowingSelectedContent(pageIdRequested) {
    this.setState({
      isHidden: !this.state.isHidden,
      pageId: this.state.pageIdList[pageIdRequested],
    });
  }

  render() {
    let currentlyVisibleContent = null;
    if(!this.state.isHidden && this.state.pageId === 0) {
      currentlyVisibleContent = <ContentDisplayProjectsList value={this.state.pageIdList[0]} />;
    } else if(!this.state.isHidden && this.state.pageId === 1) {
      currentlyVisibleContent = <ContentDisplayAbout />;
    }
    return(
      <div className='contentDisplayAreaContainer'>
        <NavLinksContainer
          pageIdList={this.state.pageIdList}
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
