import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Globe } from '../assets/globe.svg';
import { ReactComponent as Code } from '../assets/code.svg';
import { Button } from './Button';

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <p className="header-logo" onClick={() => navigate('/')}>
        <span>Flight</span>Track
      </p>
      <div className="header-navigator">
        {[
          {
            text: 'Flight Map',
            icon: <Globe />,
            to: '/map',
          },
          {
            text: 'About Us',
            icon: <Code />,
            to: '/about',
          },
        ].map(({ text, icon, to }, index) => (
          <Button key={index} text={text} icon={icon} to={to} />
        ))}
      </div>
    </div>
  );
}
