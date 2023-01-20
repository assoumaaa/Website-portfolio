import React from 'react'
import "./Intro.scss"
import Typewriter from 'typewriter-effect';
import { Slide } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";




export default function Intro() {
    return (
        <div id="intro" className='intro'>
            <div className="left">
                <div className="iconContainer">
                    <BsCodeSlash />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <Slide direction='right' triggerOnce='true' >

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
                    </Slide>
                </div>
            </div>
        </div >
    )
}
