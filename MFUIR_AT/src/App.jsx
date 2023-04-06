import './App.css'
import MainHeader from './components/MainHeader/MainHeader'
import SideNav from './components/SideNav/SideNav'

function App() {
	return (
		<div className='grid-container'>
			<header>
				<MainHeader />
			</header>
			<nav>
				<SideNav />
			</nav>
			<footer>
				Footer
			</footer>
		</div>
	)
}
export default App
