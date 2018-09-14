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
    let inputArray = [];

    charArray.forEach((character, index) => { 
      const id = 'char_' + index;
      const charObj = { char: character, id: id };
      inputArray.push(charObj);
    });

    this.setState({
      inputValue: inputValue,
      charCount: charCount,
      isValidlength: isValid, 
      inputChars: inputArray
    });
  }

  deleteCharacterHandler = (event, id) => {
    const charIndex = this.state.inputChars.findIndex(c => {
      return c.id === id;
    });

    const chars = [...this.state.inputChars];
    chars.splice(charIndex, 1);

    let charOnly = [];
    chars.forEach((character) => {
      charOnly.push(character.char);
    });
    
    let modValue = charOnly.join('');
    let isValid = modValue.length >= 10 ? true : false;

    this.setState({ 
      inputChars: chars, 
      inputValue: modValue, 
      charCount: modValue.length,
      isValidlength: isValid })
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

    let validator = null;
    if ( !this.state.isValidlength )(
      validator = (
        <Validator
          charCount={this.state.charCount}
          message={'input too short'}
          validClass={'invalid'} />
      )
    );

    if( this.state.isValidlength ){
      validator = (
        <Validator
          charCount={this.state.charCount}
          message={'valid input length'}
          validClass={'valid'} />
      )
    };

    let charBoxes = [];

    this.state.inputChars.forEach((character) => {
      const charBox = (
        <CharComp
          char={ character.char }
          id={ character.id } 
          key={ character.id }
          click={ (event) => this.deleteCharacterHandler(event, character.id) }/>
      )
      charBoxes.push(charBox);
    });
    
    let characters = (
      <div>
        { charBoxes }
      </div>
    );
    
    return (
      <div className="App" style={ style }>
        <input
          type='text'
          style={ inputStyle }
          value={ this.state.inputValue }
          onChange={ this.inputHandler }
          placeholder='enter some text'>
        </input>
        { validator }
        { characters }
      </div>
    );
  }
}

export default App;
