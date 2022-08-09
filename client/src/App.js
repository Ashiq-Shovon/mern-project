
import React from 'react';
import ReactDom from 'react-dom';
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import List from "./pages/list/List.js";
import New from "./pages/new/New.js";
import Single from "./pages/single/Single.js";
import Spa from './components/Spa.js';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Calender} from "@syncfusion/ej2-calendars";

import { ScheduleComponent, ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop }
from "@syncfusion/ej2-react-schedule";
 
// import {DatePickerComponent} from "@syncfusion/ej2-react-calenders";

function App() {
  const activeMenu = false;
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="users">
              <Route index element={<List/>}></Route>
              <Route path="new" element={<New/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List/>}></Route>
              <Route path="new" element={<New/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter> */}
        <Spa />
       
      
  
    </div>
  );
}

export default App;
