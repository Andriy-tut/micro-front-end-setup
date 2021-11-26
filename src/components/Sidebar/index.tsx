import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = { width: '280px' };

const Sidebar = () => (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={styles}>
        <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <NavLink to="/" className="nav-link text-white" aria-current="page">
            <svg className="bi me-2" width="16" height="16" fill="#fff"><use xlinkHref="#home"></use></svg>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboards" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16" fill="#fff"><use xlinkHref="#speedometer2"></use></svg>
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to="/map" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16" fill="#fff"><use xlinkHref="#map-icon"></use></svg>
                Map (micro front end)
            </NavLink>
        </li>
        <li>
            <NavLink to="/products" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16" fill="#fff"><use xlinkHref="#grid"></use></svg>
                Products
            </NavLink>
        </li>
        <li>
            <NavLink to="/customers" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16" fill="#fff"><use xlinkHref="#people-circle"></use></svg>
                Customers
            </NavLink>
        </li>
        </ul>
        <hr />
        <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://thispersondoesnotexist.com/image" alt="Avatar" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
        </div>
    </div>
);

export default Sidebar;
