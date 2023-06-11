import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from  '../utils/constants.js'
import SearchBar from './Search'

export default function NavBar() {
  return (
    <Stack direction="row" alignItems="center"  p="10px" sx={{display:"flex",justifyContent:"space-between",position:'sticky',backgroundColor:'skyblue'}}>
              <Link to="/"><img src={logo} alt="youtube" width="50px" height="50px"/>priyanka</Link>

         <SearchBar/>
    </Stack>


  )
}
