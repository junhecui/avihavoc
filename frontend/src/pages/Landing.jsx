import '../styles/Landing.css';
import Globe from 'react-globe.gl';

export function Landing() {
  return (
    <div className="landing">
      <div className="landing-container">
        <p className="landing-bigheader">FlightTrack</p>
        <p className="landing-littlecaption">
          Our Mission: Bringing to light the disastrous emissions caused by the
          Aviation Industry
        </p>
      </div>
      <div className="landing-globe">
        <Globe
          width={window.innerWidth}
          height={1100}
          backgroundColor="white"
          atmosphereColor="#f0f2f5"
          globeImageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/World_map_geographical.jpg/2560px-World_map_geographical.jpg"
        ></Globe>
      </div>
    </div>
  );
}
