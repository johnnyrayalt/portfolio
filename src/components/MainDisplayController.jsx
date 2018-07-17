import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayAbout from './ContentDisplayAbout';
import ContentDisplayProjectsList from './ContentDisplayProjectsList';
import ProjectListArt from './ProjectListArt';
import ProjectListWeb from './ProjectListWeb';
import ArtComponent from './ArtComponent';
import { masterImageList, projectInformationList } from './../constants/index';

class MainDisplayController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iaActive: false,
      pageId: NaN,
      currentImages: [],
      currentPageInformation: {}
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

  //// TODO:
  // 1. add optimized living spaces to product information
  // 2. break pageIDs into constants index.js file,
  // 3. refactor option elements to be p elements + adjust styles

  handleSettingArtComponentState(pageIdRequested) {
    if(pageIdRequested === 0.201) {
      this.setState({
        currentImages: masterImageList.hqObjective,
        currentPageInformation: projectInformationList.hqObjective
      });
    } else if(pageIdRequested === 0.202) {
      this.setState({
        currentImages: masterImageList.alphaDecay,
        currentPageInformation: projectInformationList.alphaDecay
      });
    } else if (pageIdRequested === 0.203) {
      this.setState({
        currentImages: masterImageList.optimizedLivingSpaces,
        currentPageInformation: projectInformationList.optimizedLivingSpaces
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
          currentImageContent={this.state.currentImages}
          currentPageInformation={this.state.currentPageInformation} />;

    } else if(this.state.isActive && this.state.pageId === 0.202) {
      currentlyVisibleContent =
        <ArtComponent
          currentImageContent={this.state.currentImages}
          currentPageInformation={this.state.currentPageInformation} />;

    } else if(this.state.isActive && this.state.pageId === 0.203) {
      currentlyVisibleContent =
        <ArtComponent
          currentImageContent={this.state.currentImages}
          currentPageInformation={this.state.currentPageInformation} />;
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
