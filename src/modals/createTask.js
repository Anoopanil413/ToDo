import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTask = ({modal,toggle,save})=>{
  const [taskName, setName] = useState('')
  const [description, setDes] = useState('')
  const [lastDate, setDat] = useState('')
  let changeMade = (e)=>{
    const {name,value,lastDate} = e.target
    if(name == 'taskName'){
      setName(value)
    }else if(name == 'description'){
      setDes(value)
    }else if(name =='date'){
      setDat(value)
    }
  }
  const saverfun = ()=>{
    let taskObj = {}
    taskObj['Name'] = taskName;
    taskObj['Description'] = description;
    taskObj['lastDate'] = lastDate;
    save(taskObj)
  }


    return(
        <div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
            <div className="form-group mt-3">
              <label>Dead line</label>
              <input type='date' name="date"  id="exampleDate"  placeholder="date placeholder" value={lastDate} onChange={changeMade}/>
              
     
     
      

            </div>

          </form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saverfun}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}> 
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

        </div>
    )
}

export default CreateTask