import React from "react"
import { useNavigate } from 'react-router-dom'


export const Home = ({data, setData}) => {

const navigate = useNavigate()

// Function to Delete Employee
const handleDelete = key=>{
    let filtered = data.filter((employee)=> employee.id !== key)
    setData(filtered)
}

// Function to Navigate to Edit Page when edit button is cliked
const handleEdit = (id)=>{
    navigate(`/edit-employee/${id}`)
}

return (
    <div className="home-page">
        <h2>List of Current Employees</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            
            <tbody>
            {data.length === 0 ? 
            (<tr>
                <td colSpan={5} style={{textAlign:"center"}}>Add New Employee</td>
            </tr>) : 
            (data.map(employee =>(
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>{employee.salary}</td>
                    <td><button className="edit-btn" onClick={()=>handleEdit(employee.id)}>Edit</button></td>
                    <td><button className="delete-btn" onClick={()=>handleDelete(employee.id)}>Delete</button></td>
                </tr>
            )))}
            </tbody>
        </table>
    </div>
  )
}
