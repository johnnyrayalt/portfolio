import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import { v4 } from 'uuid';

function ArtComponent(props) {
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'wddmn666'});
  console.log(props.currentImageContent[0][0].public_id);
  return(
    <div className='artComponentContainer'>
      {props.currentPageId}
      <div className='pageInformation'>
        {Object.keys(props.currentPageInformation).map( (info) =>
          <div key={v4()} className='information'>⚑ {props.currentPageInformation[info]} : {info}</div>
        )}
      </div>
      <div className='imageList'>
        <CloudinaryContext cloudName='wddmn666'>
          <div>
                {props.currentImageContent.map( (image, i) =>
                  <p key={v4()}>{image[i].public_id}</p>
                )}
          </div>
        </CloudinaryContext>
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
