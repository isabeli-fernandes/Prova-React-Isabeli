import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import './App.css';
import Footer from './components/template/Footer/Footer'
import Sidebar from './components/template/Sidebar/Sidebar';
import Header from './components/template/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
      <Router>
        <Routes/>
      </Router>
      <Footer/>
    </>
  );
}

export default App;