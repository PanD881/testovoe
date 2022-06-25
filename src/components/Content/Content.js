// Может я не знаю чего-то или мне не хватает креативности, 
// но я непонимаю как можно сделать с НУЛЯ редактор текста не используя посторонние пакеты, по типу CKEditor, Quill, Draft.js, Editor.js, Slate.js.
// А также менять свойства ВЫДЕЛЕНОГО текста

import React from 'react';
import './Content.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        
        this.state ={
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis. Neque egestas congue quisque egestas diam.',
            fontSize: 14,
            color: "black",
            backgroundColor: "white"
        }

        this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    

    handleTextChange(e) {
        this.setState({text: e.target.value})
    }

    handleFontSizeChange(e) {
        this.setState({fontSize: e.target.value})
    }

    handleColorChange(e) {
        this.setState({color: e.target.value})
    }

    handleBackgroundColorChange(e) {
        this.setState({backgroundColor: e.target.value})
    }

    componentDidUpdate() {
        let textStr = JSON.stringify(this.state)
        let obj = JSON.parse(textStr)                          // Для удобности чтения
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
                        Font size: &nbsp;
                        <input onChange={this.handleFontSizeChange} type="number" placeholder="14px" />&nbsp;|&nbsp;
                        Text color: &nbsp;
                        <input onChange={this.handleColorChange} type="color" />&nbsp;|&nbsp;
                        Background color: &nbsp;
                        <input onChange={this.handleBackgroundColorChange} type="color" />
                    </div>
                </div>
                <textarea style={divStyle} className="editor" onChange={this.handleTextChange} value={this.state.text} ></textarea>
            </div>
        )
    }

}


