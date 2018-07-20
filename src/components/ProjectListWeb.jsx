import React from 'react';
import PropTypes from 'prop-types';

function ProjectListWeb(props) {
  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
    props.handleSettingArtComponentState(pageIdRequested);
  }
  return(
    <div className='projectListWebContainer'>
      <option onClick={handleClick.bind(this, 0.101)} className='link'>Three.JS and React: DOM manipulation in three dimensions</option>

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
        }
        option.link:hover {
          color:#0042ff;
          -webkit-transition: color 0.4s ease-in;
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
};

export default ProjectListWeb;
