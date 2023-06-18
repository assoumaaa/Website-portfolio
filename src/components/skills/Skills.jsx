import { React } from 'react'
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
import { Fade } from "react-awesome-reveal";





export const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <div className="background"></div>
            <div className="block">
                <div className="information" id='information'>
                    <Fade duration={1000} triggerOnce='true'>
                        <h1><span>02. My Toolbox</span></h1>
                    </Fade>
                </div>
                <div className='grid' id='grid'>
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
        </div>
    )
}
