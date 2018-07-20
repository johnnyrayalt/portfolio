import React from 'react';

function ContentDisplayAbout() {
  return(
    <div className='contentDisplayAboutContainer'>
      <p className='text'>⚑ b. 1991 Los Angeles, California</p>
      <p className='text'>⚑ Currently lives and works in Portland, Oregon</p>
      <p className='text'>⚑ Web Developer</p>
      <div className='socialLinksContainer'>
        <a href='https://www.instagram.com/msninstantmessenger/' target='_blank' className='socialLink'>INSTAGRAM ☍</a>
        <a href='https://twitter.com/001alt' target='_blank' className='socialLink'>TWITTER ☍</a>
        <a href='https://www.facebook.com/johnny.ray.alt' target='_blank' className='socialLink'>FACEBOOK ☍</a>
      </div>
      <style jsx>{`
        .contentDisplayAboutContainer {
          font-family: 'Raleway', sans-serif;
          font-size:24px;
          font-weight:bold;
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
          padding: 6px 0;
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
