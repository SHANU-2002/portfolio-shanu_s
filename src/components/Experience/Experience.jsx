import React from 'react'
import './Experience.css'
import { useReveal } from '../../hooks/useReveal'

const EXPERIENCE = [
    {
        role: 'Mobile Application Developer',
        company: 'Vinkweb Infotech Private Limited',
        duration: 'Sep 2025 — Aug 2026',
        status: 'current',
        description:
            'Building and maintaining cross-platform mobile applications, working across the full app lifecycle from UI implementation to API integration and release.',
        tags: ['Flutter', 'Dart', 'GraphQL', 'REST APIs'],
    },
]

const Experience = () => {
    const [ref, visible] = useReveal()

    return (
        <div id="experience" className="experience section">
            <p className="eyebrow">// 02 — experience</p>
            <h2 className="section-title">Experience</h2>

            <div ref={ref} className={`experience-timeline reveal ${visible ? 'is-visible' : ''}`}>
                {EXPERIENCE.map((item, index) => (
                    <div
                        key={index}
                        className="experience-item reveal-child"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="experience-marker">
                            <span className={`experience-dot ${item.status === 'current' ? 'experience-dot-live' : ''}`} />
                            {index !== EXPERIENCE.length - 1 && <span className="experience-line" />}
                        </div>

                        <div className="experience-content">
                            <div className="experience-top">
                                <h3>{item.role}</h3>
                                <p className="experience-duration">{item.duration}</p>
                            </div>
                            <p className="experience-company">{item.company}</p>
                            <p className="experience-desc">{item.description}</p>
                            <div className="experience-tags">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="experience-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
