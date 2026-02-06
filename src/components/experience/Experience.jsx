import React from 'react'
import './experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <h2 className="section__title">Experience</h2>

      <div className="experience__container container">
        <article className="experience__item">
          <h3 className="experience__company">Intact</h3>
          <p className="experience__role">Full Stack Developer Intern</p>
          <p className="experience__dates">January 2025 — April 2025<br/>September 2025 — December 2025</p>
          <div className="experience__desc">
            <ul className="experience__list">
              <li>- Contributed to the development and enhancement of micro-frontends using React.</li>
              <li>- Contributed to the development of backend APIs using Java and Kotlin.</li>
              <li>- Adjusted unit tests to maintain code quality and participated in bug fixes and production support.</li>
              <li>- Actively participated in Agile/Scrum ceremonies, including sprint planning, stand-ups, and retrospectives.</li>
              <li>- Worked in a bilingual (English/French) environment, collaborating with cross-functional teams across Canada.</li>
              <li>- Developed a strong understanding of the software development lifecycle and continuous delivery pipelines.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
