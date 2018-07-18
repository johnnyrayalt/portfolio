import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';


function ArtComponent(props) {
  console.log(props.currentImageContent);
  console.log(props.currentPageInformation);
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'wddmn666'});
  return(
    <div className='artComponentContainer'>
      {props.currentPageId}
      <div className='pageInformation'>
        {Object.keys(props.currentPageInformation).map( (info, i) =>
          <div key={i} className='information'>⚑ {props.currentPageInformation[info]}</div>
        )}
      </div>
      <div className='imageList'>
        <CloudinaryContext cloudName='wddmn666'>
          <div>
            {props.currentImageContent.map( (id, i) =>
              <Image key={i} publicId={id[i].public_id} />
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
