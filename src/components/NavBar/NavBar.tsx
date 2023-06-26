import './NavBar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex flex-between">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
              <div className="navbar-title">
                <span className="text-regal-blue">DEVEL</span>
                <span className="text-light-blue">CODE</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-blue"> </div>
    </nav>
  );
}
