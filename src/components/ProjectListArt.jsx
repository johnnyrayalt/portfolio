import React from 'react';
import PropTypes from 'prop-types';
function ProjectListArt(props) {

  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
  }

  return(
    <div className='projectListFineArtContainer'>
      <option onClick={handleClick.bind(this, 0.201)} className='link'>hq Objective</option>
      <option onClick={handleClick.bind(this, 0.202)} className='link'>Alpha Decay</option>
      <option onClick={handleClick.bind(this, 0.203)} className='link'>Optimized Living Spaces #1</option>

      <style jsx>{`
        .projectListFineArtContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
        }
      `}</style>
    </div>
  );
}

ProjectListArt.propTypes = {
  handleShowingSelectedContent: PropTypes.func
};

export default ProjectListArt;
