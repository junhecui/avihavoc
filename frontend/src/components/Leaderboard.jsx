import '../styles/Leaderboard.css';
import { Rank } from './Rank';

export function Leaderboard({ data }) {
  return (
    <div className="leaderboard">
      <p className="leaderboard-heading">Leaderboard</p>
      <p className="leaderboard-description">
        The ranking of the Top 10 highest{'\n'}carbon dioxide emissions, by
        airline.
      </p>
      {data
        .sort((a, b) => b.emissions - a.emissions)
        .slice(0, 10)
        .map(({ name, id, emissions }, index) => (
          <Rank
            key={index}
            rank={index + 1}
            name={name}
            id={id}
            emission={emissions.toFixed(2)}
          />
        ))}
    </div>
  );
}
