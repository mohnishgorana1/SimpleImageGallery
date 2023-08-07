import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import './ImageDetails.css';

function ImageDetails() {

  const { id } = useParams();

  const [image, setImage] = useState({});

  async function downloadImage(){
    const response  = await (await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)).json()
    console.log(response);

    setImage( {
      name: response.photo.title,
      description: response.photo.description,
      url : response.photo.url
    })

    
  }

  useEffect( () => {
    downloadImage();
  }, [image] )


  return(
    <>  
      <div className="image-details-page">

        <div className="image-wrapper">      
          <div className="image-container">
            <img className="img" src={image.url} alt="" />
          </div>

          <div className="image-details">
            <div className="image-name">
              <span className="attribute">Title </span> 
              : {image.name}
            </div>
            <p className="image-desc">
            <span className="attribute">Description </span> 
              : {` "${image.description}" `}
            </p>
          </div>     
        </div>

      </div>


   


      
    </>
  )
 
}

export default ImageDetails