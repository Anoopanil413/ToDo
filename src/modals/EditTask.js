import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTask = ({modal,toggle,updateTask,taskObj})=>{
  const [taskName, setName] = useState('')
  const [description, setDes] = useState('')
  const [lastDate, setDat] = useState('')

  let changeMade = (e)=>{
    const {name,value} = e.target
    if(name == 'taskName'){
      setName(value)
    }else if(name == 'description'){
      setDes(value)
    }else if(name =='date'){
      setDat(value)
    }
  }
  const updatefun = (e)=>{
    let tempObj = {}
    tempObj['Name'] = taskName;
    tempObj['Description'] = description;
    tempObj['lastDate'] = lastDate
    updateTask(taskObj)
  }
  useEffect(()=>{
    setName(taskObj.Name)
    setDes(taskObj.Description)
  },[])


    return(
        <div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>UpdateTask Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type='text' className="form-control" name="taskName" value={taskName} onChange={changeMade}/>

            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <textarea rows= '5' className="form-control" name="description" value={description} onChange={changeMade}/>

            </div>

          </form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updatefun}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}> 
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

        </div>
    )
}

export default EditTask