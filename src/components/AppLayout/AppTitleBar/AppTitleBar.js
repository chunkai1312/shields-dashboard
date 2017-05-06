import React, { PropTypes } from 'react'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { Avatar } from 'react-toolbox/lib/avatar'
import theme from './theme.css'
import style from './style.css'

const AppTitleBar = ({ title, icon, onIconClick }) => (
  <AppBar
    fixed
    title={title}
    leftIcon={<Avatar image={icon} className={style.icon} />}
    onLeftIconClick={onIconClick}
    theme={theme}
  />
)

AppTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onIconClick: PropTypes.func
}

AppTitleBar.defaultProps = {
  title: 'App Name',
  icon: require('./logo.svg')
}

export default AppTitleBar
