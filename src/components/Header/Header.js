import React from 'react'

import NavLinks from './NavLinks/NavLinks'
import classes from './Header.module.css'

const Header = ( props ) => (
  <div className={classes.Header}>
    <NavLinks />
  </div>
)

export default Header