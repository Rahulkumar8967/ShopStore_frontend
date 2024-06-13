import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';

import Navigation from './customer/components/Navigation/Navigation';

function App() {
  return (
    <div>
    <Navigation />
    <div>
      <HomePage />
      </div>
  <Footer />
    </div>
  );
}

export default App;
