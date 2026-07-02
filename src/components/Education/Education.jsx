import React from 'react'
import './Education.css'
import { useReveal } from '../../hooks/useReveal'

const Education_Details = [
    {
        e_name: 'BE — Electronics & Communication Engineering',
        e_institute: 'Government College of Engineering, Erode',
        e_score: '78.9%',
    },
    {
        e_name: 'Higher Secondary Certificate',
        e_institute: 'SNM Hindu Vidyalaya Matriculation Higher Secondary School, Nagercoil',
        e_score: '74.5%',
    },
    {
        e_name: 'Secondary School Leaving Certificate',
        e_institute: 'SNM Hindu Vidyalaya Matriculation Higher Secondary School, Nagercoil',
        e_score: '93.4%',
    },
]

const Education = () => {
    const [ref, visible] = useReveal()

    return (
        <div id="education" className="education section">
            <p className="eyebrow">// 03 — education</p>
            <h2 className="section-title">Education</h2>

            <div ref={ref} className={`education-container reveal ${visible ? 'is-visible' : ''}`}>
                {Education_Details.map((education, index) => (
                    <div
                        key={index}
                        className="education-format reveal-child"
                        style={{ transitionDelay: `${index * 90}ms` }}
                    >
                        <span className="education-index">{String(index + 1).padStart(2, '0')}</span>
                        <div className="education-body">
                            <h3>{education.e_name}</h3>
                            <p className="education-institute">{education.e_institute}</p>
                        </div>
                        <p className="education-score">{education.e_score}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
