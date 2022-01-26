import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Landingpage from './components/Landingpage';
import CryptoTrackerApi from './components/apis/CryptoTrackerApi';
import RandomFactsApi from './components/apis/RandomFactsApi';
import RecipeApi from './components/apis/RecipeApi';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='pages'>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/cryptotrackerapi" element={<CryptoTrackerApi/>} />
        <Route path="/randomfactsapi" element={<RandomFactsApi/>} />
        <Route path="/recipeapi" element={<RecipeApi/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
