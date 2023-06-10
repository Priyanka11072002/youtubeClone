import React from 'react'
import { useParams} from 'react-router-dom'
import {Box,Typography} from '@mui/material'
import { useState,useEffect } from 'react'
import Video from './Video'
import {fetchApi} from  '../utils/fetchApi'


export default function SearchTerm() {
  const [video,setVideo] = useState([])
 const {id} = useParams()
  useEffect(() => {
  
       
    fetchApi(`/search?q=${id}&part=snippet`)  //use of search api
    
 
      .then((data) => setVideo(data.items))  //name,video,title,chhanel,description
    }, [id]);

  return (
    <>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       search here anything:<span style={{ color: "#FC1503" }}>{id}</span>videos
        </Typography>
  <Video video={video}/>
       
      </Box>
    

  
    </>
  
  )
}
