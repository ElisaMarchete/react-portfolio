import React from "react";
import aboutImage from "../../assets/about/about.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img
            src={aboutImage}
            alt="Profile"
            style={{ width: "130px", height: "140px", borderRadius: "50%" }}
          />
        </div>
        <div className="justified-text">
          <p>
            I am a business administration graduate with experience in finance
            and accounting, where I gained valuable insights into financial
            reporting, budgeting, and data analysis. These experiences have
            strengthened my analytical abilities. To expand my skill set and
            pursue my passion for technology, I decided to undertake a
            comprehensive bootcamp at the University of Toronto. The program
            provided me with training in various aspects of software
            development, including front-end and back-end technologies, web
            development frameworks, and testing methodologies. Currently, I am
            completing the bootcamp at the University of Toronto to transition
            into a career as a future QA tester or full-stack developer. With my
            background in financial analysis and strategic planning, combined
            with the skills acquired through the bootcamp, I am well-equipped to
            contribute to high-quality software solutions. I am enthusiastic
            about ensuring optimal performance and success for your
            organization. I would be delighted to discuss potential
            opportunities further.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
