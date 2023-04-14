import React from 'react';
import FixedMenu from './Components/Menu.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='menu'>
        <FixedMenu />
      </div>
      
      <div className='Outlet'>
        <Outlet />
      </div>

    </>
  );
}

export default App;

