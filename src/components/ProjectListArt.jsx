import React from 'react';
import PropTypes from 'prop-types';

function ProjectListArt(props) {
  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
    props.handleSettingArtComponentState(pageIdRequested);
  }

  return(
    <div className='projectListArtContainer'>
      <option onClick={handleClick.bind(this, 0.201)} className='link'>Alpha Decay</option>
      <option onClick={handleClick.bind(this, 0.202)} className='link'>hq Objective</option>
      <option onClick={handleClick.bind(this, 0.203)} className='link'>Optimized Living Spaces #1</option>

      <style jsx>{`
        .projectListArtContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
        }
        .link {
          font-family: 'Montserrat', sans-serif;
          text-decoration:none;
          color:black;
          -webkit-transition: color 0.4s ease-in;
        }
        option.link:hover {
          cursor:e-resize;
          color:#0042ff;
          -webkit-transition: color 0.4s ease-in;
        }
        a.link:hover {
          cursor:ne-resize;
          color:#0042ff;
          -webkit-transition: color 0.4s ease-in;
        }
      `}</style>
    </div>
  );
}

ProjectListArt.propTypes = {
  handleShowingSelectedContent: PropTypes.func,
  handleSettingArtComponentState: PropTypes.func
};

export default ProjectListArt;
