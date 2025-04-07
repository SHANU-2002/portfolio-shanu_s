import React from 'react'
import './MyWork.css'
import Ems_img from '../../assets/Ems.png'
import Weatherapp_img from '../../assets/Weatherapp.png'
import Ammonia_img from '../../assets/Ammonia_detection.jpg'


const MyWork = () => {

  const myworks=[
      {
          w_no:"1",
          w_name:"Employee Management System using ReactJs & SpringBoot",
          w_img:Ems_img
      },
      {
          w_no:"2",
          w_name:"Weather App using ReactJs",
          w_img:Weatherapp_img
      },
      {
          w_no:"3",
          w_name:"Ammonia detector Using ESP32",
          w_img:Ammonia_img
      },
      
  ]
  
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div>
        <div className="mywork-container">
          {myworks.map((work,index)=>{
            return <div key={index} className="mywork-format">
              <img src={work.w_img} alt={`Image of ${work.w_img}`} />
              <h3>{work.w_name}</h3>
            </div>
          })}
        </div>
    </div>
  )
}

export default MyWork