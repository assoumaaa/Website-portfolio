import React from 'react'
import "./Intro.scss"
import { BsArrowDown } from "react-icons/bs";
import Typewriter from 'typewriter-effect';





export default function Intro() {
    return (
        <div id="intro" className='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src="../../images/intro.png" alt="pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Omar Assouma</h1>
                    <h3>
                        <Typewriter
                            options={{
                                autoStart: true,
                                strings: ["Software Engineer.", "Full-Stack Developer.", "Enthusiastic Learner."],
                                delay: 50,
                                loop: true,
                            }}
                            className="type-writer"
                        />
                    </h3>
                </div>
                <a href='#aboutMe' className='arrow'>
                    <BsArrowDown />
                </a>
            </div>
        </div >
    )
}
