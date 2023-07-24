import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Eventopia",
      description:
        "The application is deployed on Heroku and uses Node.js, Express, Sequelize, mySQL, bcryptjs and dotenv.",
      link: "https://eventopia-ea333846024a.herokuapp.com/",
      repo: "https://github.com/ElisaMarchete/Eventopia.git",
    },
    {
      name: "Memory Game",
      description:
        "The game uses HTML, CSS, JavaScript, Google fonts, Bulma CSS framework, and two server-side APIs: Pixabay and Official Joke.",
      link: "https://angadbatth.github.io/memory-game/",
      repo: "https://github.com/ElisaMarchete/memory-game.git",
    },
    {
      name: "Tech Blog",
      description:
        "The blog has been developed using the following technologies: Handlebars, CSS, JavaScript, Bootstrap, Node.js, Express.js, MySQL, and Sequelize",
      link: "https://lit-gorge-39686-8c8602a21f73.herokuapp.com/",
      repo: "https://github.com/ElisaMarchete/tech-blog.git",
    },
    {
      name: "Weather Dashboard",
      description:
        "The aplication uses HTML, CSS, JavaScript, OpenWeatherMap API, and Bootstrap.",
      link: "https://elisamarchete.github.io/weather-dashboard/",
      repo: "https://github.com/ElisaMarchete/weather-dashboard.git",
    },
    {
      name: "Note Taker",
      description:
        "This application uses HTML, CSS, JavaScript, and Express.js.",
      link: "https://secret-fjord-28920.herokuapp.com/",
      repo: "hhttps://github.com/ElisaMarchete/note-taker.git",
    },
    {
      name: "Coding Quiz",
      description: "The coding Quiz uses HTML, CSS, and JavaScript.",
      link: "https://elisamarchete.github.io/code-quiz/",
      repo: "https://github.com/ElisaMarchete/code-quiz.git",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
