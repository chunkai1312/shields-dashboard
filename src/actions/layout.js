import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'

export const setPageTitle = createAction(types.SET_PAGE_TITLE, pageTitle => pageTitle)
export const toggleNavDrawer = createAction(types.TOGGLE_NAV_DRAWER)
export const toggleBackButton = createAction(types.TOGGLE_BACK_BUTTON)
