import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchApi } from "../utils/fetchApi";
import ChannelCard from "./ChannelCard";
import Video from "./Video";
export default function Channel() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoApi, setVideoApi] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchApi(`/channels?part=snippet&id=${id}`).then((data) =>
     setChannelDetail(data.items[0])
    );
    fetchApi(
      `/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data1) => setVideoApi(data1?.items));
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(50,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: "10",
            height: "300px",
          }}
        />

        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        <Video video={videoApi}/>
      </Box>
    </Box>
  );
}
