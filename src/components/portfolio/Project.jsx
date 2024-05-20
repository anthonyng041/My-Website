import React from 'react'

const Project = (props) => {
  return (
    <div>
        <div><h3>{props.work.w_name}</h3><p>{props.work.description}</p><ul className="tags">{props.work.languages.map((language, i) => {return <li className="tag" key={i}>{language}</li>})}</ul></div>
        <img key={props.index} src={props.work.w_img} alt="" />
    </div>
  )
}

export default Project