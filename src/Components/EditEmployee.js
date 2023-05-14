import React, { useEffect } from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const EditEmployee = ({data, setData, editId}) => {
    let [id, setId] = useState("")
    let [name, setName] = useState("")
    let [role, setRole] = useState("")
    let [salary, setSalary] = useState("")
    let [isValidId, setIsValidId] = useState(true)
    let navigate = useNavigate()


    const validateID =(e)=>{
        setIsValidId(true)
        setId(e.target.value)
        data.forEach(ele=>{
            if(ele.id === +e.target.value){
                setIsValidId(false)
            }
            if(+e.target.value === +editId){
                setIsValidId(true)
            }
        })
    }
    
    useEffect(()=>{
        let employeeData = data.find(emp => emp.id === +editId)
        if(employeeData){
            setId(employeeData.id)
            setName(employeeData.name)
            setRole(employeeData.role)
            employeeData.salary = employeeData.salary.replace(/,/g, '')
            setSalary(employeeData.salary)
        }
        
    },[editId, data])

    const updateEmployee = (e)=>{
        e.preventDefault()
        let employeeIndex = data.findIndex(emp => emp.id === +editId)
        salary = (+salary).toLocaleString('en-IN')
        const updatedEmployee = {
            id: editId,
            name,
            role,
            salary
        }
        data[employeeIndex]=updatedEmployee
        setData([...data])
        navigate('/')
    }

    return (
    <div className='add-employee-page'>
        <form onSubmit={(e)=>updateEmployee(e)}>
            <h2>Edit Employee</h2>
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
            <button>Update Changes</button>
        </form>
    </div>
  )
}
