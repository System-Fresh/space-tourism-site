// import React from 'react'
import { useEffect } from "react";
import mainBackground from "../../assets/destination/background-destination-desktop.jpg";

import data from "../../data.json"
import { NavLink, Link } from "react-router-dom";


const DestinationTitan = () => {

    useEffect(() => {
    document.body.style.backgroundImage = `url(${mainBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.backgroundImage = ''; // Reset on unmount
    };
  }, []);
    let arrayDestination4 = data.destinations
    const desiredTitan = arrayDestination4.find(item => item.id === 4)
    console.log(desiredTitan.images.png)

  return (
    <>
    { desiredTitan && (
      <div className="d-home">
        <div className="left">
          <div className="write">
            <span>01</span>
            <h4>Pick your destination</h4>
          </div>
          <div className="d-img">
            <img src={desiredTitan.images.png} alt={desiredTitan.name}  />
          </div>
        </div>
        <div className="right">
            <ul>
            <NavLink style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.7rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.7rem' }
        } to='/destination' end
             >Moon</NavLink>

            <NavLink  style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.7rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.7rem' }
        }  to='/Mars'
             >Mars</NavLink>

            <NavLink style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.7rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.7rem' }
        } to='/Europa'
             >Europa</NavLink>

            <NavLink style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.7rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.7rem' }
        } to='/Titan'
             >Titan</NavLink>
          </ul>
          <div className="active">
            <h1>{desiredTitan.name}</h1>
            <p>
              {desiredTitan.description}
            </p>
            <hr />

            <div className="distance">
              <div className="de-left">
                <span className="av">Avg. distance</span>
                <span className="av-num">{desiredTitan.distance}</span>
              </div>
              <div className="de-right">
                <span className="av">Est. travel time</span>
                <span className="av-num">{desiredTitan.travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default DestinationTitan