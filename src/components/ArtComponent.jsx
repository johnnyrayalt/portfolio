import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import { v4 } from 'uuid';
import Radium, { Style } from 'radium';

function ArtComponent(props) {
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'wddmn666'});

  const linkStyle = {
    base: {
      color:'black',
      textDecoration:'none',
      padding:'20px 0',
      cursor:'ne-resize',
    },

    image: {
      textDecoration:'none',
      cursor:'zoom-in',
    }
  };

  const informationStyle = {
    paddingBottom:'10px',
  };

  function addVimeo() {
    let result;
    if(props.currentPageId === props.pageIdList.artComponentAlphaDecay) {
      result =
        <iframe src="https://player.vimeo.com/video/82696381" width="500" height="280" frameBorder='0'></iframe>;
    }
    return result;
  }

  function switchImages(image, i) {
    let result;
    let url = 'http://res.cloudinary.com/wddmn666/image/upload/c_fit/v1/' + image.public_id;
    if(props.currentPageId === props.pageIdList.artComponentHqObjective) {
      let imagePublicId = image.public_id;
      let textTransform = imagePublicId.replace('books/', '').replace('-Web', '').split(/(?=[A-Z])/).join(' ');
      result =
        <div key={v4()} className='hqObjectiveBookLinkDivWrapper'>
          <a target='_blank' style={linkStyle.base} href={url} key={i}>{textTransform}</a>
        </div>;
    } else {
      result =
        <a target='_blank' style={linkStyle.image} href={url} key={v4()}>
          <Image key={i} width='500' publicId={image.public_id} />
        </a>;
    }
    return result;
  }

  return(
    <div className='artComponentContainer'>
      <div className='pageInformation'>
        {Object.keys(props.currentPageInformation).map( (info) =>
          <div key={v4()} style={informationStyle} className='information'>⚑ {props.currentPageInformation[info]}</div>
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
          margin: 1em 20px;
        }
        .information {
          padding-bottom:10x;
          user-select:all;
          cursor:cell;
        }
        .information::selection {
          background: rgba(0,66,255,0.2);
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
  pageIdList: PropTypes.object,
  currentImageContent: PropTypes.array,
  currentPageInformation: PropTypes.object
};

export default ArtComponent;
