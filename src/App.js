import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import {useState} from 'react'
import HOC from './HOC'
import Footer from './Footer'


function App() {
  const [location, setLocation] = useState('home')
  
  
  return (
    <div className="App">
      
       <Nav setLocation={setLocation} location={location} />
       <Home setLocation={setLocation} location={location}/>
       <About setLocation={setLocation} location={location}/>
       <Portfolio setLocation={setLocation} location={location}/>
       <Contact setLocation={setLocation} location={location}/>
       <Footer />
    </div>
  );
}

export default App;
