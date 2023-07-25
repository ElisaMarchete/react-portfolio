import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// [
//   {
//     name: "about me",
//   },
//   { name: "portfolio" },
//   { name: "contact" },
//   {
//     name: "resume",
//   },
// ]

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
      <ul className="flex-row">
        {pages.map((item) => (
          <li
            className={`mx-5 ${currentPage.name === item.name && "navActive"}`}
            key={item.name}
          >
            <span onClick={() => setCurrentPage(item)}>
              {capitalizeFirstLetter(item.name)}
            </span>
          </li>
        ))}
        {/* return the same thing for each item from page */}
      </ul>
    </nav>
  );
}

export default Nav;
