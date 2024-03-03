import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles/Landing.css';
import Globe from 'react-globe.gl';

export function Landing() {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1.5;
    globeEl.current.controls().enableZoom = false;

    // Add clouds sphere
    const CLOUDS_IMG_URL = './clouds.png'; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
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
          width={window.innerWidth}
          height={window.innerHeight * 3}
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
