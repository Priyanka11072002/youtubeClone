import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {  Box, Stack } from "@mui/material";

import { Video } from "./";
import { fetchApi } from "../utils/fetchApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
 
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
      .then((data) =>setVideoDetail(data.items[0]))

    fetchApi(`/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`)
      .then((data) => setVideos(data.items))
  }, [id]);

console.log(videoDetail,'videoDETAIL')

//   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
      <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=kFRowYi8uvA`} className="react-player" controls />
            
          </Box>
        </Box> 
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Video video={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;