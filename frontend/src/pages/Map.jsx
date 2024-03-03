import { useEffect, useState } from 'react';
import { Leaderboard } from '../components/Leaderboard';
import '../styles/Map.css';
import Globe from 'react-globe.gl';
import axios from 'axios';

export function Map() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [data, setData] = useState([]);

  const airplane = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.0809 13.7263L17.011 20.9393L17.3309 21.5263L17.8036 21.0536L19.2036 19.6536L19.4052 19.452L19.3344 19.1758L16.9552 9.90199L20.6536 6.2036C21.0368 5.82037 21.225 5.33623 21.225 4.78755C21.225 4.23887 21.0368 3.75473 20.6536 3.3715C20.2704 2.98826 19.7862 2.80005 19.2375 2.80005C18.6894 2.80005 18.2057 2.98787 17.8227 3.37028C17.8223 3.37069 17.8219 3.37109 17.8215 3.3715L14.1002 7.04541L4.8243 4.66573L4.54811 4.59488L4.3465 4.7965L2.9465 6.1965L2.47376 6.66923L3.06082 6.9891L10.2738 10.9192L7.02265 14.1703L4.76937 13.8549L4.52265 13.8203L4.3465 13.9965L3.2965 15.0465L2.82452 15.5185L3.41014 15.8387L6.48164 17.5185L8.16136 20.59L8.48163 21.1756L8.9536 20.7036L10.0036 19.6536L10.1798 19.4774L10.1452 19.2307L9.82976 16.9774L13.0809 13.7263Z" fill="white" stroke="black"/>
  </svg>
  `;

  let resize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    let listener = window.addEventListener('resize', resize);
    let fixedData = data;

    setInterval(() => {
      fixedData = fixedData.map((data) => ({
        name: data.name,
        id: data.id,
        lat: data.lat,
        lng: data.lng,
        emissions: data.emissions + Math.random() * 0.1,
      }));

      setData(fixedData);
    }, 1000);

    axios.get('data.json').then((res) => {
      const apiData = res.data;

      setData(apiData);
      fixedData = apiData;
    });

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <div className="map-container">
      <Globe
        width={size.width - 525}
        height={size.height - 101}
        htmlElementsData={data}
        htmlElement={(d) => {
          const el = document.createElement('svg');
          el.innerHTML = airplane;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;

          el.style['pointer-events'] = 'auto';
          el.style.cursor = 'pointer';
          el.onclick = () => alert(`${d.name} — ${d.emissions.toFixed(2)}kg`);
          return el;
        }}
        backgroundColor="#fff"
        atmosphereColor="#f0f2f5"
        globeImageUrl="https://images-ext-1.discordapp.net/external/NTwctEwI8uOjJ1w3baxx2ZifmK8NcV3t3aqHhuKe7FE/https/upload.wikimedia.org/wikipedia/commons/thumb/e/eb/World_map_geographical.jpg/2560px-World_map_geographical.jpg?format=webp&width=2700&height=1350"
      />
      <Leaderboard data={data} />
    </div>
  );
}
