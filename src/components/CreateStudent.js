import React,{useContext, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {url} from '../App'
import {StudentContext} from '../App'

function CreateStudent(props) {
  let context=useContext(StudentContext);
  let[name,setName]=useState("");
  let[email,setEmail]=useState("");
  let[mobile,setMobile]=useState("");
  let[batch,setbatch]=useState("");
  let[teacher,setTeacher]=useState("");

  let navigate=useNavigate();

  let handleSubmit=async ()=>{
    let data={
    name,
    email,
    mobile,
    batch,
    teacher
  }
    

  // let res=await axios.post(url,data)
  // if (res.status === 201)
  //   navigate('/student-list')
  
  let students=[...context.students]
  students.push(data)
  context.setStudents(students)
  console.log(context.students)
  navigate ('/student-list')

}
let handleSetTeacher = (e) => {
  setTeacher(e);
};
  return <>
<div className='container'>
      <div className='row '>
        <div className='col-lg-8'>
    <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={(e=>setName(e.target.value))}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Enter Email" onChange={(e=>setEmail(e.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile Number"onChange={(e=>setMobile(e.target.value))} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" placeholder="Batch" onChange={(e=>setbatch(e.target.value))}/>
  </Form.Group>

  <Form.Group className="mb-3">
  <Form.Label>Select Mentor</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Teacher
              </Dropdown.Toggle>

              <Dropdown.Menu>
                   {
                    context.teacher.map((e)=>{
                return <Dropdown.Item href="#/action-1" onClick={()=>handleSetTeacher(e.teacher)}>{e.teacher}</Dropdown.Item>

                    })
                   }
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>


 
  <Button variant="primary" onClick={() =>handleSubmit()}>
    Submit
  </Button>
  </Form>
  </div>
 </div>
</div>
    
    </>
}
export default CreateStudent
