/* eslint-disable react/react-in-jsx-scope */
import '../sass/style.css';
import Navigation from './Navigation';
import Container from './Container';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container />
      <Footer />
    </div>
  );
}

export default App;