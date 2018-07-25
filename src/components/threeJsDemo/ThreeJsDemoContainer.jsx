import React, { Component } from 'react';
import Three, { Scene, OrbitalCamera, Mesh, DirectionalLight, AmbientLight } from './ThreeContextEnvironment';
import { v4 } from 'uuid';

const THREE = require('three');

const fullWindow = {
  width: '80vw',
  height: '100vh',
};


const platform = new THREE.CylinderGeometry( 20, 10, 30, 8, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xff00ff, flatShading: true } );

const randomPosition = () => {
  return ( Math.random() - 0.5 ) * 1000,
  ( Math.random() - 0.5 ) * 1000,
  ( Math.random() - 0.5 ) * 1000;
};

const positions = new Array(50).fill('x').map(randomPosition);
function ThreeJsDemoContainer(props) {
  console.log(positions);
  console.log(platform);
  console.log(material);
  return(
    <Three style={fullWindow}>
      <Scene fog={new THREE.FogExp2( 0x333333, 0.002 )}>
        <OrbitalCamera enableZoom={false} position={[0, 0, 500]} />
        <DirectionalLight color={0xffffff}
          position={[1, 1, 1]} />
        <DirectionalLight color={0x002288}
          position={[-1, -1, -1]} />
        <AmbientLight color={0x222222}/>
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
  );
}

export default ThreeJsDemoContainer;
