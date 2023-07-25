import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Elisa Marchete</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children} {/* NAV COMPONENT */}
    </header>
  );
}

export default Header;
