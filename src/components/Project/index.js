import React, { useEffect, useState } from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, repo, link, description } = project;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import(`../../assets/projects/${name}.jpg`)
      .then((imageModule) => setImageUrl(imageModule.default))
      .catch((error) => console.error("Error loading the image:", error));
  }, [name]);

  return (
    <div className="project" key={name}>
      <img
        src={imageUrl}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{" "}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
