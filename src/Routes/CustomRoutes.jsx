import { Routes, Route } from "react-router-dom"

import ImageDetails from "../components/ImageDetails/ImageDetails"
import App from "../App"

function CustomRoutes() {
    return (
      <Routes>
        <Route path="/" element= {App} />
        <Route path="/image/:id" element={ImageDetails} />
      </Routes>
  )
}

export default CustomRoutes