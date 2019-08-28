import React, { Component } from 'react';
import '../css/App.css';
import HelmetHeaders from '../components/HelmetHeaders';
import Header from '../components/Header';
import Body from '../components/Body';

const windowGlobal = typeof window !== 'undefined' && window;
const documentGlobal = typeof document !== 'undefined' && document;

class App extends Component {
  componentDidMount() {
    this.runResize(documentGlobal, windowGlobal);
    this.fadeIn(documentGlobal, windowGlobal);
  }

  runResize(documentGlobal, windowGlobal) {
    let vh = windowGlobal.innerHeight * 0.01;
    documentGlobal.documentElement.style.setProperty('--vh', `${vh}px`);
    windowGlobal.addEventListener('resize', () => {
      let vh = windowGlobal.innerHeight * 0.01;
      documentGlobal.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  fadeIn(documentGlobal, windowGlobal) {
    windowGlobal.setTimeout(() => {
      documentGlobal.getElementById('background').classList.add('fade-in');
      documentGlobal.getElementById('backgroundCover').classList.add('fade-in');
      documentGlobal.getElementById('App').classList.add('fade-in');
    }, 1);
  }

  render() {
    return (
      <div className='background' id='background'>
        <div className='background-cover' id='backgroundCover'>
          <div className='App' id='App'>
            <HelmetHeaders />
            <Header />
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
