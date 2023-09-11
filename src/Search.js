import React, { useState } from 'react'
import { useGlobalContext } from './context'
const Search = () => {
  const {query, setquery }=useGlobalContext()
  const handlesearch=(e)=>{
    setquery(e.target.value)
  }
  return (
    
    <div style={{textAlign:'center'}}>
      <div className="search">
        <input type="search" value={query} onChange={handlesearch} /> search

      </div>
    </div>
  )
}

export default Search