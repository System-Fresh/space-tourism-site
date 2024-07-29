import React, { useEffect } from 'react'
import mainBackground from "../../assets/destination/background-destination-desktop.jpg";
import marsPng from "../../assets/destination/image-mars.png"

import data from "../../data.json"
import { NavLink, Link } from "react-router-dom";

const DestinationMars = () => {

     useEffect(() => {
    document.body.style.backgroundImage = `url(${mainBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.backgroundImage = ''; // Reset on unmount
    };
  }, []);

     let arrayDestination2 = data.destinations
    const desiredMars = arrayDestination2.find(item => item.id === 2)
  return (
    <>
       { desiredMars && (
      <div className="d-home">
        <div className="left">
          <div className="write">
            <span>01</span>
            <h4>Pick your destination</h4>
          </div>
          <div className="d-img">
            <img src={marsPng} alt={desiredMars.name}  />
            {/* <img src={desiredMars.images.png} alt={desiredMars.name}  /> */}
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
            <h1>{desiredMars.name}</h1>
            <p>
              {desiredMars.description}
            </p>
            <hr />

            <div className="distance">
              <div className="de-left">
                <span className="av">Avg. distance</span>
                <span className="av-num">{desiredMars.distance}</span>
              </div>
              <div className="de-right">
                <span className="av">Est. travel time</span>
                <span className="av-num">{desiredMars.travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default DestinationMars