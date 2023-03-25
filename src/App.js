
import './App.css';
import Home from './Home';
import { Route,Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './footer';
import Menu from './Menu';
import Clients from './clients';

function App() {
  return (
    <>
    <NavBar />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='menu' element={<Menu/>} />
   </Routes> 
   <Footer /> 
    </>
  );
}

export default App;
