import { useState, useEffect, useRef } from 'react';
import '../styles/Landing.css';
import Globe from 'react-globe.gl';

export function Landing() {
  const globeEl = useRef();
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  let resize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    const globe = globeEl.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1.5;
    globeEl.current.controls().enableZoom = false;

    let listener = window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <div className="landing">
      <div className="landing-container">
        <p className="landing-bigheader">AviHavoc</p>
        <p className="landing-littlecaption">
          Our Mission — Bringing to light the disastrous emissions caused by the
          Aviation Industry.
        </p>
      </div>
      <div className="landing-globe">
        <Globe
          ref={globeEl}
          width={size.width}
          height={size.height * 3}
          backgroundColor="white"
          atmosphereColor="#f0f2f5"
          onZoom={() => {
            return false;
          }}
          globeImageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/World_map_geographical.jpg/2560px-World_map_geographical.jpg"
        ></Globe>
      </div>
    </div>
  );
}
