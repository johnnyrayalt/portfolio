import React from 'react';
import PropTypes from 'prop-types';

function ContentDisplayProjectsList(props) {

  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
  }

  return(
    <div className='contentDisplayProjectsListContainer'>
      <a onClick={handleClick.bind(this, 0.1)} className='link'>Web Development</a>
      <a onClick={handleClick.bind(this, 0.2)} className='link'>Art</a>
      <style jsx>{`
        .contentDisplayProjectsListContainer {
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
      `}</style>
    </div>
  );
}

ContentDisplayProjectsList.propTypes = {
  handleShowingSelectedContent: PropTypes.func
};

export default ContentDisplayProjectsList;
