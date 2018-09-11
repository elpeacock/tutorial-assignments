import React, { Component } from 'react';
import './App.css';
import Validator from "./Validator/Validator";

class App extends Component {
  state = {
    inputValue: '',
    charCount: 0, 
    isValidLength: false
  };

  inputHandler = (event) => {
    let inputValue = event.target.value;
    let charCount = inputValue.length;

    this.setState({ 
      inputValue: inputValue, 
      charCount: charCount 
    });
  }

  validationHandler = () => {
    const minLength = 10;
    if (this.state.charCount >= minLength) {
      this.setState({
        isValidLength: true
      });
    } else {
      this.setState({
        isValidLength: false
      });
    }
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
        <p>Number of characters: { this.state.charCount }</p>
        { this.state.isValidLength ?
          <Validator 
            message='Length requirement met'
            validClass='valid' />
          :
          <Validator 
            message='Too Short'
            validClass='invalid' /> 
        }
      </div>
    );
  }
}

export default App;
