import '../styles/Leaderboard.css';
import { Rank } from './Rank';

export function Leaderboard() {
  return (
    <div className="leaderboard">
      <p className="leaderboard-heading">Leaderboard</p>
      <p className="leaderboard-description">
        Lorem ipsum dolor sit amet,{'\n'}con secteturadipiscing elit, sed do
        eiusmod{'\n'}tempor incididunt ut
      </p>
      {[
        {
          name: 'Airline 1',
          id: 1,
          emission: 100,
        },
        { name: 'Airline 2', id: 2, emission: 61 },
        { name: 'Airline 34', id: 34, emission: 41 },
        { name: 'Airline 43', id: 43, emission: 12 },
        { name: 'Airline 12', id: 12, emission: 9 },
        { name: 'Airline 4', id: 4, emission: 3 },
        { name: 'Airline 3', id: 3, emission: 2 },
        { name: 'Airline 22', id: 22, emission: 2 },
        { name: 'Airline 51', id: 51, emission: 2 },
        { name: 'Airline 111', id: 111, emission: 1 },
      ].map(({ name, id, emission }, index) => (
        <Rank
          key={index}
          rank={index + 1}
          name={name}
          id={id}
          emission={emission}
        />
      ))}
    </div>
  );
}
