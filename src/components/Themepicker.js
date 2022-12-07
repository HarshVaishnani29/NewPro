import React from 'react'
import '../components/Theme.css'

class Themepicker extends React.Component {
    constructor() {
        super()
        this.state = {
            backgroundcolor: "red",
            color: "white"
        }
    }
    bg() {
        this.setState({
            backgroundcolor: "blue",
            color: "white"
        })
    }
    bg2() {
        this.setState({
            backgroundcolor: "yellow",
            color: "black"
        })
    }
    bg3(){
        this.setState({
            backgroundcolor:"pink",
                color:"white"
        })
    }
    bg4(){
        this.setState({
            backgroundcolor:"violet",
                color:"white"
            
        })
    }
    render() {
        return (
            <div className='theme' style={{background:this.state.backgroundcolor}}>
                <h1>Theme Changer</h1>
                <p style={{color:this.state.color}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <p style={{color:this.state.color}}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <p style={{color:this.state.color}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <p style={{color:this.state.color}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button onClick={()=>{this.bg()}}>Blue</button>
                <button onClick={()=>{this.bg2()}}>Yellow</button>
                <button onClick={()=>{this.bg3()}}>Pink</button>
                <button onClick={()=>{this.bg4()}}>Violet</button>
            </div>
        )
    }
}

export default Themepicker;