import React from 'react'
import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

  const [image, setImage] = useState([])

  useEffect(()=>{
    getGifs(category)
      .then(setImage)
  },[category])

  

  

  return (
    <>
    <h3>{category}</h3>
      <div className='card-grid'>
      
      
        {
          image.map((img) =>(
              <GifGridItem  
                            key={img}
                            {...img}/>
          ))
        }
      
    </div>
    </>
  
   


  )
}

export default GifGrid