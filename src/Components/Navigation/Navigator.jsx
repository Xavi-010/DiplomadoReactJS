import { Link } from "react-router" 

const Navigator = ()=>{
    return(
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Login" className="nav-link">Login</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
        </nav>
    );
};

export default Navigator;