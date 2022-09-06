import React,{useState,useEffect,useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate,useParams, } from 'react-router-dom';
import {url} from '../App'
import axios from 'axios'
import {StudentContext} from '../App'

function EditStudent(props) {
  let params=useParams();
  let context=useContext(StudentContext);
  let[name,setName]=useState(context.students[params.id].name);
  let[email,setEmail]=useState(context.students[params.id].email);
  let[mobile,setMobile]=useState(context.students[params.id].mobile);
  let[batch,setbatch]=useState(context.students[params.id].batch);
  

  // useEffect(() => {
  //   getData()
  // }, [])

  // let getData=async () =>{
  //   let res=await axios.get(`${url}/${params.id}`)
  //   setName(res.data.name)
  //   setEmail(res.data.email)
  //   setMobile(res.data.mobile)
  //   setbatch(res.data.batch)
    
  // }

  let navigate=useNavigate();

  let handleSubmit= async () =>{
    let data={
      name,
      email,
      mobile,
      batch
    }

    // let res=await axios.put(`${url}/${params.id}`,data)
    // if (res.status===200)
    // navigate('/student-list')

    let students=[...context.students]
    students.splice(params.id,1,data)
    context.setStudents(students)
    navigate('/student-list')
  }

  

  return <>
    <div className="container">
    <div className="row">
    <div className="col-lg-8">
    <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e=>setName(e.target.value))}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email"  value={email} placeholder="Enter Email" onChange={(e=>setEmail(e.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" value={mobile} placeholder="Enter Mobile Number"onChange={(e=>setMobile(e.target.value))} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text"value={batch} placeholder="Batch" onChange={(e=>setbatch(e.target.value))}/>
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

export default EditStudent
