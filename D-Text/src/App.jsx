import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Main from './Pages/Main';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/D-Text/' element={<Main />} >
            <Route index element={<Home />} />
            <Route path='Rooms' element={<Rooms />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App;
