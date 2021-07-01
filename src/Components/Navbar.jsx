import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <h1 className='navbar-brand'>CODING CHEETSHEETS🧀</h1>
          <ul class="navbar-nav">
            <li className="nav-item"> <Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"> <Link to="/inputcheats" className="nav-link">Input Cheats</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;