import '../styles/Header.css';
import { ReactComponent as Globe } from '../assets/globe.svg';
import { ReactComponent as Code } from '../assets/code.svg';
import { Button } from './Button';

export function Header() {
  return (
    <div className="header">
      <p className="logo">
        <span>Flight</span>Track
      </p>
      <div className="navigator">
        {[
          {
            text: 'Flight Map',
            icon: <Globe />,
            to: '/map',
          },
          {
            text: 'Credit',
            icon: <Code />,
            to: '/credit',
          },
        ].map(({ text, icon, to }) => (
          <Button key={text} text={text} icon={icon} to={to} />
        ))}
      </div>
    </div>
  );
}
