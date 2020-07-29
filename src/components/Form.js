import React from 'react'
import "../styles/form.css"
import "../styles/image.css"

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    placeholder="top text"
                    name="topText"
                    value={props.data.topText}
                    onChange={props.handleChange}
                    maxlength="25"
                />
                <input
                    type="text"
                    placeholder="bottom text"
                    name="bottomText"
                    value={props.data.bottomText}
                    onChange={props.handleChange}
                    maxlength="25"
                />
                <button>Generate</button>
            </form>
            <div className="image_container">
                <img src={props.data.randomImage} alt="" />
                <div className="topCenter">{props.data.topText}</div>
                <div className="bottomCenter">{props.data.bottomText}</div>
            </div>
        </div>
    )
}

export default Form