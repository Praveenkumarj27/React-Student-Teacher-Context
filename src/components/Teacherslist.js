import React,{useContext, useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import {url} from '../App'
import axios from 'axios'
import {StudentContext} from '../App'

function TeacherList(props) {
    let navigate=useNavigate();
    let [data,setData]=useState([]);
    let context=useContext(StudentContext)
    
  //   useEffect(()=>{
  //     getData()
  // },[])

  // let getData = async ()=>{
  //    let res = await axios.get(url)
  //    setData(res.data)
  // }

  // let handleDelete = async(i)=>{
  //     try
  //     {
  //         await axios.delete(`${url}/${i}`)
  //     }
  //     catch(error)
  //     {
  //         console.log(error)
  //     }
  //     getData()
  // }
    
    let handleDelete=(i)=>{
        let teacher = [context.data.teacher];
        teacher.splice(i,1);
        context.setTeacher(teacher)
    }
  return (
    <div className='container'>
        <h3 className='d-flex justify-content-center fw-bold text-dark'>TEACHER LIST</h3>
        <Button variant="primary" onClick={() => navigate('/create-teacher')}> + Create teacher</Button>
        <div className='row py-5'>
        <Table striped bordered hover size='md'>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        {/* <th>Email</th> */}
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
          context.teacher.map((e,i)=>{
              return <tr key={i}>
                  <td>{i+1}</td>
                  <td>{e.teacher}</td>
                  {/* <td>{e.email}</td> */}
                  <td>
                      {/* <Button variant="primary" onClick={() => navigate(`/edit-student/${i}`)}>Edit</Button> */}
                      &nbsp;&nbsp;
                      <Button variant="danger" onClick={() => handleDelete(e.id) }>Delete</Button>
                  </td>
              </tr>
          })
      }
    </tbody>
  </Table> 
  </div>
  </div>                                        

  )
}

export default TeacherList