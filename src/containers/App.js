import { connect } from 'react-redux'
import { AppLayout } from '../components'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  layout: state.layout
})

const mapDispatchToProps = (dispatch) => ({
  toggleNavDrawer: () => dispatch(actions.toggleNavDrawer())
})

const App = connect(mapStateToProps, mapDispatchToProps)(AppLayout)

export default App
