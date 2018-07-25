import React, { Component } from 'react';
import Three, { Scene, OrbitalCamera, Mesh, DirectionalLight, AmbientLight } from './ThreeContextEnvironment';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const THREE = require('three');

const fullWindow = {
  width: '50vw',
  height: '50vh',
};

const platform = new THREE.SphereGeometry( 20, 170, 170 );
const material = new THREE.MeshPhongMaterial( { color: 0x0042ff, flatShading: true } );

const randomPosition = () => [
   ( Math.random() - 0.5 ) * 1000,
   ( Math.random() - 0.5 ) * 1000,
   ( Math.random() - 0.5 ) * 1000
];
const positions = new Array(50).fill('x').map(randomPosition);

const informationStyle = {
  paddingBottom:'10px',
};

function ThreeJsDemoContainer(props) {
  return(
    <div className='ThreeJsDemoContainerContainer'>
      <div className='pageInformation'>
        {Object.keys(props.currentPageInformation.threeJsDemoContainer).map( (info) =>
          <div key={v4()} style={informationStyle} className='information'>⚑ {props.currentPageInformation.threeJsDemoContainer[info]}</div>
        )}
      </div>
      <div style={fullWindow}>
        <Three style={fullWindow}>
          <Scene fog={new THREE.FogExp2( 0xffffff, 0.002 )}>
            <OrbitalCamera enableZoom={false} position={[0, 0, 500]} />
            <DirectionalLight color={0xffffff}
              position={[1, 1, 1]} />
            <DirectionalLight color={0xffffff}
              position={[-1, -1, -1]} />
            <AmbientLight color={0xffffff}/>
            {
              positions.map(position =>
                <Mesh key={position}
                  geometry={platform}
                  material={material}
                  position={position} />
              )
            }
          </Scene>
        </Three>
      </div>
      <style jsx>{`
        .ThreeJsDemoContainerContainer {
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
      `}</style>
    </div>
  );
}

ThreeJsDemoContainer.propTypes = {
  currentPageInformation: PropTypes.object,
}

export default ThreeJsDemoContainer;
