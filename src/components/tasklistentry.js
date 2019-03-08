import React from 'react';

class TaskListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

changeStyle() {
  this.setState({styling: strikethroughStyle})
}

  render() {
    return (
      <li onClick={() => changeStyle()}>{this.props.task}</li>
    )
  }
}
export default TaskListEntry;