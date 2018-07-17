import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayAbout from './ContentDisplayAbout';
import ContentDisplayProjectsList from './ContentDisplayProjectsList';
import ProjectListArt from './ProjectListArt';
import ProjectListWeb from './ProjectListWeb';
import ArtComponent from './ArtComponent';
import { masterImageList } from './../constants/index';

class MainDisplayController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iaActive: false,
      pageId: NaN,
      currentImages: []
    };
    this.handleShowingSelectedContent = this.handleShowingSelectedContent.bind(this);
    this.handleSettingArtComponentState = this.handleSettingArtComponentState.bind(this);
  }


  handleShowingSelectedContent(pageIdRequested) {
    this.setState({
      isActive: true,
      pageId: pageIdRequested,
    });
  }

  handleSettingArtComponentState(pageIdRequested) {
    if(pageIdRequested === 0.201) {
      this.setState({
        currentImages: masterImageList.alphaDecay,
      });
    } else if(pageIdRequested === 0.202) {
      this.setState({
        currentImages: masterImageList.hqObjective,
      });
    } else if (pageIdRequested === 0.203) {
      this.setState({
        currentImages: masterImageList.optimizedLivingSpaces,
      });
    }
  }

  render() {
    let currentlyVisibleContent = null;
    if(this.state.isActive && this.state.pageId === 0) {
      currentlyVisibleContent =
        <ContentDisplayProjectsList
          handleShowingSelectedContent={this.handleShowingSelectedContent} />;

    } else if(this.state.isActive && this.state.pageId === 1) {
      currentlyVisibleContent =
        <ContentDisplayAbout
          handleShowingSelectedContent={this.handleShowingSelectedContent} />;

    } else if(this.state.isActive && this.state.pageId === 0.1) {
      currentlyVisibleContent =
        <ProjectListWeb />;

    } else if(this.state.isActive && this.state.pageId === 0.2) {
      currentlyVisibleContent =
        <ProjectListArt
          handleShowingSelectedContent={this.handleShowingSelectedContent}
          handleSettingArtComponentState={this.handleSettingArtComponentState} />;

    } else if(this.state.isActive && this.state.pageId === 0.201) {
      currentlyVisibleContent =
        <ArtComponent
          currentImageContent={this.state.currentImages} />;

    } else if(this.state.isActive && this.state.pageId === 0.202) {
      currentlyVisibleContent =
        <ArtComponent
          currentImageContent={this.state.currentImages} />;

    } else if(this.state.isActive && this.state.pageId === 0.203) {
      currentlyVisibleContent =
        <ArtComponent
          currentImageContent={this.state.currentImages} />;
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
            position:relative;
          }
        `}</style>
      </div>
    );
  }
}

export default MainDisplayController;
