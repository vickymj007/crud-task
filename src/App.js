import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from "./Components/Navbar";
import { Home } from './Components/Home';
import { AddEmployee } from './Components/AddEmployee';
import { employeeData } from './data';
import { EditEmployee } from './Components/EditEmployee';
import { ErrorPage } from './Components/ErrorPage';
import { Contact } from './Components/Contact';




function App() {
  const [data, setData] = useState(employeeData)
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' 
          element={<Home data={data} setData={setData}/>}
          />
          <Route path='/add-employee'
           element={<AddEmployee data={data} setData={setData}/>}
           />
          <Route path='/edit-employee/:userId' 
          element={<EditEmployee data={data} setData={setData}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
