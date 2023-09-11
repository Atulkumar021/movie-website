import React from 'react'
import Movies from './Movies'
import Search from './Search'
import './App.css'

const Home = () => {

  return (
    <div>
     <h3 style={{textAlign:'center',marginTop:'1em'}}>Welcome in Movie World</h3>
      <Search/>
    <Movies/>

    </div>
  )
}

export default Home