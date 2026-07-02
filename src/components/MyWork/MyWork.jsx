import React from 'react'
import './MyWork.css'
import Ems_img from '../../assets/Ems.png'
import Weatherapp_img from '../../assets/Weatherapp.png'
import Ammonia_img from '../../assets/Ammonia_detection.jpg'
import { useReveal } from '../../hooks/useReveal'

const myworks = [
    {
        w_no: '01',
        w_name: 'Employee Management System',
        w_desc: 'A full-stack HR tool for managing employee records and workflows.',
        w_stack: 'React · Spring Boot · MySQL',
        w_img: Ems_img,
    },
    {
        w_no: '02',
        w_name: 'Weather App',
        w_desc: 'Live weather lookup with a clean, responsive interface.',
        w_stack: 'React · REST API',
        w_img: Weatherapp_img,
    },
    {
        w_no: '03',
        w_name: 'Ammonia Detector',
        w_desc: 'An IoT gas-detection device with real-time sensor readouts.',
        w_stack: 'ESP32 · Embedded C',
        w_img: Ammonia_img,
    },
]

const MyWork = () => {
    const [ref, visible] = useReveal()

    return (
        <div id="work" className="mywork section">
            <p className="eyebrow">// 04 — selected work</p>
            <h2 className="section-title">Projects</h2>

            <div ref={ref} className={`mywork-container reveal ${visible ? 'is-visible' : ''}`}>
                {myworks.map((work, index) => (
                    <div
                        key={index}
                        className="mywork-format reveal-child"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="mywork-img-wrap">
                            <img src={work.w_img} alt={work.w_name} />
                        </div>
                        <div className="mywork-info">
                            <span className="mywork-no">{work.w_no}</span>
                            <div>
                                <h3>{work.w_name}</h3>
                                <p className="mywork-desc">{work.w_desc}</p>
                                <p className="mywork-stack">{work.w_stack}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyWork
