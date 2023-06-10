import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import {demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle } from  '../utils/constants.js'
import { CheckCircle} from '@mui/icons-material'

export default function VideoCard({video:{id:{videoId},snippet}}) {

  return (
    <Card  sx={{width:{xs:'100*',md:'300px',sm:'358px'},boxShadow:'none',borderRadius:'none'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
      <CardMedia 
      image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{height:'200px',width:'380px'}}
      />
      </Link>
      
  <CardContent sx={{backgroundColor:'white',height:'106px'}}>
<Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
<Typography variant='subtitle1' fontWeight='bold'>
  {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
</Typography>
</Link>

<Link to={demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>

</CardContent>

    </Card>
  )
}
