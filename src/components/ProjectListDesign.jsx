import React from 'react';

function ProjectListDesign() {
  return(
    <div className='projectListDesignContainer'>
      <p className='text'>Design Component</p>
      <style jsx>{`
        .projectListDesignContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
        }
      `}</style>
    </div>
  );
}

export default ProjectListDesign;
