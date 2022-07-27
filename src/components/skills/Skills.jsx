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



export const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <div className="information">
                <h2>Skills & tools</h2>
                <h1><span>My Toolbox</span></h1>
                <h2>The skills, tools and technologies i use to bring products to life.</h2>
            </div>
            <div className="grids">
                <div class="grid-item"> HTML <FaHtml5 className='icons' /></div>
                <div class="grid-item"> Sass <FaSass className='icons'/></div>
                <div class="grid-item"> JS <FaJs className='icons'/></div>
                <div class="grid-item"> React <FaReact className='icons'/></div>
                <div class="grid-item"> Node.js <FaNode className='icons'/></div>
                <div class="grid-item"> Firebase <IoLogoFirebase className='icons'/></div>
                <div class="grid-item"> Python <FaPython className='icons'/></div>
                <div class="grid-item"> Flutter <FaCss3 className='icons' /></div>
                <div class="grid-item"> Git <FaGitAlt className='icons'/></div>
            </div>
        </div>
    )
}
