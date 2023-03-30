import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Menu } from './components/menu/Menu';
import { Testimonials } from './components/testimonials/Testimonials';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<AboutMe />}></Route>
        <Route path="oferta" element={<Menu />}></Route>
        <Route path="zaufali-mi" element={<Testimonials />}></Route>
        <Route path="kontakt" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
