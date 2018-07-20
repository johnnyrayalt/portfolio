import React from 'react';
import NavLinksContainer from './NavLinksContainer';
import ContentDisplayAbout from './ContentDisplayAbout';
import ContentDisplayProjectsList from './ContentDisplayProjectsList';
import ProjectListArt from './ProjectListArt';
import ProjectListWeb from './ProjectListWeb';
import ArtComponent from './ArtComponent';
import axios from 'axios';
import cloudinary from 'cloudinary-core';
import { projectInformationList } from './../constants/index';

class MainDisplayController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iaActive: false,
      pageId: NaN,
      currentImages: {
        alphaDecayImages: [],
        optimizedLivingSpacesImages: [],
        booksImages: []
      },
      currentPageInformation: projectInformationList
    };
    this.handleShowingSelectedContent = this.handleShowingSelectedContent.bind(this);
    this.handleSettingArtComponentState = this.handleSettingArtComponentState.bind(this);
  }

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
    if(pageIdRequested === 0.201) {
      this.setState({
        currentPageInformation: projectInformationList.hqObjective
      });
    } else if(pageIdRequested === 0.202) {
      this.setState({
        currentPageInformation: projectInformationList.alphaDecay
      });
    } else if (pageIdRequested === 0.203) {
      this.setState({
        currentPageInformation: projectInformationList.optimizedLivingSpaces
      });
    }
  }

  //// TODO:
  // 2. break pageIDs into constants index.js file,
  // 3. refactor option elements to be p elements + adjust styles



  render() {
    let currentlyVisibleContent = null;
//ContentDisplayProjectsList
    if(this.state.isActive && this.state.pageId === 0) {
      currentlyVisibleContent =
        <ContentDisplayProjectsList
          handleShowingSelectedContent={this.handleShowingSelectedContent} />;

//ContentDisplayAbout
    } else if(this.state.isActive && this.state.pageId === 1) {
      currentlyVisibleContent =
        <ContentDisplayAbout
          handleShowingSelectedContent={this.handleShowingSelectedContent} />;

//ProjectListWeb
    } else if(this.state.isActive && this.state.pageId === 0.1) {
      currentlyVisibleContent =
        <ProjectListWeb
          handleShowingSelectedContent={this.handleShowingSelectedContent}
          handleSettingArtComponentState={this.handleSettingArtComponentState}/>;

//ProjectListArt
    } else if(this.state.isActive && this.state.pageId === 0.2) {
      currentlyVisibleContent =
        <ProjectListArt
          handleShowingSelectedContent={this.handleShowingSelectedContent}
          handleSettingArtComponentState={this.handleSettingArtComponentState}/>;

// ART COMPONENT hqObjective
    } else if(this.state.isActive && this.state.pageId === 0.201) {
      currentlyVisibleContent =
        <ArtComponent
          currentPageId={this.state.pageId}
          currentImageContent={this.state.currentImages.booksImages}
          currentPageInformation={this.state.currentPageInformation} />;

// ART COMPONENT alphaDecay
    } else if(this.state.isActive && this.state.pageId === 0.202) {
      currentlyVisibleContent =
        <ArtComponent
          currentPageId={this.state.pageId}
          currentImageContent={this.state.currentImages.alphaDecayImages}
          currentPageInformation={this.state.currentPageInformation} />;
// ART COMPONENT optimizedLivingSpacesImages
    } else if(this.state.isActive && this.state.pageId === 0.203) {
      currentlyVisibleContent =
        <ArtComponent
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
