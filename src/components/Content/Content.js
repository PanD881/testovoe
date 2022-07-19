

import React from 'react';
import './Content.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        
        this.state ={
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis. Neque egestas congue quisque egestas diam.',
            fontSize: 14,
            color: "black",
            backgroundColor: "white",
            edibleFontSize: "",
            edibleColor: "",
            edibleBackgroundColor: ""
        }

        this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this)

        this.handleEdibleFontSizeChange = this.handleEdibleFontSizeChange.bind(this)
        this.handleEdibleColorChange = this.handleEdibleColorChange.bind(this)
        this.handleEdibleBackgroundColorChange = this.handleEdibleBackgroundColorChange.bind(this)

        this.handleTextChange = this.handleTextChange.bind(this)
        this.changeSelected = this.changeSelected.bind(this)
    }

    

    handleTextChange(e) {
        this.setState({text: e.target.value})
    }

    handleFontSizeChange(e) {
        this.setState({fontSize: e.target.value})
    }
    handleEdibleFontSizeChange(e) {
        this.setState({edibleFontSize: e.target.value})
    }

    handleColorChange(e) {
        this.setState({color: e.target.value})
    }
    handleEdibleColorChange(e) {
        this.setState({edibleColor: e.target.value})
    }

    handleBackgroundColorChange(e) {
        this.setState({backgroundColor: e.target.value})
    }
    handleEdibleBackgroundColorChange(e) {
        this.setState({edibleBackgroundColor: e.target.value})
    }


    changeSelected() {
        if (window.getSelection() == '') {             // == is NOT a mistake, don't fix it 
            return false;
        }
        let range = window.getSelection().getRangeAt(0)
        let selectionContents = range.extractContents()
        let span = document.createElement("span")

        span.appendChild(selectionContents)
        span.setAttribute("className", "selected")
        span.style.fontSize = this.state.edibleFontSize + 'px'
        span.style.color = this.state.edibleColor
        span.style.backgroundColor = this.state.edibleBackgroundColor
        range.insertNode(span)
    }


    componentDidUpdate() {
        let textStr = JSON.stringify(this.state)
        let obj = JSON.parse(textStr)                          // for more readable text, also attribute merging is not done
        console.log(obj)
    }

    render() {
        let divStyle = {
            fontSize: this.state.fontSize + 'px',
            color: this.state.color,
            backgroundColor: this.state.backgroundColor
        }
        return(
            <div>
                <div className="header">
                    <div className="inner-container">
                        <div>
                            Font size: &nbsp;
                            <input onChange={this.handleFontSizeChange} type="number" placeholder="14px" />&nbsp;|&nbsp;
                            Text color: &nbsp;
                            <input onChange={this.handleColorChange} type="color" />&nbsp;|&nbsp;
                            Background color: &nbsp;
                            <input onChange={this.handleBackgroundColorChange} type="color" />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|/\/\/\/\/\|&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            Selected Font size: &nbsp;                 
                            <input onChange={this.handleEdibleFontSizeChange} type="number" placeholder="14px" />&nbsp;|&nbsp;
                            Selected Text color: &nbsp;
                            <input onChange={this.handleEdibleColorChange} type="color" />&nbsp;|&nbsp;
                            Selected Background color: &nbsp;
                            <input onChange={this.handleEdibleBackgroundColorChange} type="color" />
                        </div>
                    </div>
                </div>
                <div style={divStyle} onMouseDown={this.changeSelected} className="editor" contenteditable="true">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Nulla facilisi morbi tempus iaculis. Neque egestas congue quisque egestas diam.
                </div>
            </div>
        )
    }

}


