import React from 'react';
import PropTypes from 'prop-types';

function ProjectListWeb(props) {
  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
    props.handleSettingArtComponentState(pageIdRequested);
  }
  return(
    <div className='projectListWebContainer'>
      <a onClick={handleClick.bind(this, props.pageIdList.threeJsDemo)} className='link'>Three.JS and React: DOM manipulation in three dimensions</a>

      <style jsx>{`
        .projectListWebContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
          margin:1em 20px;
        }
        .link {
          font-family: 'Montserrat', sans-serif;
          text-decoration:none;
          font-weight:bold;
          color:black;
          -webkit-transition: color 0.4s ease-in;
          padding-bottom:10px;
          cursor:e-resize;
          user-select:none;
          display:block;
        }
        a.link:hover {
          color:#0042ff;
          -webkit-transition: color 0.4s ease-in;
        }
      `}</style>
    </div>
  );
}

ProjectListWeb.propTypes = {
  handleShowingSelectedContent: PropTypes.func,
  handleSettingArtComponentState: PropTypes.func,
  pageIdList: PropTypes.object,
};

export default ProjectListWeb;
