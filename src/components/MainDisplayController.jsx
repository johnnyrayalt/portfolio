import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayAbout from './ContentDisplayAbout';
import ContentDisplayProjectsList from './ContentDisplayProjectsList';
import ProjectListArt from './ProjectListArt';
import ProjectListWeb from './ProjectListWeb';
import ArtComponent from './ArtComponent';
import ThreeJsDemo from './ThreeJsDemo';
import axios from 'axios';
import cloudinary from 'cloudinary-core';
import { projectInformationList, pageIdList } from './../constants/index';

class MainDisplayController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iaActive: false,
      pageId: NaN,
      pageIdList: pageIdList,
      currentImages: {
        alphaDecayImages: [],
        optimizedLivingSpacesImages: [],
        booksImages: []
      },
      currentPageInformation: projectInformationList,
    };
    this.handleShowingSelectedContent = this.handleShowingSelectedContent.bind(this);
    this.handleSettingArtComponentState = this.handleSettingArtComponentState.bind(this);
  }


  // API IMAGE CALL
  componentDidMount(){
    let currentImages;
    axios.get('http://res.cloudinary.com/wddmn666/image/list/alphaDecay.json').then(res => {
      this.state.currentImages.alphaDecayImages.push(res.data.resources);
    });
    axios.get('http://res.cloudinary.com/wddmn666/image/list/optimizedLivingSpaces.json').then(res => {
      this.state.currentImages.optimizedLivingSpacesImages.push(res.data.resources);
    });
    axios.get('http://res.cloudinary.com/wddmn666/image/list/books.json').then(res => {
      this.state.currentImages.booksImages.push(res.data.resources);
    });
  }

  handleShowingSelectedContent(pageIdRequested) {
    this.setState({
      isActive: true,
      pageId: pageIdRequested,
    });
  }

  handleSettingArtComponentState(pageIdRequested) {
    if(pageIdRequested === this.state.pageIdList.artComponentHqObjective) {
      this.setState({
        currentPageInformation: projectInformationList.hqObjective
      });
    } else if(pageIdRequested === this.state.pageIdList.artComponentAlphaDecay) {
      this.setState({
        currentPageInformation: projectInformationList.alphaDecay
      });
    } else if (pageIdRequested === this.state.pageIdList.artComponentOptimizedLivingSpaces) {
      this.setState({
        currentPageInformation: projectInformationList.optimizedLivingSpaces
      });
    }
  }

  render() {
    let currentlyVisibleContent = null;

//ContentDisplayProjectsList
    if(this.state.isActive && this.state.pageId === this.state.pageIdList.contentDisplayProjectsList) {
      currentlyVisibleContent =
        <ContentDisplayProjectsList
          handleShowingSelectedContent={this.handleShowingSelectedContent} />;

//ContentDisplayAbout
    } else if(this.state.isActive && this.state.pageId === this.state.pageIdList.contentDisplayAbout) {
      currentlyVisibleContent =
        <ContentDisplayAbout
          handleShowingSelectedContent={this.handleShowingSelectedContent} />;

//ProjectListWeb
    } else if(this.state.isActive && this.state.pageId === this.state.pageIdList.projectListWeb) {
      currentlyVisibleContent =
        <ProjectListWeb
          handleShowingSelectedContent={this.handleShowingSelectedContent}
          handleSettingArtComponentState={this.handleSettingArtComponentState}
          pageIdList={this.state.pageIdList} />;

// THREE JS DEMO COMPONENT
    } else if(this.state.isActice && this.state.pageId === this.state.pageIdList.threeJsDemo) {
      currentlyVisibleContent =
        <ThreeJsDemo />;

//ProjectListArt
    } else if(this.state.isActive && this.state.pageId === this.state.pageIdList.projectListArt) {
      currentlyVisibleContent =
        <ProjectListArt
          handleShowingSelectedContent={this.handleShowingSelectedContent}
          handleSettingArtComponentState={this.handleSettingArtComponentState}
          pageIdList={this.state.pageIdList}/>;

// ART COMPONENT hqObjective
    } else if(this.state.isActive && this.state.pageId === this.state.pageIdList.artComponentHqObjective) {
      currentlyVisibleContent =
        <ArtComponent
          pageIdList={this.state.pageIdList}
          currentPageId={this.state.pageId}
          currentImageContent={this.state.currentImages.booksImages}
          currentPageInformation={this.state.currentPageInformation} />;

// ART COMPONENT alphaDecay
    } else if(this.state.isActive && this.state.pageId === this.state.pageIdList.artComponentAlphaDecay) {
      currentlyVisibleContent =
        <ArtComponent
          pageIdList={this.state.pageIdList}
          currentPageId={this.state.pageId}
          currentImageContent={this.state.currentImages.alphaDecayImages}
          currentPageInformation={this.state.currentPageInformation} />;

// ART COMPONENT optimizedLivingSpacesImages
    } else if(this.state.isActive && this.state.pageId === this.state.pageIdList.artComponentOptimizedLivingSpaces) {
      currentlyVisibleContent =
        <ArtComponent
          pageIdList={this.state.pageIdList}
          currentPageId={this.state.pageId}
          currentImageContent={this.state.currentImages.optimizedLivingSpacesImages}
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
