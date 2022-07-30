import React from 'react'
import "./Skills.scss"
import {
    FaHtml5,
    FaCss3,
    FaSass,
    FaJs,
    FaReact,
    FaNode,
    FaPython,
    FaGitAlt
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import Fade from 'react-reveal/Fade';





export const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <Fade bottom>
                <div className="information">
                    <h2>Skills & tools</h2>
                    <h1><span>My Toolbox</span></h1>
                    <h2>The skills, tools i use to bring products to life.</h2>
                </div>
            </Fade>

            <div className="grids">
                <div class="grid-item"> <span>HTML</span>  <FaHtml5 className='icons' /></div>
                <div class="grid-item"> <span>Sass</span> <FaSass className='icons' /></div>
                <div class="grid-item"> <span>Javasript</span> <FaJs className='icons' /></div>
                <div class="grid-item"> <span>React</span>  <FaReact className='icons' /></div>
                <div class="grid-item"> <span>Node.js</span>  <FaNode className='icons' /></div>
                <div class="grid-item"> <span>Firebase</span>  <IoLogoFirebase className='icons' /></div>
                <div class="grid-item"> <span>Python</span>  <FaPython className='icons' /></div>
                <div class="grid-item"> <span>Flutter</span>  <FaCss3 className='icons' /></div>
                <div class="grid-item"> <span>Git</span>  <FaGitAlt className='icons' /></div>
            </div>


        </div>
    )
}
