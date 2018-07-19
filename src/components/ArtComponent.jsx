import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import { v4 } from 'uuid';

function ArtComponent(props) {
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'wddmn666'});
  function switchImages(image, i) {
    let result;
    if(props.currentPageId === 0.201) {
      result = <p key={i}>{image.public_id}</p>
    } else {
      result = <Image key={i} width='500' publicId={image.public_id} />
    }
    return result;
  }
  return(
    <div className='artComponentContainer'>
      {props.currentPageId}
      <div className='pageInformation'>
        {Object.keys(props.currentPageInformation).map( (info) =>
          <div key={v4()} className='information'>⚑ {props.currentPageInformation[info]}</div>
        )}
      </div>
      <div className='imageList'>
          <div>
            <CloudinaryContext cloudName='wddmn666'>
              {props.currentImageContent.map( (arrayImage, key) =>
                <div key={key}>
                  {arrayImage.map( (image, i) =>
                    switchImages(image, i)
                  )}
                </div>
              )}
            </CloudinaryContext>
          </div>
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
        .images {
          width:500px;
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
