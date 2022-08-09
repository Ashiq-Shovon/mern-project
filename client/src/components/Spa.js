import React from 'react';
import MainContent from './main/MainContent';
import SideNav from './sidebar/SideNav';
import TopBar from './topbar/TopBar';

const Spa = () => {
  return (
    <div>
        <TopBar/>
        <div className='columns-2 flex'>
        <SideNav />
        <MainContent />
       </div>
    </div>
  )
}

export default Spa