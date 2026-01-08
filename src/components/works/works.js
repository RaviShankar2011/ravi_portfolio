import './works.css';
import React from 'react'
import work1 from '../../assets/wheelchair.jpg';
import work2 from '../../assets/face_detection.webp';
import work3 from '../../assets/ocr.jpg';
import work4 from '../../assets/disease.webp';
const Works = () => {
  return (
    <section id='works'>
      <h2 className="workstitle">My Projects</h2>
      <span className="worksdesc">i have done many prjects in AI/Ml and web Development which showcases my ability to work in those field</span>
      <div className="worksimgs">
        <div id='workdesc'>
          <img src={work1} alt="" className="worksimg" />
          <h2>
            Smart Wheel Chair Using EEG Signals
          </h2>
          <p>
            Worked on a smart wheelchair detecting eye blinks and jaw
            clenches to control movement using MNE library in Python.
          </p>
        </div>
        <div>
          <img src={work2} alt="" className="worksimg" />
          <h2>
            Attendance System Using Face recognition
          </h2>
          <p id='workdesc'>
            Created a Python-based real-time face recognition system for attendance, achieving
            recognition with anti-spoofing.
          </p>
        </div>
        <div>
          <img src={work3} alt="" className="worksimg" />
          <h2>
            Smart Vision Technology: Quality control in e-commerce
          </h2>
          <p id='workdesc'>
            Built an OCR-based system to extract MRP, MFG, EXP, and brand information from grocery
            item images.
          </p>
        </div>
        <div>
          <img src={work4} alt="" className="worksimg" />
          <h2>
            Disease Detection
          </h2>
          <p id='workdesc'>
            Developed a machine learning model using RandomForestClassifier to predict diseases. Analysed 10,000+ patient records, optimized feature selection, and improved model
          </p>
        </div>

      </div>
      <button className="worksbtn">See More</button>
    </section>
  )
}

export default Works;