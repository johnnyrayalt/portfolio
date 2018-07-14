import React from 'react';

function ContentDisplayAbout() {
  return(
    <div className='contentDisplayAboutContainer'>
      <p className='text'>⚑ b. 1991 Los Angeles, California</p>
      <p className='text'>⚑ Currently lives and works in Portland, Oregon</p>
      <p className='text'>⚑ Web Developer</p>
      <div className='socialLinksContainer'>
        <a href='https://www.instagram.com/msninstantmessenger/' target='_blank' className='socialLink'>⧚ INSTAGRAM</a>
        <a href='https://twitter.com/001alt' target='_blank' className='socialLink'>⧚ TWITTER</a>
        <a href='https://www.facebook.com/johnny.ray.alt' target='_blank' className='socialLink'>⧚ FACEBOOK</a>
      </div>
      <style jsx>{`
        .contentDisplayAboutContainer {
          font-family: 'Raleway', sans-serif;
        }
        .socialLinksContainer {
          display:flex;
          flex-direction:column;
          margin-left:20px;
        }
        .socialLink {
          text-decoration:none;
          color:black;
        }
        .socialLink:hover {
          cursor:ne-resize;
        }
      `}</style>
    </div>
  );
}

export default ContentDisplayAbout;
