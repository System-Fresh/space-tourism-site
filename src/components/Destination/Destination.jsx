import "./destination.css";
import mainBackground from "../../assets/destination/background-destination-desktop.jpg";
import moonPng from "../../assets/destination/image-moon.png"
import data from "../../data.json"
import { Link, NavLink } from "react-router-dom";
// import styles from "./styles.module.css";
import { useEffect } from "react";

// import { useEffect, useState}  from "react";

const Destination = (props) => {

   useEffect(() => {
    document.body.style.backgroundImage = `url(${mainBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.backgroundImage = ''; // Reset on unmount
    };
  }, []);
  let arrayDestination = data.destinations

  const desiredMoon = arrayDestination.find(item => item.id === 1);
  console.log(desiredMoon.images.png)


  return (
    <main className="dest-home">

    { desiredMoon && (
      <div className="d-home">
        <div className="left">
          <div className="write">
            <span>01</span>
            <h4>Pick your destination </h4>
          </div>
          <div className="d-img">
            <img src={moonPng} alt={desiredMoon.name} />
            {/* <img src={desiredMoon.images.png} alt={desiredMoon.name} /> */}
          </div>
        </div>
        <div className="right">
          <ul>
            <NavLink style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.4rem' }
        } to='/destination' 
             >Moon</NavLink>

            <NavLink  style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.4rem' }
        }  to='/Mars'
             >Mars</NavLink>

            <NavLink style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.4rem' }
        } to='/Europa'
             >Europa</NavLink>

            <NavLink style={({isActive}) => 
          isActive  
          ? {
            color: '#d0cdcd',
                textDecoration: 'underline',
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
          } 
          : { color: '#d0cdcd', textDecoration: 'none', fontSize: '1.4rem' }
        } to='/Titan'
             >Titan</NavLink>
          </ul>
          <div className="active">
            <h1>{desiredMoon.name}</h1>
            <p>
              {desiredMoon.description}
            </p>
            <hr />

            <div className="distance">
              <div className="de-left">
                <span className="av">Avg. distance</span>
                <span className="av-num">{desiredMoon.distance}</span>
              </div>
              <div className="de-right">
                <span className="av">Est. travel time</span>
                <span className="av-num">{desiredMoon.travel}</span>
              </div>
            </div>
          </div>
        </div>
    
       
       
      </div>
    )}
    {/* {desiredMoon && Object.values(desiredMoon).map(item => (
      
     
      <div className="d-home" key={item.id}>
        <div className="left">
          <div className="write">
            <span>{item.id}</span>
          <h4>Pick your destination {item.name}</h4>
          </div>

        </div>




       

      </div>
    ))} */}
    </main>
  );
};

export default Destination;
