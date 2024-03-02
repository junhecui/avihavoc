import '../styles/Map.css';
import Globe from 'react-globe.gl';

export function Map() {
  return (
    <div className="map-container">
      <Globe height={window.innerHeight - 101} />
    </div>
  );
}
