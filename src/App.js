import './assets/css/dark.css';
import './assets/css/style.css';
import './assets/css/meanmenu.css';
import './assets/css/responsive.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/odometer.min.css';
import './assets/css/owl.carousel.min.css';

import { HashRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import Contact from './components/Contact';




function App() {
  return (
    
  
   <HashRouter>
   
   <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="/contact" element={<Contact />} />
        
      </Routes>
   
   </HashRouter> 
   
   
   

  );
}

export default App;
