import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import linkedIn from '../../assets/linkedin.png'
import github from '../../assets/github.png'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "33cf9e87-978f-4556-b313-e22ebc7fb719");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const data = await res.json();
      if (res.ok) {
        console.log("Success", data);
        alert(data.message);
      } else {
        console.error("Error:", data);
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Request failed. Please try again.");
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
      <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm always open to new opportunities and collaborations. If you'd like to work together, discuss a project, or just have a chat, feel free to reach out!</p>
        <div className="contact-details">
          <div className="contact-detail">
              <img src={mail_icon} alt="EmailIcon"  />
              <p>shanu2002official@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="Locationicon" />
            <p>Nagercoil,TamilNadu</p>
          </div>
          <div className="contact-detail">
              <img src={linkedIn} alt="linkedin_icon" width={30} />
              <a href="https://www.linkedin.com/in/shanu-s/">  <p>Shanu S</p> </a>   
          </div>  
          <div className="contact-detail">
              <img src={github} alt="Github_icon" width={30}  />
              <p>Github</p>
          </div>      
        </div>
      </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label >Your Name</label>
            <input type="text" placeholder='Enter your Name' name="name" />
            <label >Your Email</label>
            <input type="text" placeholder='Enter your Email' name="email" />
            <label >Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'/>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact