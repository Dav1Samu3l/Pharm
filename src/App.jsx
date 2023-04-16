import React, { useEffect } from 'react';
import FixedMenu from './Components/Menu.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#2472b6';
  }, []);
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

