import "./home.css";
import MoonBackgorund from "../../assets/home/background-home-desktop.jpg";
import homeBackground from "../../assets/home/background-home-desktop.jpg"
import { useEffect } from "react";

const Home = () => {
     useEffect(() => {
    document.body.style.backgroundImage = `url(${homeBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.backgroundImage = ''; // Reset on unmount
    };
  }, []);
  return (
    <div className="home-home">
    <div className="h-home">
      <div className="left">
        <h4>so, you want to travel to</h4>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="right">
        <h4>Explore</h4>
      </div>
      
    </div>

    </div>
  );
};

export default Home;
