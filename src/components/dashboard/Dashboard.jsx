import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import matrix from '../dashboard/matrix.jpg';
import './dashboard.css';


const Dashboard = () => {

  const descrList = [
    {
      action: 'Add',
      icon: 'fa-solid fa-plus',
      description: 'Add a new task'
    },
    {
      action: 'Edit',
      icon: 'fa-solid fa-pen-to-square',
      description: 'Edit and update all you need'
    },
    {
      action: 'Delete',
      icon: 'fa-solid fa-trash',
      description: 'Delete useless task from the list'
    },
    {
      action: 'Complete',
      icon: 'fa-solid fa-check-double',
      description: 'Doubleclick the task name to complete it'
    },
  ];


  const list = descrList.map((item, index) => {
    return (
      <li className="descr-item" key={index}>
        <span className="icon">
          <i className={item.icon}></i>
        </span>
        <strong className='action'>{item.action}</strong>
        <span className="descr">{item.description}</span>
      </li>
    )
  })

  return (

    <div className="d-flex flex-wrap container-fluid pe-0 ps-0 justify-content-between">
      <div className="matrix-wrap">
        <div className="d-flex flex-wrap align-items-center justify-content-between pt-5 pb-5">     
        <div className="intro d-flex flex-column">
        <div className="intro-header">
          <h1>Eisenhower Matrix</h1>
          <h2>Time-management technique</h2>
          <span className="slogan">EisenMatrix App</span> 
        </div>
        <div className="intro-descr">
          <ul>
            {list}
          </ul>
        </div>
        <NavLink to="/tasklist">
          <Button variant="primary" className='d-flex m-auto mb-4'>Click to start</Button>
        </NavLink>
      </div>
      <div className="decoration">
        <img srcSet={matrix} alt="matrix" />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;