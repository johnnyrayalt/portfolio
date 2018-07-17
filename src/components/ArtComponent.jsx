import React from 'react';
import PropTypes from 'prop-types';

function ArtComponent(props) {
  console.log(props.alphaDecay);
  return(
    <div className='artComponentContainer'>
      {props.alphaDecay.map((pic, i) =>
        <img
          src={props.alphaDecay[i]}
          key={i} />
      )}
      <style jsx>{`
        .artComponentContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
        }
      `}</style>
    </div>
  );
}

ArtComponent.propTypes = {
  alphaDecay: PropTypes.array
};

export default ArtComponent;
