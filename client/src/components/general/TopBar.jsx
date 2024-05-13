import React from 'react';
import logo from './logo.png'; // Make sure to import your logo file
import './styles.css'
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className='bar'/>
      </div>
      <div className="avatar">
        <img src="https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-2.jpg"alt="Avatar" />
      </div>
    <div className="line"></div>
    </div>

  );
};

export default TopBar;
