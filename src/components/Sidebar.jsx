import React from 'react'
import { Stack } from '@mui/material'
import {categories } from '../utils/constants.js'

export default function Sidebar({selectedCategory,setSelectedCategory}) {
  return (
    <Stack  direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>{categories.map((category,index)=>(
    <button className='category-btn'
    onClick={()=>setSelectedCategory(category.name)}
    style={{background:category.name===selectedCategory&&'blue',color:'green'}} 
    key='category.name'>
      <span style={{color:category.name===selectedCategory?'white':'orange',opacity:category.name===selectedCategory?'1':'2'}}>
        {category.icon}</span>
    <span style={{color:category.name===selectedCategory?'pink':'green',marginLeft:'15px'}}>{category.name}</span></button>
    ))}
    </Stack>

  )
}
