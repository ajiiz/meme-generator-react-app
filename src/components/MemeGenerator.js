import React,{Component} from 'react'
import Form from './Form'

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
        this.handleSubmit = this.handleSubmit.bind(this)
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
    handleSubmit(event) {
        event.preventDefault()
        const length = this.state.allMemeImgs.length
        const randomNumber = Math.floor(Math.random() * length)
        const randomImageUrl = this.state.allMemeImgs[randomNumber].url
        console.log(randomNumber)
        this.setState({
            randomImage: randomImageUrl
        })
    }
    render(){
        return (
            <Form
                data={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default MemeGenerator