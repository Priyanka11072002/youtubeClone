import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  Box, Stack } from "@mui/material";

import { Video } from "./";
import { fetchApi } from "../utils/fetchApi";

const VideoDetail = () => {
 
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
  
    fetchApi(`/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`)
      .then((data) => setVideos(data.items))
  }, [id]);


  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
      <Box flex={1}>
          <Box sx={{ width: "100%"}}>

          <iframe width="100%" height="700px" src={`https://www.youtube.com/embed/${id}`} title="youtubeVideo">  </iframe>    
         <Video  video={videos}/>

          </Box>
        </Box> 
      
      </Stack>
    </Box>
  );
};

export default VideoDetail;