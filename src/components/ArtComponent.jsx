import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import { v4 } from 'uuid';

function ArtComponent(props) {
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'wddmn666'});

  function addVimeo() {
    let result;
    if(props.currentPageId === 0.202) {
      result =
        <iframe src="https://player.vimeo.com/video/82696381" width="500" height="280" frameBorder='0'></iframe>;
    } else {
      result = null;
    }
    return result;
  }

  function switchImages(image, i) {
    let result;
    let url = 'http://res.cloudinary.com/wddmn666/image/upload/c_fit/v1/' + image.public_id;
    if(props.currentPageId === 0.201) {
      result =
        <div key={v4()} className='hqObjectiveBookLinkDivWrapper'>
          <a target='_blank' className='hqObjectiveBookLink' href={url} key={i}>{image.public_id}</a>
        </div>;
    } else {
      result =
        <Image key={i} width='500' publicId={image.public_id} />;
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
            {addVimeo()}
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
        .hqObjectiveBookLinkDivWrapper {
          padding: 10px;
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
