import React from 'react';
import PropTypes from 'prop-types';

function NavLinksContainer(props) {

  function handleClick() {
    props.handleShowingSelectedContent('value');
  }

  return(
    <div className='navLinksContainerContainer'>
      <a id='githubLink' className='link' href='https://github.com/johnnyrayalt' target='_blank'>github</a>
      <a id='projectLink' className='link'>projects</a>
      <a id='emailLink' className='link' href='mailto:johnnyrayalt@gmail.com' target='_blank'>email</a>
      <a onClick={handleClick} id='aboutMe' className='link'>about</a>

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
};

export default NavLinksContainer;
