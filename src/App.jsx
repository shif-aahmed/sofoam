import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PillowsPage from './pages/PillowsPage/PillowsPage';
import OrthoPage from './pages/OrthoPage/OrthoPage';
import AccessoriesPage from './pages/AccessoriesPage/AccessoriesPage.jsx';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pillows" element={<PillowsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/ortho" element={<OrthoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
