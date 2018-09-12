import React, { Component } from 'react';
import './App.css';
import Validator from "./Validator/Validator";
import CharComp from "./CharComp/CharComp";

class App extends Component {
  state = {
    inputValue: '',
    charCount: 0, 
    isValidlength: false,
    inputChars: []
  };

  inputHandler = (event) => {
    let inputValue = event.target.value;
    let charCount = inputValue.length;
    let isValid = charCount >= 10 ? true: false;
    let charArray = [...inputValue];

    this.setState({
      inputValue: inputValue,
      charCount: charCount,
      isValidlength: isValid, 
      inputChars: charArray
    });
  }



  render() {
    const style = {
      textAlign: 'center'
    }
    
    const inputStyle = {
      lineHeight: '.5em',
      height: '2.5em',
      width: '35%',
      padding: '8px',
      margin: '30px 200px',
      border: '2px solid black',
      borderRadius: '3px',
      textAlign: 'center',
      fontSize: '1em',
      cursor: 'pointer'
    };

    let validator = (
      <Validator
        charCount={this.state.charCount}
        message={'input too short'}
        validClass={'invalid'} />
    );

    if( this.state.isValidlength ){
      validator = (
        <Validator
          charCount={this.state.charCount}
          message={'valid input length'}
          validClass={'valid'} />
      )
    }

    let characters = null;
    
    for (let index = 0; index < this.state.inputChars.length; index++) {
      const char = this.state.inputChars[index];
        <CharComp 
          key={index}
          char={char} />

    }
    return (
      <div className="App" style={ style }>
        <input
          type='text'
          style={ inputStyle }
          value={ this.state.inputValue }
          onChange={ this.inputHandler }
          placeholder='enter some text'>
        </input>
        {/* <p>You entered: { this.state.inputValue }</p> */}
        { validator }
        {  }
        {/* <CharComp 
          char={ this.state.inputChars[0] } />
        <CharComp
          char={this.state.inputChars[1]} />
        <CharComp
          char={this.state.inputChars[2]} />
        <CharComp
          char={this.state.inputChars[3]} />
        <CharComp
          char={this.state.inputChars[4]} /> */}
      </div>
    );
  }
}

export default App;
