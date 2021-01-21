import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "../video-footer/VideoFooter";
import VideoSidebar from "../video-sidebar/VideoSidebar";

interface IVideo {
  url: string;
  song: string;
  description: string;
  channel: any;
  likes: number;
  messages: string;
  shares: any;
}

function Video({
  url,
  song,
  description,
  channel,
  likes,
  messages,
  shares,
}: IVideo) {
  const [playing, setPlaying] = useState(false);
  const videoRef: any = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
        autoPlay
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar messages={messages} shares={shares} likes={likes} />
    </div>
  );
}

export default Video;
