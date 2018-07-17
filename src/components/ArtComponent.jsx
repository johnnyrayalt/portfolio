import React from 'react';
import PropTypes from 'prop-types';

function ArtComponent(props) {
  return(
    <div className='artComponentContainer imageList'>
      {props.currentImageContent.map( (image, i) =>
        <img src={image}
             key={i} />
      )}

      <style jsx>{`
        .artComponentContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
        }
        .imageList {
          display:flex;
        }
      `}</style>
    </div>
  );
}

ArtComponent.propTypes = {
  currentImageContent: PropTypes.array,
  currentPageId: PropTypes.number
};

export default ArtComponent;
