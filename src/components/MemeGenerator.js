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
                <p>Top Text: {this.state.topText}</p>
                <p>Bottom Text: {this.state.bottomText}</p>
            </div>
        )
    }
}

export default MemeGenerator