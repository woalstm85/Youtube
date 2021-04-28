import React, { useEffect, useState } from 'react';
import './app.css';
import Videolist from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  /*
    useEffect(() => {},); : state, pros가 변경될 때마다 호출
    useEffect(() => {}, []); : 마운트될때 한버만 호출
    useEffect(() => {}, [temp]); : temp의 값이 변경될 때만 호출
  */

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=브레이브걸&key=AIzaSyDQjIa5z0iSh-oZd99cYntmwVm157apTAI',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <Videolist videos={videos} />;
}

export default App;
