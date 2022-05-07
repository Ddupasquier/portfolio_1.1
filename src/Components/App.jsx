import React, { useState, useCallback, useRef } from 'react';
import '../sass/style.css';
import Navigation from './Navigation';
import Container from './Container';
import Footer from './Footer';
import BG from './backgroundAnimation/BG';

const colors = ['#FFFFFF', '#0000FF', '#00FF00', '#FFFF00'];

function App() {
  let [colorIndex, setColorIndex] = useState(0);
  const stateRef = useRef();
  stateRef.colorIndex = colorIndex;

  function changeBg() {
    const newIdx = (stateRef.colorIndex + 1) % colors.length;
    console.log(newIdx);
    setColorIndex(newIdx);
  }

  const newChangeBg = useCallback(changeBg, []);
  
  return (
    <div className='App'>
      <BG changeBg={newChangeBg} color={colors[colorIndex]} />
      <Navigation />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
