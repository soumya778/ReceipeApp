import React, { useState } from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {
  const [text,setText]=useState("")
  const {setSearchterm,fetchRandom}=useGlobalContext();

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text){
      setSearchterm(text)
      setText("")
    }
  }
  return (
    <>
    <header className='search-container'>
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder='Search For Your Favourite ' className='form-input'
        value={text} 
        onChange={(e)=>setText(e.target.value)} />
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipster' onClick={fetchRandom}>Surprise me</button>
      
      </form>
    
      </header>  
    </>
  )
}

export default Search
