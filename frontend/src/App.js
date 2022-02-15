import './App.css';
import { useState } from 'react';
import Chat from './pages/Chat';
import axios from "axios"

function App() {
  const [imgSelect, setImgSelect] = useState(null);
  const [videoSelect, setVideoSelect] = useState(null);
  const [imgLink, setimgLink] = useState(null);
  const [videoLink, setvideoLink] = useState(null);

  const imgFileSelectHandler = event => {
    setImgSelect(event.target.files[0]);
  }

  const videoFileSelectHandler = event => {
    setVideoSelect(event.target.files[0]);
  }

  const imgFileUploadHandler = () => {
    const formData = new FormData()
    formData.append("file", imgSelect)
    formData.append("upload_preset", "mycity")

    axios.post("https://api.cloudinary.com/v1_1/ballerscourt/image/upload", formData)
      .then(res =>  setimgLink(res.data.url))
  }

  const videoFileUploadHandler = () => {
    const formData = new FormData()
    formData.append("file", videoSelect)
    formData.append("upload_preset", "mycity")

    axios.post("https://api.cloudinary.com/v1_1/ballerscourt/video/upload", formData)
      .then(res => setvideoLink(res.data.url))
  }
  // console.log(fileLink);

  return (
    <div className="App">
      <div className='nav'>
          <label htmlFor='img'>Image</label>
          <input id='img' accept='.png,.jpeg,.jpg' type="file" onChange={imgFileSelectHandler} />
          <button type='submit' onClick={imgFileUploadHandler}>upload</button>
          <label htmlFor='video'>Video</label>
          <input id='video' accept='.mp4' type="file" onChange={videoFileSelectHandler} />
          <button type="submit" onClick={videoFileUploadHandler}>submit</button>
        {imgLink ? <img src={imgLink.src}/> : ""}
        {videoLink ? <video src={videoLink.src} type="videos/ogg"></video> : ""}
        
      </div>
      <Chat />
    </div>
  );
}

export default App;
