import { useState } from "react";
import { useEffect } from "react"

import './Gallery.css'
import { Image } from "./Image/Image.jsx";

function Gallery() {
    // const [isLoading, setIsLoading] = useState(true);

    const [ImagesUrl, setImagesUrl] = useState('https://api.slingacademy.com/v1/sample-data/photos');

    async function downloadImages(){
        const response = await fetch(ImagesUrl);
        
    }


    useEffect(() => { 
        
      }, [ImagesUrl])
  return (
    <>
        <div className='gallery-container'>
            <div className="navigation-btns">
                <button> ⏮️ Prev </button>
                <button> Next ⏭️</button>
            </div>
            <div className="image-list">
               
            </div>
        
        </div>
    </>
  )
}

export default Gallery