
import './Image.css'
function Image(props) {
  return (
    <>
      <div className="image-container">  
        <img src={props.imageUrl} alt="" className="image" />  
      </div>
    </>
  )
}

export default Image