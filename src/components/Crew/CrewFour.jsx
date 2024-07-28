import "./crew.css";
import crewBackground from "../../assets/crew/background-crew-desktop.jpg";

import data from "../../data.json"
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Crew = () => {

    useEffect(() => {
    document.body.style.backgroundImage = `url(${crewBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.backgroundImage = ''; // Reset on unmount
    };
  }, []);
  let arrayCrew = data.crew
    const desiredCrew = arrayCrew.find(item => item.id === 4);
    console.log(desiredCrew)
 

  return (
  <div className="crew">
  {
    desiredCrew && (
     

      <div className="d-home">
        <div className="left">
          <div className="write">
            <span>02</span>
            <h4>MEET YOUR CREW</h4>
          </div>
          <h3 className="crew-role">{desiredCrew.role}</h3>
          <h1 className="crew-name">{desiredCrew.name}</h1>
          <p className="crew-bio">{desiredCrew.bio}</p>

          <ul className="dot">
          <NavLink style={({isActive}) =>
          isActive
          ? {
            height: '30px',
            width: '30px',
            backgroundColor: '#fff',
            borderRadius: '50%'
          }
          : {backgroundColor: '#9f9d9d', height: '30px', width: '30px', borderRadius: '50%'}
        } to='/crew'></NavLink>
          <NavLink style={({isActive}) =>
          isActive
          ? {
            height: '30px',
            width: '30px',
            backgroundColor: '#fff',
            borderRadius: '50%'
          }
          : {backgroundColor: '#9f9d9d', height: '30px', width: '30px', borderRadius: '50%'}
        } to='/Ctwo'></NavLink>
          <NavLink style={({isActive}) =>
          isActive
          ? {
            height: '30px',
            width: '30px',
            backgroundColor: '#fff',
            borderRadius: '50%'
          }
          : {backgroundColor: '#9f9d9d', height: '30px', width: '30px', borderRadius: '50%'}
        } to='/Cthree'></NavLink>
          <NavLink style={({isActive}) =>
          isActive
          ? {
            height: '30px',
            width: '30px',
            backgroundColor: '#fff',
            borderRadius: '50%'
          }
          : {backgroundColor: '#9f9d9d', height: '30px', width: '30px', borderRadius: '50%'}
        } to='/Cfour'></NavLink>
          {/* <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span> */}

          </ul>


        </div>
        <div className="right">
          <img src={desiredCrew.images.png} alt={desiredCrew.name} />
        </div>
      </div>
      
    )
  }
  
  </div>

  )
  ;
};

export default Crew;
