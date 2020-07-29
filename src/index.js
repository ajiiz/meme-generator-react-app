import React from 'react'
import ReactDOM from 'react-dom'

const MainRender = () => {
    return (
        <div>
            <p>App</p>
        </div>
    )
}

const r = document.getElementById("root")
ReactDOM.render(<MainRender />, r)