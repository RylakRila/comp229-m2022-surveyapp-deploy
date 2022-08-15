import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { getCurrentUser, logout } from '../service/auth-api';
function Navb() {
   const [isLoggedIn, setIsLoggedIn] = useState(false); // user is not logged in by default

   useEffect(() => {
      setIsLoggedIn(getCurrentUser());
      console.log(getCurrentUser());
   }, []);

   function toggleLogin() {
      if (isLoggedIn) {
         return (
            <>
               <li className="nav-item">
                  <NavLink
                     to={'/allsurvey'}
                     className="nav-link"
                     aria-current="page"
                  >
                     {' '}
                     <i className="fa-solid fa-signs-post fa-lg"></i> My Surveys{' '}
                     <span>
                       
                     </span>
                  </NavLink>
               </li>
               <li id="user" className="nav-item">
                    
                   hello, {getCurrentUser().user.username}
               </li>
               <li className="nav-item">
                  <NavLink
                     to={'/logout'}
                     className="nav-link"
                     aria-current="page"
                  >
                     <i className="fa-solid fa-right-from-bracket fa-lg"></i>{' '}
                     Logout
                  </NavLink>
               </li>
            </>
         );
      } else {
         return (
            <li className="nav-item">
               <NavLink
                  to={'/adduser'}
                  className="nav-link"
                  aria-current="page"
               >
                  <i className="fa-solid fa-right-to-bracket fa-lg"></i> Login
               </NavLink>
            </li>
         );
      }
   }

   return (
      <nav
         id="navbar"
         className="navbar navbar-expand-lg navbar-dark bg-primary"
      >
         <div id="logo" className="container-fluid">
            <NavLink to={'/'} className="navbar-brand">
            <img
          src={require("./grouplogo.png")}
          width="30"
              height="30"
              className="d-inline-block align-top"
          alt="group logo"
           /> Centennial Survey
            </NavLink>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink
                        to={'/home'}
                        className="nav-link"
                        aria-current="page"
                     >
                        <i className="fa-solid fa-house-signal fa-lg"></i> Home
                     </NavLink>
                  </li>
                  {toggleLogin()}
               </ul>
            </div>
         </div>
      </nav>
   );
}
export default Navb;
