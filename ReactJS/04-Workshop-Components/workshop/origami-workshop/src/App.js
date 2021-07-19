'use strict';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation.js';
import Aside from './Aside.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Aside />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
