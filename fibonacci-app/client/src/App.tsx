import { Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
	return (
		<>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/otherpage'>Other page</Link>
			</div>
			<Routes>
				<Route path='/' element={<Fib />} />
				<Route path='/otherpage' element={<OtherPage />} />
			</Routes>
		</>
	);
}

export default App;
