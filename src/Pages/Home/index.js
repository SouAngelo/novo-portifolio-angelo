import React from 'react';
import './sass/Home.sass'


export default function Main() {
 return (
   <main className='main-home'>
      <div className='apresentacao'>
        <div className='div-logo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/AIMP3_Logo.png'/>
           <p>ÂngeloGustavo</p>
        </div>

        <div className='dev'>
          <h1>Desenvolvedor Front End</h1>
          <p>Junior</p>
        </div>
      </div>

      <div className='image'>

        <div className='img'>
        <svg className="svg-circle" viewBox="0 0 707 707" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="353.5" cy="353.5" r="335" stroke-width="27"/>
        </svg>
          <img src='https://lh3.googleusercontent.com/chziL_oCXXSH8M68HNW5PfBDiqIqrfiyhlxcxHM9zRy9grDOeS0d5OCkf3ju3pGwFsq4BPXsh1mDjE0szwTfW3f_IFgL0l3cDf_UvJ4=w1400-k' className='zenitsu'/>
          
        </div>
      </div>

      <div className='redes'>
        <a href='https://www.linkedin.com/in/souangelogustavo/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/SouAngelo' target='_blank'><i className="fa-brands fa-github"></i></a>
        <a href='https://api.whatsapp.com/send?phone=5511985024510' target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
        <a href='https://youtube.com/channel/UCgznEqXuuQQ3I4qviE02WJA' target='_blank'><i className="fa-brands fa-youtube"></i></a>
      </div>

      <h2 className='devjr-text'><span>D</span><span>e</span><span>s</span>
      <span>e</span><span>n</span><span>v</span><span>o</span><span>l</span>
      <span>v</span><span>e</span><span>d</span><span>o</span><span>r</span> 
      <span className='front'>F</span><span className='front'>r</span><span className='front'>o</span><span className='front'>n</span><span className='front'>t</span>
      <span className='end'>E</span><span className='end'>n</span><span className='end'>d</span><span className='end'>J</span><span className='end'>r</span>  </h2>
   </main>
 );
}