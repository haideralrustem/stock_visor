import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Provider } from 'react-redux'
import store from './store';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  )
}

export default App