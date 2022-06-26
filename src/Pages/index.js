import React from 'react'
import Hero from '../GlobalComponents/Hero'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

export default function Home({ props }) {
    
    return (
        <>
        <Hero props={props} />
        <About />
        <Projects />
        <Contact />
        </>
    )
}