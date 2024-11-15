import Link from 'next/link'
import { useEffect, useState } from 'react'

const EXP = [
  {
    name: 'Lorem 1',
    role: 'Role 1',
    url: 'https://coso.com',
    start: 'January 2021',
    end: 'Present',
    shortDescription: [
      'I had experience working on a large codebase utilizing Kibana and Elasticsearch.',
      "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others."
    ]
  },
  {
    name: 'Lorem 2',
    role: 'Role 2',
    url: 'https://coso.com',
    start: 'April 2021',
    end: 'Present',
    shortDescription: [
      'I had experience working on a large codebase utilizing Kibana and Elasticsearch.',
      "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others."
    ]
  },
  {
    name: 'Lorem 3',
    role: 'Role 3',
    url: 'https://coso.com',
    start: 'April 2021',
    end: 'Present',
    shortDescription: [
      'I had experience working on a large codebase utilizing Kibana and Elasticsearch.',
      "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others."
    ]
  }
]

function Experience() {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline')
      underline!.style.top = `${selected * 2.5}rem`
    }
    transformSelected()
  }, [selected])
  return (
    <div className="experience" id="experience">
      <div className="title">
        <h2></h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {EXP.map((item, i) => (
            <li
              key={i}
              className={`exp-slider-item ${
                i === selected && 'exp-slider-item-selected'
              }`}
              onClick={() => setSelected(i)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <h3>
            <span>{EXP[selected].name}</span>
            <span className="exp-details-position-company">
              {' '}
              <Link className="link" href={EXP[selected].url}>
                {EXP[selected].role}
              </Link>
            </span>
          </h3>
          <p className="exp-details-range">
            {EXP[selected].start} - {EXP[selected].end}
          </p>
          <ul className="exp-details-list">
            {EXP[selected].shortDescription.map((desc, i) => (
              <li key={i} className="exp-details-list-item">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
