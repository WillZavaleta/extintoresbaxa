import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/roboto"
import "@fontsource/outfit"
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>    
  //</React.StrictMode>,
)
