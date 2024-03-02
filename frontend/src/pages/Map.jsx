import '../styles/Map.css';
import Globe from 'react-globe.gl';

export function Map() {
  return (
    <div
      className="map-container"
      style={{
        backgroundColor: 'red',
      }}
    >
      <Globe
        width={window.innerWidth - 500}
        height={window.innerHeight - 101}
        backgroundColor="#fff"
        atmosphereColor="#f0f2f5"
        globeImageUrl="https://images-ext-1.discordapp.net/external/NTwctEwI8uOjJ1w3baxx2ZifmK8NcV3t3aqHhuKe7FE/https/upload.wikimedia.org/wikipedia/commons/thumb/e/eb/World_map_geographical.jpg/2560px-World_map_geographical.jpg?format=webp&width=2700&height=1350"
      />
    </div>
  );
}
