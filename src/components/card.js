import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({taskObj,index,delTask,updateListArray})=>{
    const [modal,setModal] = useState(false);
    const toggle = ()=>{
        setModal(!modal)
    }
    const updateTask = (taskObj)=>{
        updateListArray(taskObj, index)
    }
    const handleDelete = ()=>{
        delTask(index)
    }
    return(
        <div>
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{'backgroundColor':'blue'}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{'backgroundColor':'#99ccff',"border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>
                <h6>Last Date</h6>
                <p className = "mt-3">{taskObj.lastDate}</p>
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"cursor":"pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"cursor":"pointer"}} onClick = {handleDelete}></i>
                </div> 
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
        
        </div>
    )
}


export default Card
