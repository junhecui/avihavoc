import '../styles/Button.css';
import { useNavigate } from 'react-router-dom';

export function Button({ text, icon, to }) {
  const navigate = useNavigate();
  return (
    <div className="button" onClick={() => navigate(to)}>
      {icon ?? undefined}
      <p>{text}</p>
    </div>
  );
}
