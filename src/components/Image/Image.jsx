import { Link } from 'react-router-dom'

import './Image.css';

function Image({imageUrl, id }) {
  return (
    <>
      <div className="image-container">  

        <Link to = {`/image/${id}`}>
          <img src = {imageUrl} alt="" className="image" />  
        </Link>

      </div>
    </>
  )
}

export default Image