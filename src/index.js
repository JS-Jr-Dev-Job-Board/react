import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

import { Auth0Provider } from '@auth0/auth0-react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
        <Auth0Provider
          domain='YOUR_DOMAIN'
          clientId='YOUR_CLIENT_ID'
          redirectUri={window.location.origin}
        >
          <Router>
            <App />
          </Router>
        </Auth0Provider>
      </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
