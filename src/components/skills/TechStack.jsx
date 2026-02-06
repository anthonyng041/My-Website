import React from 'react'
import "./skills.css"

const techs = [
  'Html',
  'CSS',
  'React',
  'TypeScript',
  'JavaScript',
  'Kotlin',
  'Java',
  'Spring Boot',
  'Python',
  'Scikit Learn',
  'PyTorch',
  'Spark',
  'SQL',
  'Git'
]

const TechStack = () => {
  const half = Math.ceil(techs.length / 2)
  const left = techs.slice(0, half)
  const right = techs.slice(half)

  return (
    <section className="skills section" id="techstack">
      <h2 className="section__title">Tech Stack</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <div className="skills__box">
            <div className="skills__group">
              {left.map((t) => (
                <div className="skills__data" key={t}>
                  <i className='bx bx-badge-check' ></i>
                  <div>
                    <h3 className="skills__name">{t}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills__group">
              {right.map((t) => (
                <div className="skills__data" key={t}>
                  <i className='bx bx-badge-check' ></i>
                  <div>
                    <h3 className="skills__name">{t}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
