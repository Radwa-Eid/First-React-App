import './App.css';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Servescards from './components/Servescards'
import Blog from './components/Blog';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Servescards />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
