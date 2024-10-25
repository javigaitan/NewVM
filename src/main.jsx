import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'

import navbar_es from "./translations/es/navbar.json"
import navbar_en from "./translations/en/navbar.json"


i18next.init({
interpolation: {escapaValue: false},
lng: "es",
resources: {
  es:{
    navbar: navbar_es,
  },
  en:{
    navbar: navbar_en,
  }
}
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
)
