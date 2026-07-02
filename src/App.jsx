import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

const App = () => {
    return (
        <div>
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Education />
            <MyWork />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
