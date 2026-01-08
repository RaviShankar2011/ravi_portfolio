import React from 'react';
import './skill.css';
import pl from '../../assets/pl.jpg';
import aiml from '../../assets/aiml.jpg';
import webd from '../../assets/webd.jpg';
import db from '../../assets/db.jpg';
import tools from '../../assets/tools.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skilltitle">What I Do</span>
        <span className="skilldesc">I'm a passionate Computer Science student with hands-on experience in full-stack development, machine learning, and app development using Flutter.
I've built smart systems like a brain-controlled wheelchair and a face recognition-based attendance app.
I enjoy solving real-world problems with innovative tech solutions and clean UI/UX design.
Currently exploring opportunities to grow as a developer and contribute to impactful projects.</span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={pl} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Programming Langguages</h2>
                    <p>I am proficient C/C++ and also know pyhton and java</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={aiml} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>AI/ML</h2>
                    <p>I am experinced in AI/Ml. I have done internship and many projects in AI/ML</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={webd} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Web Development</h2>
                    <p>I am skilled in making websites using React, HTML, CSS, JavaScript, PHP</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={db} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Database Management</h2>
                    <p>I am skilled in using SQL efficiently to manage database</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={tools} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Tools and Platforms</h2>
                    <p>I am familian with  Git & GitHub, VS Code, Android Studio, Google Colab, Jupyter Notebook, XAMPP / WAMP</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills

