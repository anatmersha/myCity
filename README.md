Welcome
-------------------------------
This repo is a practice repo I am using to learn Git.

nadav - backend installing package.json then axios express and concurently
<<<<<<< HEAD
>>>>>>> eb7d74a50dab3cf437e91ead3628425d2f2d681b
=======
>>>>>>> bee19813410ab174da853f8a989a28a373b6e2b1
nadav - installing react-route-dom,geoapify build chat page & components

<!-- const CurrentLocation = () => {
    const lat = 31.8952532;
    const lng = 34.8105616;
    const myAPIKey = "cb3099bb7a604bb0b86052dbe0ad8b65";
    const reverseGeocodingUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${myAPIKey}`;

    fetch(reverseGeocodingUrl).then(result => result.json())
      .then(featureCollection => {
        console.log(featureCollection);
      });
    return(
        <>
        </>
    )
}

export default CurrentLocation; -->
<!-- ///////////// -->
<!-- import React, { useState } from 'react'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
// import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const AutocompleteLocation = () => {
    const [location, setLocation] = useState("");

    function onPlaceSelect(value) {
      console.log(value);
    }
  // properties.city/country/lat/lon
    function onSuggectionChange(value) {
      console.log(value);
    }

  return <GeoapifyContext apiKey="cb3099bb7a604bb0b86052dbe0ad8b65">
<GeoapifyGeocoderAutocomplete 
  placeholder="Enter address here"
  placeSelect={onPlaceSelect}
  suggestionsChange={onSuggectionChange}
/>
</GeoapifyContext>

}

export default AutocompleteLocation; -->

<!-- ////////////// -->
<!-- SearchBar -->
    <!-- const [filteredReports, setFilteredReports] = useState([])
    const handleSearch = (e) => {
        const searched = e.target.value;
        const newFilter = reports?.filter((report)=> {
            return report?.name.toLowerCase().includes(searched.toLowerCase())
        });
        searched === "" ? setFilteredReports([]) : setFilteredReports(newFilter)
    } -->
<img src="https://i.ibb.co/QKjmKsM/changepassword.png"/>

<!-- 
import logo from "./logo.svg";
import "./App.css";
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

export default App; -->
"delete user"
"https://identitytoolkit.googleapis.com/v1/accounts:delete?key=[API_KEY]"
hiii