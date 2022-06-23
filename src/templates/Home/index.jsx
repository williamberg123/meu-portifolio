import './style.css';

import NavBar from '../../components/NavBar';
import Main from '../../containers/Main';

import HomeProvider from '../../contexts/HomeProvider';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<div className="Home">
			<HomeProvider>
				<NavBar />
				<Main />
				<Footer />
			</HomeProvider>
		</div>
	);
}
