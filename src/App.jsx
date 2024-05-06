import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Update from '../components/Update'
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from '../components/Home'
import Edit from '../components/Edit'
import Read from '../components/Read'
import Create from '../components/Create'
import Delete from '../components/Delete'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/Read' element={<Read/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>
     
    </Routes>
    </BrowserRouter>
  )
}

export default App