import '../sass/style.css';
import Navigation from './Navigation';
import Container from './Container';
import Footer from './Footer';
import BG from './backgroundAnimation/BG';

function App() {
  const colors = ['red', 'blue', 'green', 'yellow'];
  let i = 0;

  function changeBg() {
    i <= colors.length ? i++ : (i = 0);
    document.body.style.backgroundColor = colors[i];
  }
  // use inline style for background color and set bg color using state

  return (
    <div className='App' onClick={changeBg}>
      <BG />
      <Navigation />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
