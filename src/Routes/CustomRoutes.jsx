import { Routes, Route } from "react-router-dom"

import CanvaIO from "../components/CanvaIO/CanvaIO.jsx"
import ImageDetails from "../components/ImageDetails/ImageDetails.jsx"

function CustomRoutes() {
    return (
      <Routes>
        <Route path="/" element= { <CanvaIO /> } />
        <Route path="/image/:id" element={ <ImageDetails />} />
      </Routes>
  )
}

export default CustomRoutes