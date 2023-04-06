import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
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
			<div id="card-container">
				<CardContainer/>
			</div>
			<footer>
				Footer
			</footer>
		</div>
	)
}
export default App
