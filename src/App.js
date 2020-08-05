import React from 'react';
import './App.css';
import Nav from './components/Navigation/navigation';
import Homepage from './components/Homepage/homepage';
import { Login, Register } from './components/Login/index.tsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Login />
        {/* <Register /> */}
      </div>
    );
  }
}

export default App;
