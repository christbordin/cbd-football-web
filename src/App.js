import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import HomeLogin from './pages/homeLogin';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
