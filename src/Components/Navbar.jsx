import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import cheese from '../Local-storage/cheese.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <h1 className='navbar-brand'><Link to="/" className="nav-link">
          <img src="https://images.cooltext.com/5539088.png" width="60%" height="100%" alt="logo" />
        </Link></h1>
        <ul class="navbar-nav">
          <li className="nav-item"> <Link to="/" className="nav-link">
            <span><img className="photo" src={cheese} /></span>
            <span>All of your cheets</span>
          </Link></li>
          <li className="nav-item"> <Link to="/inputcheats" className="nav-link">
            <span><img src="https://img.icons8.com/emoji/50/000000/cheese-wedge-emoji.png" /></span>
            <span>Add a cheet</span>
          </Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;