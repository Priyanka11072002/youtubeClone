import React from 'react'
import { Stack,Box } from '@mui/material'
import  VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


export default function Video({video}) {

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
   {video&&video.map((items,idx)=>(
   <Box key={idx}>
   {items.id.videoId&&    <VideoCard  video={items} />}
   {items.id.channelId && <ChannelCard channelDetail={items} />}
   </Box>
   ))}
    </Stack>
  )
}
