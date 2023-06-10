import React from 'react'
import {Paper,IconButton} from '@mui/material'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
//iconbutton:show the result,input:type anything will be change,paper:update the our result
import {Search} from '@mui/icons-material'


export default function SearchBar() {
  const [searchId,setSearchId] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
   if(searchId){
    navigate(`/search/${searchId}`)
    setSearchId('')
   }
  }

 
  return (
    
<Paper component="form" onSubmit={handleSubmit}  sx={{borderRadius:20,border:"1px solid #e3e3e3",pl:2,boxShadow:"none",mr:{sm:5} }}>
  <input type="text"  onChange={(e)=>{setSearchId(e.target.value)}} placeholder='...find here anything' value={searchId} className='search-bar'/>
  <IconButton type='submit' sx={{color:"red"}}><Search/></IconButton>
</Paper>
  )
}
               