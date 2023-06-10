
import React from 'react'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import {Box} from '@mui/material'

import {Navbar,Feed,Channel,Search,Sidebar,Video, SearchTerm} from './components'
import VideoDetail from './components/Videodetail'


export default function App() {
  return (
    <BrowserRouter>
    <Box sx={{background:'black',position:'sticky',color:'white'}}>
        <Navbar/>
    <Routes>
      <Route path='/' element={<Feed/>}/>
      <Route path='channel/:id' element={<Channel/>}/>
      <Route path='Search/:id' element={<SearchTerm/>}/>
      <Route path='Sidebar/:id' element={<Sidebar/>}/>
      <Route  extact  path='video/:id' element={<VideoDetail/>}/>

    </Routes>    
    </Box>
    
    </BrowserRouter> 

  )
}
