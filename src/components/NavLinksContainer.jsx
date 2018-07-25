import React from 'react';
import PropTypes from 'prop-types';

function NavLinksContainer(props) {

  function handleClick(pageIdRequested) {
    props.handleShowingSelectedContent(pageIdRequested);
  }

  return(
    <div className='navLinksContainerContainer'>
      <a onClick={handleClick.bind(this, 0)} className='link'>projects</a>
      <a onClick={handleClick.bind(this, 1)} className='link'>about</a>
      <a id='githubLink' className='external' href='https://github.com/johnnyrayalt' target='_blank'>github ☍</a>
      <a id='emailLink' className='external' href='mailto:johnnyrayalt@gmail.com' target='_blank'>email ☍</a>

      <style jsx>{`
        .navLinksContainerContainer {
          display:flex;
          flex-direction:column;
          margin: 0 100px 0 20px;
          min-width:100px;
        }
        .link, .external {
          font-family: 'Montserrat', sans-serif;
          text-decoration:none;
          color:black;
          -webkit-transition: color 0.4s ease-in;
          cursor:e-resize;
          user-select:none;
        }
        .link {
          cursor:e-resize;
        }
        .external {
          cursor:ne-resize;
        }
        a.link:hover, a.external:hover {
          color:#0042ff;
          -webkit-transition: color 0.4s ease-in;
        }
      `}</style>
    </div>
  );
}

NavLinksContainer.propTypes = {
  handleShowingSelectedContent: PropTypes.func,
};

export default NavLinksContainer;
