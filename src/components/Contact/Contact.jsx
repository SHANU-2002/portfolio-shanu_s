import React, { useState } from 'react'
import './Contact.css'
import { useReveal } from '../../hooks/useReveal'

const Contact = () => {
    const [ref, visible] = useReveal()
    const [status, setStatus] = useState('idle')

    const onSubmit = async (event) => {
        event.preventDefault()
        setStatus('sending')
        const formData = new FormData(event.target)
        formData.append('access_key', '33cf9e87-978f-4556-b313-e22ebc7fb719')

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            })

            const data = await res.json()
            if (res.ok) {
                setStatus('sent')
                event.target.reset()
            } else {
                console.error('Error:', data)
                setStatus('error')
            }
        } catch (error) {
            console.error('Request failed:', error)
            setStatus('error')
        }
    }

    const contactDetails = [
        { label: 'Email', value: 'shanu2002official@gmail.com', href: 'mailto:shanu2002official@gmail.com' },
        { label: 'Location', value: 'Nagercoil, Tamil Nadu' },
        { label: 'LinkedIn', value: 'Shanu S', href: 'https://www.linkedin.com/in/shanu-s/' },
        // { label: 'GitHub', value: 'shanu-2002', href: 'https://github.com/shanu-2002' },
    ]

    return (
        <div id="contact" className="contact section">
            <p className="eyebrow">// 05 — get in touch</p>
            <h2 className="section-title">Let's talk</h2>

            <div ref={ref} className={`contact-section reveal ${visible ? 'is-visible' : ''}`}>
                <div className="contact-left reveal-child">
                    <p className="contact-intro">
                        I'm always open to new opportunities and collaborations. If you'd like
                        to work together, discuss a project, or just have a chat, feel free to
                        reach out.
                    </p>
                    <div className="contact-details">
                        {contactDetails.map((detail, index) => (
                            <div key={index} className="contact-detail">
                                <span className="contact-detail-label">{detail.label}</span>
                                {detail.href ? (
                                    <a href={detail.href} target="_blank" rel="noreferrer">{detail.value}</a>
                                ) : (
                                    <p>{detail.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right reveal-child">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required />

                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required />

                    <label>Message</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required />

                    <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Submit Now'}
                    </button>
                    {status === 'error' && <p className="contact-error">Something went wrong. Please try again.</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact
