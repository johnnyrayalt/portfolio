import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

function ArtComponent(props) {
  console.log(props.currentImageContent);
  console.log(props.currentPageInformation);
  return(
    <div className='artComponentContainer'>
      {props.currentPageId}
      <div className='pageInformation'>
        {Object.keys(props.currentPageInformation).map( (info, i) =>
          <div key={i} className='title'>⚑ {props.currentPageInformation[info]}</div>
        )}
      </div>
      <div className='imageList'>
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
  currentPageId: PropTypes.number,
  currentImageContent: PropTypes.array,
  currentPageInformation: PropTypes.object
};

export default ArtComponent;
