import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"

const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue]= useState('')

const handleInputChange = (e)=>{
    setInputValue( e.target.value)
}

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(inputValue);
   
    if(inputValue.trim().length >2){
        setCategories(e => [inputValue, ...e])
        setInputValue("")
    }
}



  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" 
                value={inputValue} 
                onChange={handleInputChange}/>
    </form>
    
    </>
  )
}

AddCategory.prototypes ={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory