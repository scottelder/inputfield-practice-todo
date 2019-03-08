import React from 'react';
import TaskList from './components/tasklist.js';
import Input from './components/input.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: 'react is fun',
      tasks: []
    }
  }
  handleClick(e) {

  }
  handleSubmit(e, newTask) {
    e.preventDefault();
    const oldTasks = this.state.tasks.slice();
    oldTasks.push(newTask);
    this.setState({tasks: oldTasks})
  }
  render() {
    return (
      <div>
        <TaskList tasks={this.state.tasks} handleClick={this.handleClick.bind(this)}/>
        <Input handleSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}

export default App;