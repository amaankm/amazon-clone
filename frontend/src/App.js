import './App.css';
import Header from './components/Header.js';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home.js';
import Category from './components/Category.js';
import Signin from './components/Signin.js';
import Login from './components/Login.js';
import ProductView from './components/ProductView.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <>
          <Header/>
          <Category/>
          <Home />
        </>}/>
        
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductView/>}/>
      </Routes>
    </div>
  );
}

export default App;
