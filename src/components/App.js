import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import "../styles/app.css"

const App = () => {
    return (
        <div className="main_container">
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App