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
  console.log(imgLink);
  console.log(videoLink);

  return (
    <div className="App">
      <div className='nav'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          imgFileUploadHandler()
        }}>
          <label htmlFor='img'>Image</label>
          <input id='img' style={{display:"none"}} accept='.png,.jpeg,.jpg' type="file" onChange={imgFileSelectHandler} />
          <button type='submit'>upload</button>
        </form>
        <form onSubmit={(e)=>{
          e.preventDefault()
          videoFileUploadHandler()
        }}>
          <label htmlFor='video'>Video</label>
          <input id='video' style={{display:"none"}} accept='.mp4' type="file" onChange={videoFileSelectHandler} />
          <button type="submit">submit</button>
        </form>
        {imgLink ? <img src={imgLink}/> : ""}
        {videoLink ? <video src={videoLink} type="videos/ogg" controls style={{position:"absolute",zIndex:"3"}}></video> : ""}
        
      </div>
      <Chat />
    </div>
  );
}

export default App;
