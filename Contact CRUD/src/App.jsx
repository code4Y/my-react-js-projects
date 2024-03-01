import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nave from './components/Nave';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nave />
        <>
          <Routes>
            <Route path='/' element={<Add />} />
          </Routes>
        </>
      </div>
    </BrowserRouter>
  )
}

export default App
