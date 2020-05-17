import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Map from './Containers/Map'

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="row">

        <div className="col s12 m4 l4">
          <Sidebar/>
        </div>
        <div className="col s12 m8 l8">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
