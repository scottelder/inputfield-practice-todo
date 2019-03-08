import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputState: ''
    }
  }
  inputNewTask(e) {
    this.setState({inputState: e.target.value})
  }
  render() {
    return (
      <form>
        <input 
          type='text' 
          placeholder='Enter new task here!' 
          onChange={(e) => this.inputNewTask(e)} 
        >
        </input>
        <button type='submit' onClick={(e) => this.props.handleSubmit(e, this.state.inputState)}>SUBMIT!</button>
      </form>
    )
  }
}

export default Input;