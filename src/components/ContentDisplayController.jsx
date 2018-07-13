import React from 'react';
import ContentDisplayAbout from './ContentDisplayAbout';
import ContentDisplayProjectsList from './ContentDisplayProjectsList';

class ContentDisplayController extends React.Component {
  render(){
    return(
      <div className='contentDisplayContainer'>
        <ContentDisplayAbout />
        <ContentDisplayProjectsList />
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
