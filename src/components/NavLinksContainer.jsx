import React from 'react';
import PropTypes from 'prop-types';

function NavLinksContainer(props) {

  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
  }

  return(
    <div className='navLinksContainerContainer'>
      <option onClick={handleClick.bind(this, 0)} className='link'>projects {props.pageIdList[0]}</option>
      <option onClick={handleClick.bind(this, 1)} className='link'>about {props.pageIdList[1]}</option>
      <a id='githubLink' className='link' href='https://github.com/johnnyrayalt' target='_blank'>github</a>
      <a id='emailLink' className='link' href='mailto:johnnyrayalt@gmail.com' target='_blank'>email</a>

      <style jsx>{`
        .navLinksContainerContainer {
          display:flex;
          flex-direction:column;
          margin: 0 100px 0 20px;
        }
        .link {
          font-family: 'Montserrat', sans-serif;
          text-decoration:none;
          color:black;
        }
        .link:hover {
          cursor:e-resize;
        }
      `}</style>
    </div>
  );
}

NavLinksContainer.propTypes = {
  handleShowingSelectedContent: PropTypes.func,
  pageIdList: PropTypes.array,
  value: PropTypes.number
};

export default NavLinksContainer;
