import { Link } from "react-router";
import { useSelector} from "react-redux";
import Logout from "../Logout/Logout.jsx";

const Navigator = () => {

    const Loggin = useSelector((state) => state.form.isLoggin);
    const user = useSelector((state) => state.form.dataForm.username);
    const email = useSelector((state) => state.form.dataForm.email);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">LagindPage</Link>
            <Link to="/Login" className="nav-link">Login</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            {Loggin && 
            <>
                <p className="nav-welcome">Bienvenido, {user} | {email}</p>
                <Logout></Logout>
            </>
            }

        </nav>
    );
};

export default Navigator;
