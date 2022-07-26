import React from 'react'
import "./Topbar.scss"
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext } from 'react';
import { ThemeContext } from '../../context';


export default function Topbar({ sideBar, setSideBar }) {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleToggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  }


  return (
    <div className={'topbar ' + (sideBar && 'active')}>
      <div className='wrapper'>
        <div className="title">
          <h1><span>Omar</span></h1>
        </div>
        <div className="left">
          <div className="bar-items">
            <a href='#intro'>
              Intro
            </a>
          </div>
          <div className="bar-items">
            <a href='#aboutMe'>
              About Me
            </a>
          </div>
          <div className="bar-items">
            <a href='#skills'>
              Skills
            </a>
          </div>
          <div className="bar-items">
            <a href='#projects'>
              Projects
            </a>
          </div>
          <div className="bar-items">
            <a href='#contactMe'>
              Contact Me
            </a>
          </div>

        </div>
        <div className="right">
          <div className='light-dark-mode' onClick={handleToggle}>
            {darkMode ? (
              <BsSun className='icon' />)
              : (<BsMoon className='icon' />
              )}
          </div>
          <div className="hamburger" onClick={() => setSideBar(!sideBar)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}


/*

              */
