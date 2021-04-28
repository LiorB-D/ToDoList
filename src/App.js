import React, {useState} from 'react';
import logo from './logo.svg';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([{name: "clean room", desc: "Use the vacume", dueDate: "05-06-07", complete: false}]);
  const [currTask, setCurrTask] = useState({name: "", desc: "", dueDate: ""});
  
  const addATask = (event) => {
    
    console.log("Pressed")
    //console.log(this.titleInp)
    setTasks([...tasks, {name: currTask.name, desc: currTask.desc, dueDate: currTask.dueDate, complete: false}])
    setCurrTask({name: "", desc: "", dueDate: ""})
  }
  const deleteATask = (task) => {
    console.log("Deleting")
    let newT = tasks.filter(t => t !== task)
    setTasks(newT)

  }
  const flipComp = (task) => {
    let newT = tasks.filter(t => true)
    let ind = newT.indexOf(task)
    newT[ind].complete = !newT[ind].complete
    setTasks(newT)
    
  }
  const updateField = e => {
    setCurrTask({
      ...currTask,
      [e.target.name]: e.target.value
    });
    
  };


 


  const ToDoHeader = () => {
    return <div class = "Header">
      <h3>Add a Task</h3>
      
      <div class = "row"><label><TextField label = "Task Name" id = "nameInp" type="text" name="name" value = {currTask.name} onChange = {updateField}/></label></div>
      <div class = "row"><label><TextField label = "Description" type="text" name="desc" value = {currTask.desc} onChange = {updateField}/></label></div>
      <div class = "row"><label><TextField label = "Due Date" type="text" name="dueDate" value = {currTask.dueDate} onChange = {updateField}/></label></div>
      <div class = "row"><label></label></div>
      <Fab variant="extended" onClick = {() => addATask()}>Add Task</Fab>

      
    </div>
  }
  const TaskBox = (task) => {
    
    return <div class = "TaskBox"> 
      <h4>{task.task.name}</h4>
      <h5>{task.task.desc}</h5>
      <h5>Due on: {task.task.dueDate}</h5>
      <Checkbox checked = {task.task.complete} onChange={() => flipComp(task.task)} color="primary"/> Complete
      <button onClick={() => deleteATask(task.task)}>Delete</button>

    </div>  
  }


  return (
    <div class = "App">
        <ToDoHeader/>
        <h1>Tasks</h1>
        <Grid container justify="center" spacing={3}>
        {tasks.map(task => (
          <Grid item>
          <TaskBox task = {task}/>
          </Grid>
        ))}
        </Grid>
    </div>
  );
}


export default App;
