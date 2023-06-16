import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Product from './pages/Product';
import Sales from './pages/Sales';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/product' element={<Product/>} />
		<Route path='/Sales' element={<Sales/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;
