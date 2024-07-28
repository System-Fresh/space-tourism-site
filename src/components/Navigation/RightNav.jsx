import React from 'react'
import "./navigation.css";
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const UL = styled.div`
    @media (max-width: 768px)  {
     ul{
      flex-flow: column nowrap;
      position: fixed;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translate(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      background: #4d7399;
    }
}


`

const RightNav = ({ open, closeMenu }) => {
  return (
     <UL open={open}>

      <div className="links">
        <span className="line"></span>
        <ul>
          <li onClick={closeMenu}>
            <Link  
        to="/"
        style={{ textDecoration: "none", color: "#d0cdcd" }}
        
         
             >
              <span style={{ color: "#fff" }}>00</span> Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              style={{ textDecoration: "none", color: "#d0cdcd" }}
              to="/destination"
            >
              <span style={{ color: "#fff" }}>01</span> Destination
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              style={{ textDecoration: "none", color: "#d0cdcd" }}
              to="/crew"
            >
              <span style={{ color: "#fff" }}>02</span> Crew
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              style={{ textDecoration: "none", color: "#d0cdcd" }}
              to="/technology"
            >
              <span style={{ color: "#fff" }}>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>

     </UL>

    
    
  )
}

export default RightNav