import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Register from './pages/register/register'
import LoginNavbar from './components/loginNavbar'

function App() {
	return (
		<Router>
			<LoginNavbar />
			<div>
				<Routes>
					<Route exact path='/' element={<Login />}></Route>
					<Route path='/register' element={<Register />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
