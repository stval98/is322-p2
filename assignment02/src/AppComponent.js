// import dependencies
import React from 'react';
import axios from 'axios'; //GET HELP DOWNLOADING
import TaskList from './TaskList';
import AddTask from './AddTask';

class AppComponent extends React.Component{
	
	/**
	 * @param props // called when class is created
	*/
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			errorMsg: ''
		}
	}
	
	componentDidMount(){
		this.getData();
	}
	
	getData(){
		axios.get('https://my-json-server.typicode.com/stval98/is322-p2')
		.then(response => {this.setState({ tasks: response.data });})
		.catch(error => {this.setState({ errorMsg: response.message });});
	}
	
	onAddTask = (taskName) => {
		let tasks = this.state.tasks;
		tasks.push({
			title: taskName,
			id: this.state.tasks.length + 1,
			type: 'task',
			column: 'todo'
		});
		this.setState({ tasks });
	}
	
	onUpdateTaskList = (newTaskList) => {
		this.setState({tasks: newTaskList});
	}
	
	// render content
	render(){
		return (
			<div className='container'>
				<AddTask onSubmit={this.onAddTask} />
				<TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
			</div>
		);
	}
}

// export component
export default AppComponent;