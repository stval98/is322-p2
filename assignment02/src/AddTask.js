// import dependencies
import React from 'react';

class AddTask extends React.Component{
	
	state = { newTask: '' }
	
	// add new task when user submits input
	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.newTask);
		this.setState({ newTask: '' })
	}
	
	// render content
	render() {
		return (
		  <form className="task-input form-group" onSubmit={this.onFormSubmit}>
			<label htmlFor="newTask">Enter New Task</label>
			<input type="text" className="form-control"
				   name="newTask"
				   value={this.state.newTask}
				   onChange={(e) => this.setState({ newTask: e.target.value })} />
		  </form>
		);
	}
}

// export component
export default AddTask;