import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputValue: '',
 }

  switchValueHandler = (event) => {
    this.setState ( { inputValue : event.target.value } );
  }

  deleteCharHandler = (index) => {
    const text = this.state.inputValue.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputValue: updatedText});
  }
  
  render() {
    const charList = this.state.inputValue.split('').map((ch, index) => {
    return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)}/>;
  });

    return (
      <div className="App">
        <input 
        onChange={this.switchValueHandler}
        value={this.state.inputValue}/>
        <ValidationComponent
        inputValue={this.state.inputValue}
        />
        {charList}
      </div>
    );
  }
}

export default App;