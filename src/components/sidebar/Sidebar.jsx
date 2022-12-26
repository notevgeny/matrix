import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import logo from './Logo.svg';

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const menuList = [
    {
      path: '/',
      name: 'Dashboard',
      icon: 'fa-solid fa-house'
    },
    {
      path: '/tasklist',
      name: 'Tasklist',
      icon: 'fa-solid fa-list'
    },
    {
      path: '/completed',
      name: 'Completed',
      icon: 'fa-solid fa-check'
    },
  ]

  const classNames = isOpen ? 'sidebar' : 'sidebar closed';

  const menu = menuList.map((item, index) => {
    return (
      <li className="nav-link" key={index}>
        <NavLink 
        to={item.path} 
        style={({ isActive }) => ({ color: isActive ? 'white' : ''})}
      >
        <i className={`${item.icon} icon`}></i>
        <span className="text nav-text">{item.name}</span>
      </NavLink>
      </li>
      
    )
  }
  )
  
  return (
    <nav className={classNames}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="logo"/>
          </span>
          <div className="text header-text">
            <span className="name">EisenMatrix</span>
            <span className="desc">Your task-manager</span>
          </div>
        </div>
        <i className="fa-solid fa-arrow-left toggle" onClick={toggle}></i>

      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
              {menu}
          </ul>
        </div>
      </div>
      
    </nav>
    
  );
};

export {Sidebar};