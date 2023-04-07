import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import DocumentsContainer from './components/DocumentsContainer/DocumentsContainer'
import Footer from './components/Footer/Footer'
import MonthlySpending from './components/Graph/MonthlySpending'
import MainHeader from './components/MainHeader/MainHeader'
import MainOverview from './components/MainOverview/MainOverview'
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
			<div id='card-container'>
				<CardContainer />
			</div>
			<div id='main-overview'>
				<MainOverview />
			</div>
			<div id='documents-container'>
				<DocumentsContainer />
			</div>
			<div id='graph-container'>
				<MonthlySpending />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}
export default App
