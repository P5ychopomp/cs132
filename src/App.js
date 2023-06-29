import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import Introduction from './components/Introduction';
import Methods from './components/Methods';
import Results from './components/Results';
import Implications from './components/Implications';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "red";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <Introduction color={color} />
      <Methods color={color} />
      <Results color={color} />
      <Implications color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
