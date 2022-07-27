import React from 'react'
import "./AboutMe.scss"


export default function AboutMe() {

  return (
    <div id='aboutMe' className='aboutMe'>

      <div className="left">
        <div className="information">
          <h1><span>About me </span></h1>
          <h2>I'm a senior computer science engineering student from Lebanon!</h2>
          <h3>Ever since writing my first program in Python and manipulating it to produce the desired output, I have been obsessed with the idea of using software to solve practical problems.</h3>
          <div className="wrapper">
            <button>
              <a class="button_top" target="somethingUnique" href='https://docs.google.com/document/d/1rFFw3F-gRDoxr6qrwCNb2GEkeBDm8ooDcTkR-xg609Q/edit?usp=sharing'>PORTFOLIO</a>
            </button>
          </div>
        </div>

      </div>
      <div className="right" >
        <div className={"card background"}>
        </div>
        <div className="card">
          <img src="../../images/aboutMe.jpeg" alt="pic" />
        </div>
      </div>
    </div>
  )
}


