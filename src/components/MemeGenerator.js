import React,{Component} from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs : memes
                })
            })
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleClick() {
        console.log("clicked")
    }
    render(){
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="top text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /><br />
                    <input
                        type="text"
                        placeholder="bottom text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.handleClick}>Generate</button>
                <div>
                    <img src={this.state.randomImage} alt="" />
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator