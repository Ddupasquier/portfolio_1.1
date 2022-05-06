import '../sass/style.css';
import Navigation from './Navigation';
import Container from './Container';
import Footer from './Footer';
import ParticlesBg from './ParticlesBg.jsx';

function App() {
  return (
    <div className='App'>
      <ParticlesBg />
      <Navigation />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
