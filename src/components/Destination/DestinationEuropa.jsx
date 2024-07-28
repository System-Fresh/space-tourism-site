import React, { useEffect } from 'react'
import mainBackground from "../../assets/destination/background-destination-desktop.jpg";

import data from "../../data.json"
import { NavLink } from 'react-router-dom'


const DestinationEuropa = (props) => {

     useEffect(() => {
    document.body.style.backgroundImage = `url(${mainBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.backgroundImage = ''; // Reset on unmount
    };
  }, []);

      let arrayDestination3 = data.destinations
    const desiredEuropa = arrayDestination3.find(item => item.id === 3)
    console.log(desiredEuropa)
  return (
    <>
      { desiredEuropa && (
      <div className="d-home">
        <div className="left">
          <div className="write">
            <span>01</span>
            <h4>Pick your destination </h4>
          </div>
          <div className="d-img">
            <img src={desiredEuropa.images.png} alt={desiredEuropa.name} />
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
            <h1>{desiredEuropa.name}</h1>
            <p>
              {desiredEuropa.description}
            </p>
            <hr />

            <div className="distance">
              <div className="de-left">
                <span className="av">Avg. distance</span>
                <span className="av-num">{desiredEuropa.distance}</span>
              </div>
              <div className="de-right">
                <span className="av">Est. travel time</span>
                <span className="av-num">{desiredEuropa.travel}</span>
              </div>
            </div>
          </div>
        </div>
    
       
       
      </div>
    )}
    </>
  )
}

export default DestinationEuropa