import './App.css';
import'./css/navB.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavB from './components/navB';
import Login from './components/login';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div >
    <Router>
      <NavB/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
