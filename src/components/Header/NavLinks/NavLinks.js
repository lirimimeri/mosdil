import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  let history = useHistory();

  const handleHomeClick = () => {
    history.push("/home");
  };

  const handleKeshillaClick = () => {
    history.push("/keshilla");
  };

  const handleInformataclick = () => {
    history.push("/informata");
  };

  return (
    <div className={classes.NavLink}>
      <div>
        <p className={classes.Link} onClick={handleHomeClick}>
          Home
        </p>
      </div>

      <div>
        <p className={classes.Link} onClick={handleKeshillaClick}>
          Keshilla
        </p>
      </div>

      <div>
        <p className={classes.Link} onClick={handleInformataclick}>
          Informata
        </p>
      </div>
    </div>
  );
};

export default NavLinks;
