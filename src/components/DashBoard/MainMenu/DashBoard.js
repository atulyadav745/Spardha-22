import React, { useState } from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './Layout/sidebar/SideBar';
import Content from './Layout/content/Content';
import './DashBoard.css';

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    // <Router>
    <div className="Db wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    </div>
    // </Router>
  );
};

export default App;
