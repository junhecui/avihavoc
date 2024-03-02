import '../styles/Button.css';

export function Button({ text, icon }) {
  return (
    <div className="button">
      {icon ?? undefined}
      <p>{text}</p>
    </div>
  );
}
