import React from 'react'
import "./ProjectsList.scss"

export default function ProjectsList({ title,id,active,setSelected } ) {
  return (
    <li className={"projectsList " + (active && "active")} onClick={() => setSelected(id)}>
        {title}

    </li>
  )
}
