import 'bootstrap/dist/css/bootstrap.css';
// import './theme.js';
// import './styles/theme.css'
import './styles/App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Components/Navbar';
import MainCard from './Components/MainCard';

function App() {
  return (
    <>
		<Navbar />
		<MainCard />
    </>
  );
}

export default App;
