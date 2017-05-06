import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom/server'
import serialize from 'serialize-javascript'
import Helmet from 'react-helmet'

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
class Html extends Component {
  render () {
    const { assets, component, store } = this.props
    const content = component ? ReactDOM.renderToStaticMarkup(component) : ''
    const head = Helmet.rewind()

    return (
      <html>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
          <link href={assets.styles.vendor} media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8" />
          <link href={assets.styles.main} media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8" />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__=${serialize(store.getState())};` }} charSet="UTF-8" />
          <script src={assets.javascript.vendor} charSet="UTF-8" />
          <script src={assets.javascript.main} charSet="UTF-8" />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
}

export default Html
