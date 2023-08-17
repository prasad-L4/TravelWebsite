
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Services from './pages/Services';
import Signup from './pages/Signup';
import Navbar from './Component/NavBar/Navbar';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
  
      <Routes>
        <Route exact path='/' element={ <Home/>}>

 
    </Route>
    <Route exact path='/about' element={ <About/>}>

 
    </Route>
    <Route exact path='/contact' element={ <Contact/>}>

 
    </Route>
    <Route exact path='/services' element={ <Services/>}>

 
    </Route>
    <Route exact path='/signup' element={ <Signup/>}>

 
    </Route>

    </Routes>
    <Footer/>
    </Router>
   
  );
}

export default App;
