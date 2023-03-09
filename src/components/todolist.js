import React,{useState, useEffect  } from "react";
import CreateTask from "../modals/createTask";
import Card from "./card";


const Todolist = ()=>{
    const [modal, setModal] = useState(false);
    const [taskList,setTaskList] = useState([])
     useEffect(()=>{
        let resultArr = localStorage.getItem("taskList")
        if(resultArr){
            let obj = JSON.parse(resultArr);
            setTaskList(obj)
        }
    },[])
    const toggle = () => setModal(!modal);
    const save = (taskObj)=>{
        let tempTask = taskList;
        tempTask.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(tempTask))
        setModal(false)
        setTaskList(tempTask)
    }
    const delTask = (index)=>{
        let tempTask = taskList;
        tempTask.splice(index,1)
        localStorage.setItem('taskList', JSON.stringify(tempTask))
        setTaskList(tempTask)
        window.location.reload();
    }
    const updateListArray = (obj,index)=>{
        let tempTask = taskList;
        taskList[index] = obj;
        localStorage.setItem('taskList',JSON.stringify(tempTask))
        setTaskList(tempTask)
        window.location.reload();
    }

    return(
        <>
        <div className="header text-center">
        <h2 >Todo list</h2>
        <button className='btn btn-primary mt-4' onClick={()=>{setModal(true)}}>Add Task</button>
        </div>
        <div className="task-container">
        {taskList.map((obj,index)=><Card taskObj = {obj} index = {index} delTask = {delTask} updateListArray={updateListArray}/>)}
        </div>
        <CreateTask toggle = {toggle} modal = {modal} save = {save} />
        </>
    )
}

export default Todolist;