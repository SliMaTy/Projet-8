import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faHtml5, faCss3, faJava, faNodeJs, faFigma } from '@fortawesome/free-brands-svg-icons'
import {faCheckToSlot, faEnvelope, faGear, faDatabase} from '@fortawesome/free-solid-svg-icons'

import leo from "./img/leo.PNG";




import git from "./img/github.PNG"
import comp from "./img/comp.PNG"

import ModalBooki from "./Modal/ModalBooki.js"
import ModalKasa from "./Modal/ModalKasa"
import ModalLivre from "./Modal/ModalLivre"
import ModalSophie from "./Modal/ModalSophie"
import ModalNina from "./Modal/ModalNina"
import './App.css';



function App() {
  return (
   <div className='container'>
      <header>
        <li className='social'>
          <a href='https://github.com/SliMaTy'>
            <ul><FontAwesomeIcon icon={ faGithub } /></ul>
          </a>
          <a href='https://www.linkedin.com/in/l%C3%A9o-jardin%C3%A9-1375b6256/'>
            <ul><FontAwesomeIcon icon={ faLinkedin } /></ul>
          </a>
        </li>
        <li className='nav'>
          <a href='#works'>
            <ul>Works</ul>
          </a>

          <a href='#experience'>
            <ul>Experiences</ul>
          </a>

          <a href='#service'>
            <ul>Services</ul>
          </a>

          <a href='#contact'>
            <ul>Contact</ul>
          </a>
        </li>
      </header>

      <li className='intro'>
        <ul className='leo'>I'm Léo.</ul>
        <ul className='backpicture'><img src={leo} alt="leo" /></ul>
      </li>

      <h1>Web</h1>
      <h1>Developper</h1>

      <li className='where'>
        <ul>From Open Classroom</ul>
        <ul>Creating stunning designs that make a real impact</ul>
      </li>

      <li className='projet' id="works">
        <div>
          <ModalBooki />
        </div>
        <div>
          <ModalKasa />
        </div>
        <div>
          <ModalLivre />
        </div>
        <div>
          <ModalSophie />
        </div>
        <div>
          <ModalNina />
        </div>
          
        <a href="https://github.com/SliMaTy">
          <img src={git} alt="github" />
          
        </a>
      </li>

      <h2 id="experience">9 months XP</h2>

      <li className='xp'>
        <ul>HTML / CSS / JAVASCRIPT / EXPRESS</ul>
      </li>

      <li className='comp'>
        <ul><FontAwesomeIcon icon={ faHtml5 } /></ul>
        <ul><FontAwesomeIcon icon={ faCss3 } /></ul>
        <ul><FontAwesomeIcon icon={ faJava } /></ul>
        <ul><FontAwesomeIcon icon={ faNodeJs } /></ul>
      </li>

      <li className='comm'>
        <ul><img src={leo} alt="leo" /></ul>
        <div>
          <ul>Léo Jardiné</ul>
          <ul>Web developper</ul>
        </div>
        <p>
          "As a dedicated web developer, I have the privilege of bringing ideas to life 
          through lines of code. 
          My goal is to craft engaging and user-friendly online experiences 
          that push the boundaries of technology"
          </p>
      </li>

      <h2>Services</h2>

      <li className='service' id="service">
        <ul>
          <div className='serviceTitle'>
            <FontAwesomeIcon icon={ faCheckToSlot } />
            <p>Front-end</p>
          </div>
          <div className='serviceDesc'>
            <p>HTML5</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>JAVASCRIPT</p>
            <p>REACT</p>
          </div>
        </ul>
        <ul>
          <div className='serviceTitle'>
            <FontAwesomeIcon icon={ faCheckToSlot } />
            <p>Back-end</p>
          </div>
          <div className='serviceDesc'>
            <p>NODE JS</p>
            <p>EXPRESS</p>
            <p className='serviceIcon'><FontAwesomeIcon icon={ faNodeJs } /></p>
          </div>
        </ul>
        <ul>
          <div className='serviceTitle'>
            <FontAwesomeIcon icon={ faCheckToSlot } />
            <p>Website</p>
          </div>
          <div className='serviceDesc'>
            <p>SITE HOSTING</p>
            <p>SITE OPTIMIZATION</p>
            <p className='serviceIcon'><FontAwesomeIcon icon={ faGear } /></p>
          </div>
        </ul>
        <ul>
          <div className='serviceTitle'>
            <FontAwesomeIcon icon={ faCheckToSlot } />
            <p>Data-base</p>
          </div>
          <div className='serviceDesc'>
            <p>MONGO DB</p>
            <p className='serviceIcon'><FontAwesomeIcon icon={ faDatabase } /></p>
          </div>
        </ul>
        <ul>
          <div className='serviceTitle'>
            <FontAwesomeIcon icon={ faCheckToSlot } />
            <p>Design</p>
          </div>
          <div className='serviceDesc'>
            <p>FIGMA</p>
            <p className='serviceIcon'><FontAwesomeIcon icon={ faFigma } /></p>
          </div>
        </ul>
      </li>

      <h2>Competences</h2>

      <a className="imgComp" href='https://miro.com/app/board/uXjVMra60aY=/?share_link_id=424046816160'>
        <img src={comp} alt="competences" />
      </a>

      <li className='motiv'>
        <ul>Product Website</ul>
        <ul>Let's elevate your vision and achieve your design goals together!</ul>
      </li>

      <h2>Contact</h2>

      <li className='contact' id="contact">
        <ul>
          <div className='mail'>
            <FontAwesomeIcon icon={ faEnvelope } />
            <ul>leo.jardine30@gmail.com</ul>
          </div>
          <div className='lien'>
            <ul><a href='https://github.com/SliMaTy'><FontAwesomeIcon icon={ faGithub } /></a></ul>
            <ul><a href='https://www.linkedin.com/in/l%C3%A9o-jardin%C3%A9-1375b6256/'><FontAwesomeIcon icon={ faLinkedin } /></a></ul>
          </div>
        </ul>
        <p>Send me hello or say something on social networks</p>
      </li>

    </div>  


  );
}

export default App;
