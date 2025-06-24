import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/heroImg.png";
import aboutImg1 from "../assets/images/aboutImg1.png";
import aboutImg2 from "../assets/images/aboutImg2.png";
import aboutImg3 from "../assets/images/aboutImg3.png";
import ph2 from "../assets/images/ph2.png";
import ph3 from "../assets/images/ph3.png";
import ph4 from "../assets/images/ph4.png";
import ph5  from "../assets/images/ph5.png";
import contact  from "../assets/images/contact.png";

function Home() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-left">
          <h2>
            <span className="title-head">PROJECT</span>
            <br />
            <strong>Lorum</strong>
          </h2>
          <div className="nav-arrows">
            <button className="button4">←</button>
            <button className="button3" >→</button>
          </div>
          <p className="counting">01 / 02</p>
        </div>
        <div className="hero-right">
          <img
            className="Project-card"
            src={heroImg}
            width={700}
            height={600}
            alt="Modern Building"
          />
          <button>VIEW PROJECT →</button>
        </div>
      </section>

      <section className="container-about">
        <div className="gallery-images">
          <img
            className="Project-card"
            src={aboutImg1}
            width={270}
            heightalt=" about building 1"
          />
          <img
            className="Project-card"
            src={aboutImg2}
            width={270}
            alt="about building 2"
          />
          <img
            className="Project-card"
            src={aboutImg3}
            width={270}
            alt="abstract"
          />
        </div>
        <div className="about-text">
          <h3 className="title-head">About</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="read-more">READ MORE →</button>
        </div>
      </section>

      <section className="mission">
        <h2 className="title-head">Main Focus/Mission Statement</h2>
        <div className="mission-items">
          <div className="item">
            <h1>1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
          <div className="item">
            <h1>2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2 className="title-head">Our Projects</h2>
        <div className="project-grid">
          <div className="main-projectTop">
            <div className="sample-project">
              <div className="project-overlay">
                <h3>Sample Project</h3>
                <button>VIEW MORE →</button>
              </div>
            </div>

            <div>
              <img src={ph2} width={470} height={255} alt="Project 2" />
            </div>
          </div>

          <div className="main-projectBottom">
            <img src={ph3} width={250} height={255} alt="Project 3" />
            <img src={ph4} width={335} height={255} alt="Project 4" />
            <img src={ph5} width={335} height={255} alt="Project 5" />
          </div>
        </div>

        <div className="view-all">
          <Link to="/projects">
            <button className="button2">ALL PROJECTS →</button>
          </Link>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-form">
          <h2 className="title-head">Contact Us</h2>
          <form className="contact-input">
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Interested In" />
            <textarea placeholder="Message" required />
            <button className="button2" type="submit">SEND EMAIL →</button>
          </form>
        </div>

        <img src={contact} width={550} height={350} alt="Contact Person" />
      </section>
    </div>
  );
}

export default Home;
