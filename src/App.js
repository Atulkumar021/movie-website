import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import SigleMovies from './SigleMovies'
import './App.css'

const App = () => {
  return (
    <div className='apps'>
      
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='movie/:id' element={<SigleMovies/>}/>

     </Routes>

    </div>
  )
}

export default App