import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Error from './components/Error'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
