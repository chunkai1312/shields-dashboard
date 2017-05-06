import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
// import LoadingBar from 'react-redux-loading-bar'
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { AppTitleBar, NavMenu, NavMenuItem, UserProfile } from '../'
import config from '../../../config'
import theme from './theme.css'
// import style from './style.css'

class AppLayout extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    layout: PropTypes.object.isRequired,
    toggleNavDrawer: PropTypes.func.isRequired,
    children: PropTypes.node
  }

  static childContextTypes = {
    user: PropTypes.object
  }

  handleNavDrawerToggle = () => {
    this.props.toggleNavDrawer()
  }

  handleAppIconClick = () => {
    this.context.router.push('/')
    if (this.props.layout.navDrawer.active) {
      this.props.toggleNavDrawer()
    }
  }

  handleMenuItemClick = (menuItem) => {
    const { layout, toggleNavDrawer } = this.props
    const { router } = this.context

    if (menuItem && menuItem.path) {
      router.push(menuItem.path)
    }

    if (layout.navDrawer.active) {
      toggleNavDrawer()
    }
  }

  handleBackButtonClick = () => {
    this.context.router.goBack()
  }

  render () {
    const { layout, children } = this.props
    return (
      <Layout theme={theme}>
        <Helmet {...config.app.head} />
        {/*<LoadingBar className={style.loadingBar} />*/}
        <NavDrawer
          active={layout.navDrawer.active}
          onOverlayClick={this.handleNavDrawerToggle}
          permanentAt="md"
          theme={theme}
        >
          <AppTitleBar title={layout.appTitle} onIconClick={this.handleAppIconClick} />
          <UserProfile />
          <NavMenu>
            {layout.navMenuItems.map((menuItem, i) =>
              <NavMenuItem key={i} menuItem={menuItem} onClick={this.handleMenuItemClick} />
            )}
          </NavMenu>
        </NavDrawer>
        <AppBar
          title={layout.pageTitle}
          leftIcon={layout.backButton.active ? 'arrow_back' : 'menu'}
          onLeftIconClick={layout.backButton.active ? this.handleBackButtonClick : this.handleNavDrawerToggle}
          fixed
          scrollHide
        />
        <Panel bodyScroll={false} theme={theme}>
          {children}
        </Panel>
      </Layout>
    )
  }
}

export default AppLayout
