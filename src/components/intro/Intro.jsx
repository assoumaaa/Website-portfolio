import React from 'react'
import "./Intro.scss"
import { BsArrowDown } from "react-icons/bs";
import Typewriter from 'typewriter-effect';
import { AttentionSeeker } from "react-awesome-reveal";
import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";






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
                    <AttentionSeeker effect='bounce' triggerOnce='true' delay={500}>
                        <div className="icons">
                            <a target="somethingUnique" href='https://www.linkedin.com/in/omar-assouma-a60275210/'  > <AiFillLinkedin /> </a>
                            <a target="somethingUnique" href='https://github.com/assoumaaa'> <AiOutlineGithub />  </a>
                            <a target="somethingUnique" href='https://www.instagram.com/o.assouma/'> <AiFillInstagram />  </a>
                        </div>
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
                    </AttentionSeeker>
                </div>
                <a href='#aboutMe' className='arrow'>
                    <BsArrowDown />
                </a>
            </div>
        </div >
    )
}
