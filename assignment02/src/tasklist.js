import React from 'react';
import TaskItem.js from './TaskItem.js';
class TaskList extends React.Component {
markDone = (task) => {
let taskList = this.props.tasks;
taskList.(taskIndex);
onUpdateTaskList(taskList);
}
render() {
return <TaskItem task={task} key={task.id} markDone={this.markDone} />
return (
<className="taskList">
{TaskItem}
</ul>
)
