import { Link } from 'react-router-dom'

import './Image.css'
function Image(props) {
  return (
    <>
      <div className="image-container">  
        <Link to={`/image/${id}`}>
          <img src={props.imageUrl} alt="" className="image" />  
        </Link>
      </div>
    </>
  )
}

export default Image