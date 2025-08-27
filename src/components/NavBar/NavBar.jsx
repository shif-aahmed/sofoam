import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import './NavBar.css';
// import logo from '../../assets/logo.png';

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    "All", "Premiums", "Furniture", "Home Decor", 
    "Wall Decor", "Lighting", "Kitchenware"
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="navbar-container">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="navbar-logo" >
          LOGO
          {/* <img src={logo} alt="Logo" /> */}
        </div>

        <div className="navbar-space"></div>

        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <FaBars className="hamburger-icon" onClick={toggleSidebar} />
          
          {/* Desktop icons */}
          <div className="navbar-search-desktop">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <FaUserCircle className="navbar-icon" />
          <FaHeart className="navbar-icon" />
          <FaShoppingCart className="navbar-icon" />
        </div>
      </div>

      {/* Bottom Section - hidden on mobile */}
      <div className="navbar-bottom">
        {menuItems.map((item, idx) => (
          <Link key={idx} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="navbar-button">
            {item}
          </Link>
        ))}
      </div>

      {/* Sidebar for mobile */}
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
            <Link key={idx} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="sidebar-link" onClick={toggleSidebar}>
              <span>{item}</span>
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
