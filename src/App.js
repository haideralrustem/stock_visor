import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
        <div className='app'>

            <div className='navbar'>
                <Navbar></Navbar>
            </div>

            <div className='main'>

              <HomePage></HomePage>
              
            </div>

            <div className='footer'>

            </div>

        </div>
    </div>
  )
}

export default App