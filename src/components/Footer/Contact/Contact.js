import React from "react";

import classes from "./Contact.module.css";

const Contact = (props) => (
  <div className={classes.Contact}>
    <div className={classes.Logo}>
      <i className="fas fa-envelope" />
      <a href="https://github.com/lirimimeri">
        <i className="fab fa-github" />
      </a>
      <a href="https://www.facebook.com/lirimimeri1">
        <i className="fab fa-facebook" />
      </a>
    </div>
  </div>
);

export default Contact;
