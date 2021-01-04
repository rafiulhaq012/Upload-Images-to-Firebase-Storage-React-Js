import React, { useState } from "react";
import { storage } from "./firebase";
import Show from "./Show";

const Upload = () => {
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState([]);
  const [progress, setProgress] = useState(0);
  
  
  const handleChange = (e) => {

    console.log(image);
    for(let i=0; i<e.target.files.length; i++){
      console.log('File ajkshkadnkaia ',e.target.files[i])
      let image = e.target.files[i];
      setImage(prevArray => [...prevArray, image]);

      console.log('image upload')
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
              console.log(error);
          },
          () =>  {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                  console.log(url)
                  setUrl(prevArray => [...prevArray, url]);
              });
          }
      );
    }
  };

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} multiple/>
      <br/><br/>
      {
          (url.length > 0) ? 
          <div>
              <div>------------SHOW COMPONENT------------<br/><br/><br/></div>
              <Show  url={url}  />
          </div>
          :
          ''
        }
      
    </div>
  );
};



export default Upload

