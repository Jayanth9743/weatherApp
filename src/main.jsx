import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherProvider } from './components/WeatherApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <WeatherProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </WeatherProvider>
)
