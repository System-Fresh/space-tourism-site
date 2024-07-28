import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;

    z-index: 20;
    display: none;

    @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    }

    div{
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ open }) => open ? '#ccc' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        
    }

    }

`;

const Burger = () => {
    const [open, setOpen] = useState(false)
    // checking body
        const handleCloseMenu = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.burger') && !event.target.closest('.menu')) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open]);




    // checking body
  return (
    <>
    <StyledBurger className="burger" open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
    </StyledBurger>
    <div className="menu">
    <RightNav open={open} closeMenu={handleCloseMenu}/>

    </div>
    </>
  )
}

export default Burger