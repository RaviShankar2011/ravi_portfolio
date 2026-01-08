import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/contactlogo.jpg'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
            <span className="hello">
                Hello
            </span>
            <span className="introtext">
                I'm <span className="introname">Ravi Shankar</span><br/> CSE Student
            </span>
            <p className="intropara">I am a cse student skilled in AI/ML SOftware Develeopment<br/> and Web development</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnimg'/>Hire me</button></Link>
        </div>
        <img className='bg' src={bg} alt="profile"/>
    </section>
  )
}

export default Intro;
