import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginNavbar from './components/navbar/loginNavbar'
import Login from './pages/login/login'
import Register from './pages/register/register'

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
