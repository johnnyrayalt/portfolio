import React from 'react';
import PropTypes from 'prop-types';

function ArtComponent(props) {
  console.log(props.currentPageInformation);
  return(
    <div className='artComponentContainer'>
      <div className='pageInformation'>
        {Object.keys(props.currentPageInformation).map( (info, i) =>
          <div key={i} className='title'>⚑ {props.currentPageInformation[info]}</div>
        )}
      </div>
      <div className='imageList'>
        {props.currentImageContent.map( (image, i) =>
          <img src={image}
            key={i} />
        )}
      </div>

      <style jsx>{`
        .artComponentContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
        }
        .imageList {
          max-width:500px;
          display:flex;
          flex-direction:column;
        }
      `}</style>
    </div>
  );
}

ArtComponent.propTypes = {
  currentImageContent: PropTypes.array,
  currentPageInformation: PropTypes.object,
  currentPageId: PropTypes.number
};

export default ArtComponent;
