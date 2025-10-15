import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Sidebar from './componets/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          
          <Route path='/add' element={<Add url={url}/> }/>
          <Route path='/list' element={<List url={url}/> }/>
          <Route path='/orders' element={<Orders url={url}/> }/>
        </Routes>
          <Route path='/' element={<Add url={url}/> }/>
      </div>
    </div>
  )
}

export default App
