import { useState } from "react";
import { useEffect } from "react";

import "./Gallery.css";

import Image from "../Image/Image.jsx";

function Gallery() {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [nextUrl, setNextUrl] = useState('');
  // const [prevUrl, setPrevUrl] = useState('');

  const ImagesUrl = "https://api.slingacademy.com/v1/sample-data/photos"

  async function downloadImages() {
    setIsLoading(true);

    const response = await (await fetch(ImagesUrl)).json();


    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous)



    console.log(response.photos);
    const imageDataList = response.photos;
    console.log("ImageDataList", imageDataList);

    const ImageData = imageDataList.map((img) => {
      return {
        title: img.title,
        message: img.message,
        user: img.user,
        id: img.id,
        desc: img.description,
        imageUrl: img.url,
      };
    });
    console.log("ImageData",ImageData);


    setImageList(ImageData);

    setIsLoading(false);

  }

  useEffect(() => {
    downloadImages();
  }, [ImagesUrl]);

  return (
    <>
      <div className="gallery-container">

          <div className="navigation-btns">
            <button className="nav-btn"> ⏮️ Prev </button>
            <button className="nav-btn"> Next ⏭️ </button>
          </div>

        <div className="image-list">
          { (isLoading) ? "Loading" : imageList.map((image) => (
                <Image
                  title={image.title}
                  imageUrl={image.imageUrl}
                  key={image.id}
                />
              ))
          }
        </div>
      </div>
    </>
  );
}

export default Gallery;
