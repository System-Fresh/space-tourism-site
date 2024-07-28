import "./technology.css";
import data from "../../data.json"

import techBackground from "../../assets/technology/background-technology-desktop.jpg"
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Technology = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${techBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.backgroundImage = ''; // Reset on unmount
    };
  }, []);
  let arrayTech = data.technology
    const desiredTech = arrayTech.find(item => item.id === 3);
    console.log(desiredTech)
  return (

    <div className="tech">
      {
        desiredTech && (
          <div className="d-home">
            <div className="left">
              <div className="write">
              <span>03</span>
              <h4>Space Launch 101</h4>
              </div>
              <div className="techSpace">
                <ul>
               <NavLink style={({isActive}) =>
          isActive
          ? {
            height: '60px',
            width: '60px',
            backgroundColor: '#fff',
            borderRadius: '50%',
             textAlign: "center",
            alignContent: "center",
            textDecoration: "None",
            fontSize: "1.5rem",
            color: "black"
          }
          : {backgroundColor: '#9f9d9d', height: '60px', width: '60px', borderRadius: '50%', textAlign: "center",
            alignContent: "center",
            textDecoration: "None",
            fontSize: "1.5rem",
            color: "black"}
        } to='/technology'>1</NavLink>
           <NavLink style={({isActive}) =>
          isActive
          ? {
            height: '60px',
            width: '60px',
            backgroundColor: '#fff',
            borderRadius: '50%',
             textAlign: "center",
            alignContent: "center",
            textDecoration: "None",
            fontSize: "1.5rem",
            color: "black"
          }
          : {backgroundColor: '#9f9d9d', height: '60px', width: '60px', borderRadius: '50%',  textAlign: "center",
            alignContent: "center",
            textDecoration: "None",
            fontSize: "1.5rem",
            color: "black"}
        } to='/TechTwo'>2</NavLink>
           <NavLink style={({isActive}) =>
          isActive
          ? {
            height: '60px',
            width: '60px',
            backgroundColor: '#fff',
            borderRadius: '50%',
             textAlign: "center",
            alignContent: "center",
            textDecoration: "None",
            fontSize: "1.5rem",
            color: "black"
          }
          : {backgroundColor: '#9f9d9d', height: '60px', width: '60px', borderRadius: '50%',  textAlign: "center",
            alignContent: "center",
            textDecoration: "None",
            fontSize: "1.5rem",
            color: "black"}
        } to='/TechThree'>3</NavLink>

                </ul>
              <div className="techWrite">
                <h6 className="term">The Terminology.....</h6>
                <h3 className="techName">{desiredTech.name}</h3>
                <p className="techDesc">{desiredTech.description}</p>
              </div>
              </div>
            </div>
            <div className="right">
              <img src={desiredTech.images.portrait} alt={desiredTech.name} />
            </div>

          </div>
        )
      }
    </div>
  );
};

export default Technology;
