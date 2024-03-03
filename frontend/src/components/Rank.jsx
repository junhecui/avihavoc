import '../styles/Rank.css';

export function Rank({ rank, name, id, emission }) {
  let colours = {
    gold: '#eba800',
    silver: '#777777',
    bronze: '#996946',
    white: '#ffffff',
    black: '#000000',
  };

  let getColour = (rank, type) => {
    return type === 0
      ? rank === 1
        ? `${colours.gold}30`
        : rank === 2
        ? `${colours.silver}30`
        : rank === 3
        ? `${colours.bronze}30`
        : `${colours.white}`
      : rank === 1
      ? `${colours.gold}`
      : rank === 2
      ? `${colours.silver}`
      : rank === 3
      ? `${colours.bronze}`
      : `${colours.black}`;
  };

  return (
    <div
      className="rank"
      style={{
        backgroundColor: `${getColour(rank, 0)}`,
      }}
    >
      <pre
        className="text"
        style={{
          color: getColour(rank),
        }}
      >
        {rank}. {name} — {emission}kg
      </pre>
    </div>
  );
}
