import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby small batch cronut paleo sriracha fit, farm-to-table
            pinterest typewriter iPhone keffiyeh kombucha tbh blog lyft. Unicorn
            mustache thundercats pitchfork kinfolk viral semiotics pabst food
            truck meh. Polaroid kombucha semiotics vegan shabby chic
            sustainable. Vexillologist kombucha vice chartreuse readymade
            pitchfork.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
