import React from 'react';
import PropTypes from 'prop-types';

function ProjectListArt(props) {
  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
    props.handleSettingArtComponentState(pageIdRequested);
  }

  return(
    <div className='projectListArtContainer'>
      <a onClick={handleClick.bind(this, 0.201)} className='link'>hq Objective</a>
      <a onClick={handleClick.bind(this, 0.202)} className='link'>Alpha Decay</a>
      <a onClick={handleClick.bind(this, 0.203)} className='link'>Optimized Living Spaces #1</a>

      <style jsx>{`
        .projectListArtContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
          margin: 1em 20px;
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

ProjectListArt.propTypes = {
  handleShowingSelectedContent: PropTypes.func,
  handleSettingArtComponentState: PropTypes.func,
};

export default ProjectListArt;
