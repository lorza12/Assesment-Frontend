import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header2">
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> about </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
