import React, { useState } from 'react';
import '../sass/style.css';
import Container from './Container';
import BG from './backgroundAnimation/BG';
import Footer from './Footer';

const COLORS = [
  '#680000',
  '#683000',
  '#685300',
  '#516800',
  '#2C6800',
  '#026800',
  '#00684F',
  '#005168',
  '#003268',
  '#001168',
  '#1B0068',
  '#450068',
  '#680062',
  '#68003C',
  '#680019',
];

const nextColorIndex = (prevIndex) => (prevIndex + 1) % COLORS.length;

function App() {
  const [colorIndex, setColorIndex] = useState(7);
  // const [showBgAnimation, toggle] = useReducer(
  // (showBgAnimation) => !showBgAnimation,
  // false
  // );
  const changeBg = () => setColorIndex(nextColorIndex);

  return (
    <div className="App">
      {/* {showBgAnimation ? (
        <BG changeBg={changeBg} color={COLORS[colorIndex]} />
      ) : null}
      <Container
        showBgAnimation={showBgAnimation}
        toggle={toggle}
      /> */}
      <BG changeBg={changeBg} color={COLORS[colorIndex]} />
      <Container />
      <Footer />  
    </div>
  );
}

export default App;
