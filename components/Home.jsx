import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Home() {

const[data,setData]= useState([])
    useEffect(()=>{

        axios.get("http://localhost:3000/user")

        .then(res=>setData(res.data))
        .catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <div className='container '>
             <h2 className='d-flex justify-content-center align-item-center'>CRUD Application </h2>
             <Link to='/create' ><button className='btn btn-success'>ADD+</button></Link>
        <table className='table'>

            <thead>
                <tr className='font-weight-bold' >
                    <td >Sr.no</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Action</td>

                </tr>
            </thead>
            <tbody>
                  {data.map((data,i)=>(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>

                        <td>{data.age}</td>

                        <td>

                            <Link to='/edit'><button className='btn btn-primary'> Edit</button></Link> {" "}
                           <Link to='/update'> <button className='btn btn-success'>Update</button></Link>{" "}
                            <Link to='/delete'><button className='btn btn-danger'>Delete</button></Link>
                        </td>


                    </tr>
                  ))}
            </tbody>

        </table>

        
    </div>
  )
}

export default Home