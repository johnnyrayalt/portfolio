import React from 'react';

class ContentDisplayController extends React.Component {
  render(){
    return(
      <div className='contentDisplayContainer'>
        <style jsx>{`
          .contentDisplayContainer {
            width:100%;
            border:1px solid black;
            height: 80vh;
          }
        `}</style>
      </div>
    );}
}

export default ContentDisplayController;
