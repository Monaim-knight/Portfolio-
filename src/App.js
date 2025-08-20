import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ResearchList from './pages/ResearchList';
import ResearchNew from './pages/ResearchNew';
import ResearchPost from './pages/ResearchPost';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/research" element={<ResearchList />} />
				<Route path="/research/new" element={<ResearchNew />} />
				<Route path="/research/:slug" element={<ResearchPost />} />
			</Routes>
		</Router>
	);
}

export default App;
