import React from 'react'

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
                /><br />
                <input
                    type="text"
                    placeholder="bottom text"
                    name="bottomText"
                    value={props.data.bottomText}
                    onChange={props.handleChange}
                />
                <button>Generate</button>
            </form>
            <div>
                <img src={props.data.randomImage} alt="" />
                <h2>{props.data.topText}</h2>
                <h2>{props.data.bottomText}</h2>
            </div>
        </div>
    )
}

export default Form