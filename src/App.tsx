import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageDashboard } from './pages/PageDashboard';
import { PageJobs } from './pages/PageJobs';
import { PageSkills } from './pages/PageSkills';
import  employment from './assets/employment.jpg';

function App() {
	return (
		<div className="App">
			<h1>Get a Job</h1>
			<nav>
				<NavLink to="/dashboard">Dashboard</NavLink>
				<NavLink to="/jobs">Jobs</NavLink>
				<NavLink to="/skills">Skills</NavLink>
			</nav>

			<Routes>
				<Route path="/dashboard" element={<PageDashboard />} />
				<Route path="/jobs" element={<PageJobs />} />
				<Route path="/skills" element={<PageSkills />} />
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
			</Routes>

			<img className="employment" src={employment}/>
		</div>
	);
}

export default App;
