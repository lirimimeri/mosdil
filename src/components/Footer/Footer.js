import React from "react";
import classes from "./Footer.module.css";

import Contact from './Contact/Contact'

const Footer = () => (
  <div className={classes.Footer}>
    <Contact />
    <p>© 2020 Copyrights Reserved</p>
  </div>
);

export default Footer;
