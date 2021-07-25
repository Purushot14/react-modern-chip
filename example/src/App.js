import React from 'react'

import { ModernChip } from 'react-modern-chip'
import 'react-modern-chip/dist/index.css'
// import styles from "./index.css"
import "./index.css"

const App = () => {
  return <div className={"cantainer"}>
      <ModernChip 
        text="Create React Library Example 😄"
        favicon="https://github.githubassets.com/favicons/favicon.svg"
      />
    </div>
}

export default App
