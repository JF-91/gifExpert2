import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import  './components/AddCategory'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import Navbar from './navbar/navbar'




const GifExpertApp = () => {


  const [categories, setCategories]= useState([''])

  
  
  return (
    <>
       
      <Navbar />
      
      
      <h2>GifExpertApp</h2>
      <hr></hr>
        <AddCategory  setCategories = {setCategories} />
      <ol>
          {
            categories.map((category) =>{
              return < GifGrid key={category} category={category} />
            })
          }
      </ol>

    </>

  )
}

export default GifExpertApp