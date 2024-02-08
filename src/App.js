import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import './styles/theme.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Components/Navbar';
import MainCard from './Components/MainCard';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <>
		<Navbar />
    <iframe className='Earth' src='https://my.spline.design/untitled-acb7e6c4af18e696bb86444ce0386952/' frameborder='0' width='30%' height='30%'></iframe>
    
		<MainCard />
    </>
  );
}

export default App;
