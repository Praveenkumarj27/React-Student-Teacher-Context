import React from 'react';
import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';
import Teacherslist from './components/Teacherslist';
import CreateTeacher from './components/CreateTeacher';


export let StudentContext = React.createContext()
// export const url="https://62a96c57ec36bf40bdb75056.mockapi.io/users/users";

export let DBstudents = [];

export let DBteacher = [];





function App() {
  let data = {
    monthly:"Rs. 50,000",
    annual:"Rs. 5,80,000",
    task:50,
    pending:18
  }

  let [students,setStudents] =useState([DBstudents])
  let [teacher,setTeacher] =useState([DBteacher])
  return <>
  <div className='main-wrapper'>

  <StudentContext.Provider value={{data,students,setStudents,teacher,setTeacher}}>
  
      <BrowserRouter>
      
      <Sidebar/>
      
          <Routes>
              <Route path='dashboard' element={<Dashboard />}/>
              <Route path='create-student' element={<CreateStudent />}/>
              <Route path='student-list' element={<StudentList />}/>
              <Route path='create-teacher' element={<CreateTeacher />}/>
              <Route path='teacher-list' element={<Teacherslist />}/>
              <Route path='edit-student/:id' element={<EditStudent/>}/>
              <Route path='*' element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
      </StudentContext.Provider>
  </div>
  </>
}
export default App;
