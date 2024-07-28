import "./destination.css";
import Mars from "../../assets/destination/image-mars.png";
import data from "../../data.json";

const Destination = () => {
  const listClick = () => {
    console.log("You will be great");
  };
  return (
    <div className="d-home">
      <div className="left">
        <div className="write">
          <span>01 </span>
          <h4>Pick your destination Moon</h4>
        </div>
        <div className="d-img">
          <img src={Mars} alt="" />
        </div>
      </div>
      <div className="right">
        <ul>
          <li onClick={listClick}>Moon</li>
          <li onClick={listClick}>Mars</li>
          <li onClick={listClick}>Europa</li>
          <li onClick={listClick}>Titan</li>
        </ul>
        <div className="active">
          <h1>mars</h1>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!{" "}
          </p>
          <hr />

          <div className="distance">
            <div className="de-left">
              <span className="av">Avg. distance</span>
              <span className="av-num">225 mil. km</span>
            </div>
            <div className="de-right">
              <span className="av">Est. travel time</span>
              <span className="av-num">9 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
