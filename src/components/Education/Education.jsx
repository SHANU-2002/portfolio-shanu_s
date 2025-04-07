import React from 'react'
import './Education.css'

const Education = () => {

  const Education_Details = [
    {
        e_name:"BE-ECE",
        e_institute:"Government College of Engineering,Erode",
        e_percentage:"Percentage : ",
        e_score:"78.9%"
    },
    {
        e_name:"HSC",
        e_institute:"SNM Hindu Vidayalaya Matriculation Higher Secondary School, Nagercoil",
        e_percentage:"Percentage : ",
        e_score:"74.5%"
    },
    {
        e_name:"SSLC",
        e_institute:"SNM Hindu Vidayalaya Matriculation Higher Secondary School, Nagercoil",
        e_percentage:"Percentage : ",
        e_score:"93.4%"
    },
]


  return (
    <div id='education' className='education'>
        <div className="education-title"><h1>Education & Experience</h1></div>
        <div className="education-container">
            {Education_Details.map((education,index)=>{
                return <div key={index} className="education-format">
                    <h3>{education.e_name}</h3>
                    <h2>{education.e_institute}</h2>
                    <p>{education.e_percentage}<span>{education.e_score}</span></p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Education;