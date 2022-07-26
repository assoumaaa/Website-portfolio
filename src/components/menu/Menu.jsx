import React from 'react'
import "./Menu.scss"

export default function Menu({ sideBar }) {
  return (
    <div className={'menu ' + (sideBar && 'active')}>
      <ul>
        <li>
          <a href='#intro'> Intro </a>
        </li>
        <li>
          <a href='#aboutMe'> About</a>
        </li>
        <li>
          <a href='#skills'> Skills </a>
        </li>
        <li>
          <a href='#projects'> Projects </a>
        </li>
        <li>
          <a href='#contactMe'> Contact Me </a>
        </li>
      </ul>
    </div>
  )
}
