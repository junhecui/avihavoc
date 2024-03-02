import { useEffect, useState } from 'react';
import { Leaderboard } from '../components/Leaderboard';
import '../styles/Map.css';
import Globe from 'react-globe.gl';

export function Map() {
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
    let listener = window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <div className="map-container">
      <Globe
        width={size.width - 525}
        height={size.height - 101}
        backgroundColor="#fff"
        atmosphereColor="#f0f2f5"
        globeImageUrl="https://images-ext-1.discordapp.net/external/NTwctEwI8uOjJ1w3baxx2ZifmK8NcV3t3aqHhuKe7FE/https/upload.wikimedia.org/wikipedia/commons/thumb/e/eb/World_map_geographical.jpg/2560px-World_map_geographical.jpg?format=webp&width=2700&height=1350"
      />
      <Leaderboard />
    </div>
  );
}
