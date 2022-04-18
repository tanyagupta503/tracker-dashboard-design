import React from 'react';
import './Sidebar.css';
import logo from '../../images/logo.png';
import listCheck from '../../images/list-check.png';
import fileCertificate from '../../images/file-certificate.png';
import scan from '../../images/scan.png';
import lockAccess from '../../images/lock-access.png';
import fileSymlink from '../../images/file-symlink.png';
import notification from '../../images/notification.png';
import chartPie from '../../images/chart-pie.png';
import dashboard from '../../images/dashboard.png';
import fileInfo from '../../images/file-info.png';
import logout from '../../images/logout.png';
// import { Navbar, Container, Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div id='sidebarMenu'>
      <div className='navbar-container'>
        <span className='brand-logo'>
          <img src={logo} className='logo' alt='Borneo logo' />
        </span>
        <div className='nav-list'>
          <div className='nav-item'>
            <img src={listCheck} width='20' height='20' alt='list-check' />
          </div>
          <div className='active nav-item'>
            <img src={dashboard} width='20' height='20' alt='dashboard' />
          </div>
          <div className='nav-item'>
            <img
              src={fileCertificate}
              width='20'
              height='20'
              alt='file-certificate'
            />
          </div>
          <div className='nav-item'>
            <img src={scan} width='20' height='20' alt='scan' />
          </div>
          <div className='nav-item'>
            <img src={lockAccess} width='20' height='20' alt='lock-access' />
          </div>
          <div className='nav-item'>
            <img src={fileSymlink} width='20' height='20' alt='file-symlink' />
          </div>
          <div className='nav-item'>
            <img src={notification} width='20' height='20' alt='notification' />
          </div>
          <div className='nav-item'>
            <img src={chartPie} width='20' height='20' alt='chart-pie' />
          </div>
        </div>
        <div className='bottom-nav'>
          <div className='nav-item'>
            <img src={fileInfo} width='20' height='20' alt='scan' />
          </div>
          <div className='nav-item'>
            <img src={logout} width='20' height='20' alt='lock-access' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
