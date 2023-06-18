import React from 'react'
import "./AboutMe.scss"
import { Fade } from "react-awesome-reveal";


export default function AboutMe() {

  return (
    <div id='aboutMe' className='aboutMe'>
      <div className="left">
        <div className="information">
          <Fade duration={1000} triggerOnce='true'>

            <div className="title">
              <h1><span>01. About me </span></h1>
            </div>
          </Fade>


          <Fade duration={1300} triggerOnce='true'>

            <div className="details">
              <h2>I'm a senior computer science engineering student from Lebanon!</h2>
              <h3>Ever since writing my first program in Python and manipulating it to produce the desired output, I have been obsessed with the idea of using software to solve practical problems.</h3>
            </div>
          </Fade>


          <Fade duration={1500}>

            <div className="wrapper">
              <button>
                <a class="button_top" target="somethingUnique" href='https://docs.google.com/document/d/1Bl36ya1ciJhPuj4a2dlAFr1Cqk4os_4r/edit?usp=sharing&ouid=107045992750468357506&rtpof=true&sd=true'>PORTFOLIO</a>
              </button>
            </div>
          </Fade>


        </div>
      </div>
      <div className="right" >

        <div className={"card background"}></div>
        <div className="card">
          <img src="../../images/myPicture.JPG" alt="pic" />
        </div>

      </div>
    </div >
  )
}


