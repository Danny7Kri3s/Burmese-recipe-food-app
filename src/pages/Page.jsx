import React from 'react'
import Home from './Home'
import {Routes, Route} from 'react-router-dom'
import Detail from '../components/Detail'
import Nav from '../components/Nav'

function Page() {

  
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default Page