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
      <img src={require('../../../assets/Logo.png')} alt="HOME" onClick={handleHomeClick}/>

  
      <div className={classes.Links}>
        <p className={classes.Link} onClick={handleInformataclick}>
          Informata
        </p>
        <p className={classes.Link} onClick={handleKeshillaClick}>
          Keshilla
        </p>
      </div>
    </div>
  );
};

export default NavLinks;
