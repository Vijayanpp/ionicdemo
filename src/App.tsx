import React, { useState, useEffect } from "react";
import "./App.css";
// import Video from "./components/video/Video";
import VideoConverter from "./components/video/VideoConverter";
import { db } from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot: any) =>
      setVideos(snapshot.docs.map((doc:any) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ messages, url, likes, shares, description, channel, song }, i) => {
            return (
              // <Video
              //   key={i}
              //   messages={messages}
              //   likes={likes}
              //   shares={shares}
              //   description={description}
              //   channel={channel}
              //   song={song}
              //   url={url}
              // />
              <VideoConverter key={i}/>
            );
          }
        )}
      </div>
    </div>
  );
}
export default App;
