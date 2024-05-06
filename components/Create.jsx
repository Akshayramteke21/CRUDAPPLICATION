import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {

    const [inputData,setInputData]= useState({

        name:'',
        email:'',
        age:''
    })



    const navigate= useNavigate()


   const handleClick=(e)=>{

        e.preventDefault();

        axios.post("http://localhost:3000/user",inputData)
        .then(res=>{
            alert("Data Save Sucessfully......")
            navigate('/')
        })
       

    }
  return (
   <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleClick}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' placeholder='enter the name' className='form-control'
                onChange={e=>setInputData({...inputData, name:e.target.value})}
                />

            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name='email' placeholder='enter the email' className='form-control'
                 onChange={e=>setInputData({...inputData, email:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="text" name='age' placeholder='enter the age' className='form-control'
                 onChange={e=>setInputData({...inputData, age:e.target.value})}/>
            </div><br/>
            <button className='btn btn-info'>Submit</button>
        </form>
    </div>
   </div>
  )
}

export default Create