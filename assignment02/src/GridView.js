import React from 'react';
import '../css/gridView.css';

//task columns import
import TaskItem from './TaskItem';
import ItemList from '.ItemList'; 
import ItemList1 from '.ItemList1'; 

class GridView extends React.Component {

    constructor(props) { 
        super(props); 
        this.state = {
            FilteredTasks:props.tasks
        };
    }
    
    markToDo = (task) => {
        let taskList = this.props.tasks;
        task.column="todo";
        this.props.onUpdateTaskList(taskList);
    };

    markInProgress = (task) => {
        let taskList = this.props.tasks;
        task.column="in-progress";
        this.props.onUpdateTaskList(taskList);
    };

    markDone = (task) => {
        let taskList = this.props.tasks;
        task.column="done";
        this.props.onUpdateTaskList(taskList);
    };
render() {
        const taskItems = this.props.tasks.map(task => {
            return <TaskItem task={task} key={task.id} markDone={this.markDone} />
        });
        const ItemList = this.props.tasks.map(task => {
            if(task.column=="in-progress")
                return <ItemList task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markInProgress={this.markInProgress}/>
        });

        });
        const ItemList1 = this.props.tasks.map(task => {
            if(task.column=="todo")
                return <ItemList task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markInProgress={this.markInProgress}/>
        });

    return (
            <div className="row">
                <div className="column" style="background-color:gray">
                                <div className="card-title">
                                <h2>To Do</h2>
                            </div>
                            {ItemList}
                        </div>

                <div className="column" style="background-color:gray">
                                <div className="card-title">
                                <h2>To Do</h2>
                            </div>
                            {ItemList1}
                        </div>
                   

               <div className="column" style="background-color:gray">
                                <div className="card-title">
                                <h2>Done/h2>
                            </div>
                            {ItemList1}  
                        </div>
                  

               
        )
    }
}

export default GridView;
   
