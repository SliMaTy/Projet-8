import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faHtml5, faCss3, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import {faCheckToSlot, faCircle} from '@fortawesome/free-solid-svg-icons'
import leo from "./img/leo.PNG";
import booki from "./img/booki.PNG"
import livre from "./img/livre.PNG"
import nina from "./img/nina.PNG"
import sophie from "./img/sophie.PNG"
import kasa from "./img/kasa.PNG"
import './App.css';


function App() {
  return (
   <div className='container'>
      <header>
        <li className='social'>
          <ul><FontAwesomeIcon icon={ faGithub } /></ul>
          <ul><FontAwesomeIcon icon={ faLinkedin } /></ul>
        </li>
        <li className='nav'>
          <ul>Works</ul>
          <ul>Experiences</ul>
          <ul>Services</ul>
          <ul>leo.jardine30@gmail.com</ul>
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

      <li className='projet'>
        <a href="https://github.com/SliMaTy/Projet-2-Openclassrooms">
          <img src={booki} alt="booki" />
          <ul>Projet 1</ul>
        </a>
        <a href="https://github.com/SliMaTy/Projet-2-Openclassrooms">
          <img src={nina} alt="nina" />
          <ul>Projet 2</ul>
        </a>
        <a href="https://github.com/SliMaTy/Projet-2-Openclassrooms">
          <img src={livre} alt="livre" />
          <ul>Projet 3</ul>
        </a>
        <a href="https://github.com/SliMaTy/Projet-2-Openclassrooms">
          <img src={sophie} alt="sophie" />
          <ul>Projet 4</ul>
        </a>
        <a href="https://github.com/SliMaTy/Projet-2-Openclassrooms">
          <img src={kasa} alt="kasa" />
          <ul>Projet 5</ul>
        </a>
        <a href="https://github.com/SliMaTy/Projet-2-Openclassrooms">
          <img src={booki} alt="booki" />
          <ul>Projet 6</ul>
        </a>
      </li>

      <h2>9 months XP</h2>

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
          As a dedicated web developer, I have the privilege of bringing ideas to life 
          through lines of code. 
          My goal is to craft engaging and user-friendly online experiences 
          that push the boundaries of technology
          </p>
      </li>

      <h2>Services</h2>

      <li className='service'>
        <ul><FontAwesomeIcon icon={ faCheckToSlot } />Front-end</ul>
        <ul><FontAwesomeIcon icon={ faCheckToSlot } />Back-end</ul>
        <ul><FontAwesomeIcon icon={ faCheckToSlot } />Website</ul>
        <ul><FontAwesomeIcon icon={ faCheckToSlot } />Data-base</ul>
        <ul><FontAwesomeIcon icon={ faCheckToSlot } />Design</ul>
      </li>

      <li className='motiv'>
        <ul>Product Website</ul>
        <ul>Let's elevate your vision and achieve your design goals together!</ul>
      </li>

      <h2>Contact</h2>

      <li className='contact'>
        <div>
          <ul><img src={leo} alt="leo" /></ul>
          <ul className='available'>
            <ul className='point'><FontAwesomeIcon icon={ faCircle } /></ul>
            <ul>Available for work</ul>
          </ul>
        </div>
        <ul>Send me hello or say something on social networks</ul>
      </li>


    </div>  


  );
}

export default App;
