import React from 'react'
import { Link } from 'react-router-dom'
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'

const Projects = () => {
  return (
    <div>
      <h2>
        <span className="title-head">Our</span>
        <br />
        <strong>Projects</strong>
      </h2>
      <section className="container">
        {/* projects 1*/}
        <div className="project-item">
          <img src={p1} width={650} height={400} alt="" />
          <div className="project-text">
            <h3>Sample Project 1</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/project1">
              <button>VIEW PROJECT →</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container">
        {/* projects 2 */}
        <div className="project-item">
          <img src={p2} width={650} height={400} alt="" />
          <div className="project-text">
            <h3>Sample Project 2</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>VIEW PROJECT →</button>
          </div>
        </div>
      </section>

      <section className="container">
        {/* projects 3*/}
        <div className="project-item">
          <img src={p3} width={650} height={400} alt="" />
          <div className="project-text">
            <h3>Sample Project 3</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>VIEW PROJECT →</button>
          </div>
        </div>
      </section>
      <div className="nav-arrows2">
        <p className="counting">01 / 05</p>
        <button className="button4">←</button>
        <button className="button3">→</button>
      </div>
    </div>
  );
}

export default Projects