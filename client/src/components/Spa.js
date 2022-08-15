import React from 'react';
import SideNav from './sidebar/SideNav';
import TopBar from './topbar/TopBar';
import Home from '../pages/home/Home';
import UserList from './main/UserList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const Spa = () => {
  return (
    <div>
        <TopBar />
          
            
            
            <div className='columns-2 flex'>
          
        
        
        <BrowserRouter>
        <SideNav />
        <div className='min-h-screen w-[90%]  bg-slate-500 absolute left-[10%]'>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="user-list" element={<UserList />}></Route>
            {/* <Route path="users">
              <Route index element={<List/>}></Route>
              <Route path="new" element={<New/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List/>}></Route>
              <Route path="new" element={<New/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
            </Route> */}

          </Route>
        </Routes>
        </div>
      </BrowserRouter>
       </div>
    </div>
  )
}

export default Spa