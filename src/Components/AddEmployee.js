
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddEmployee = ({data, setData}) => {
    let [id, setId] = useState("")
    let [name, setName] = useState("")
    let [role, setRole] = useState("")
    let [salary, setSalary] = useState("")
    let navigate = useNavigate()
    let [isValidId, setIsValidId] = useState(true)


    // Function to Validate if User ID is already Available or Not
    const validateID =(e)=>{
        setIsValidId(true)
        setId(e.target.value)
        data.forEach(ele=>{
            if(ele.id === e.target.value){
                setIsValidId(false)
            }
        })
    }

    // Function to Add new employee 
    const handleAddEmployee = (e)=>{
        e.preventDefault()
        if(!id || !name || !role || !salary || !isValidId) return
        salary = (+salary).toLocaleString('en-IN')
        name = name.charAt(0).toUpperCase() + name.slice(1)
        role = role.charAt(0).toUpperCase() + role.slice(1)
        
        const newEmployee = {
            id,
            name,
            role,
            salary
        }
        setData([...data,newEmployee])
        setId("")
        setName("")
        setRole("")
        setSalary("")
        navigate('/')
    }


  return (
    <div className='add-employee-page'>
        <form onSubmit={(e)=>handleAddEmployee(e)}>
            <h2>Add New Employee</h2>
            <input type='number' 
            name='Id' 
            placeholder='Employee Id' 
            value={id}
            style={{borderColor:(isValidId ? "#624CAB" : "red")}}
            onChange={(e)=>validateID(e)}
            />
            {!isValidId && <p className='error'>Employee ID already exist</p>}
            <input type='text' 
            name='Employee Name' 
            placeholder='Employee Name' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input type='text' 
            name='Role' 
            value={role} 
            placeholder='Role'
            onChange={(e)=>setRole(e.target.value)}
            />
            <input type='number' 
            name='Salary' 
            value={salary} 
            placeholder='Salary'
            onChange={(e)=>setSalary(e.target.value)}
            />
            <button>Add Employee</button>
        </form>
    </div>
  )
}
