import React from "react";  
import { AboutBody, AboutBanner } from "./About.style";

export default function About() {
    return (
        <AboutBody id={'about'}>
            <AboutBanner src='./images/aboutbanner.png' alt="about banner" />
            <div></div>
        </AboutBody>
    )
}