import { handleActions } from 'redux-actions'
import * as types from '../constants/ActionTypes'

export const initialState = {
  appTitle: 'Shields',
  pageTitle: 'Home',
  navMenuItems: [
    { title: 'Home', icon: 'home', path: '/' },
    { title: 'About', icon: 'info', path: '/about' }
  ],
  navDrawer: { active: false },
  backButton: { active: false }
}

const layout = handleActions({
  [types.SET_PAGE_TITLE]: (state, action) => ({ ...state, pageTitle: action.payload }),
  [types.TOGGLE_NAV_DRAWER]: (state, action) => ({ ...state, navDrawer: { active: !state.navDrawer.active } }),
  [types.TOGGLE_BACK_BUTTON]: (state, action) => ({ ...state, backButton: { active: !state.backButton.active } })
}, initialState)

export default layout
