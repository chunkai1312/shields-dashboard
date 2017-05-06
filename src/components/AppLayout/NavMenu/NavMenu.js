import React, { PropTypes } from 'react'
import { List } from 'react-toolbox/lib/list'
import style from './style.css'

const NavMenu = (props) => (
  <nav className={style.navMenu}>
    <List {...props}>
      {props.children}
    </List>
  </nav>
)

NavMenu.propTypes = {
  children: PropTypes.node
}

export default NavMenu
