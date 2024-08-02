import { Link } from 'react-router-dom'
import logo from './assets/images/batcamp 2.0.png'

const Navbar = () => {
    return ( 
        <> 
        <nav className="navbar position-fixed container-fluid">
            <div className="logo">
                <img src={logo} className='pic-logo' alt='Logo' />
            <h1>Batcamp Global Servcies</h1>
            </div>
            <div className="links">
                <Link to="/" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/Contact" className='link'>Contact</Link>
                {/* <button className='col-md-4 log-but'><Link to='/login'>LOGIN</Link></button> */}
            </div>
        </nav>
        </>
    );
}
 
export default Navbar;