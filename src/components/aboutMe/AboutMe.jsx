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
        </div>
      </div>
      <div className="right" >
        <div  className={"card background"}>
        </div>

        <div className="card">
          <img src="../../images/aboutMe.png" alt="pic" />
        </div>
      </div>
    </div>
  )
}

//     <button class="button-50" role="button"><AiOutlineDownload className='icon' /> CV</button>      

