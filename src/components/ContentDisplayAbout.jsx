import React from 'react';

function ContentDisplayAbout() {
  return (
    <div className='contentDisplayAboutContainer'>
      <div className='text'>⚑ b. 1991 Los Angeles, California</div>
      <div className='text'>⚑ Currently lives and works in Portland, Oregon</div>
      <div className='text'>⚑ Web Developer</div>
      <div className='socialLinksContainer'>
        <a href='https://www.github.com/johnnyrayalt/' target='_blank' className='socialLink'>GITHUB ☍</a>
        <a href='https://www.instagram.com/msninstantmessenger/' target='_blank' className='socialLink'>INSTAGRAM ☍</a>
      </div>
      <style jsx>{`
        .contentDisplayAboutContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
          margin: 1em 20px;
        }
        .text {
          padding-bottom:10px;
          user-select:all;
          cursor:cell;
        }
        .text::selection {
          background: rgba(0,66,255,0.2);
        }
        .socialLinksContainer {
          display:flex;
          flex-wrap: nowrap;
          flex-direction:column;
          margin-left:20px;
          width:40%;
        }
        .socialLink {
          text-decoration:none;
          color:black;
          padding-bottom:10px;
          -webkit-transition: color 0.4s ease-in;
          cursor:ne-resize;
        }
        .socialLink:hover {
          color:#0042ff;
          -webkit-transition: color 0.4s ease-in;
        }
      `}</style>
    </div>
  );
}

export default ContentDisplayAbout;
