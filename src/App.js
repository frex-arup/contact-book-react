
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import ViewAll from './pages/ViewAll';
import Create from './pages/Create';
import Developer from './pages/Developer';

function App() {
  return (
    <Router> 
      <Header/> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ViewAll" element={<ViewAll/>}/>
        <Route exact path="/Create" element={<Create/>}/>
        <Route exact path="/Developer" element={<Developer/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;