import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import './NavBar.css';
import logo from '../../assets/logo2.png';

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Define routes for each menu item
  const menuItems = [
    { name: "All", path: "/" },
    { name: "Pillows", path: "/pillows" },
    { name: "Accessories", path: "/accessories"},
    { name: "SoFoam Ortho", path: "/ortho" }
    // { name: "Wall Decor", path: "/wall-decor" },
    // { name: "Lighting", path: "/lighting" },
    // { name: "Kitchenware", path: "/kitchenware" }
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="navbar-container">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navbar-space"></div>

        <div className="navbar-right">
          <FaBars className="hamburger-icon" onClick={toggleSidebar} />
          
          <div className="navbar-search-desktop">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <FaUserCircle className="navbar-icon" />
          <FaHeart className="navbar-icon" />
          <FaShoppingCart className="navbar-icon" />
        </div>
      </div>

      {/* Bottom Section - Desktop Navigation */}
      <div className="navbar-bottom">
        {menuItems.map((item, idx) => (
          <Link key={idx} to={item.path} className="navbar-button">
            {item.name}
          </Link>
        ))}
      </div>

      {/* Sidebar for Mobile */}
      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <FaTimes className="close-sidebar" onClick={toggleSidebar} />
        </div>
        <div className="sidebar-content">
          <div className="navbar-search-mobile">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon-mobile" />
          </div>
          <div className="sidebar-icons">
            <FaUserCircle className="sidebar-icon" />
            <FaHeart className="sidebar-icon" />
            <FaShoppingCart className="sidebar-icon" />
          </div>
          {menuItems.map((item, idx) => (
            <Link 
              key={idx} 
              to={item.path} 
              className="sidebar-link" 
              onClick={toggleSidebar}
            >
              <span>{item.name}</span>
              <FaChevronRight className="sidebar-arrow" />
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default NavBar;
