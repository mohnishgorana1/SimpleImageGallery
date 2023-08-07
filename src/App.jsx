
import './App.css'
import CustomRoutes from './Routes/CustomRoutes'
import CanvaIO from './components/CanvaIO/CanvaIO'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div className='app-container'>
        <Header />
        <CustomRoutes />
        {/* <CanvaIO /> */}
      </div>
    </>
  )
}

export default App
