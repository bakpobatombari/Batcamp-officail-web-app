import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from './assets/images/batcamp 2.0.png'

const Navbar = () => {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#4ac99a63") : setnavColor("transparent");
      window.scrollY > 10 ? setnavSize("4rem") : setnavSize("7rem");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
  
    return ( 
        <> 
        <nav className="navbar position-fixed container-fluid"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}>
            <div className="logo">
                <img src={logo} className='pic-logo' alt='Logo' />
            <h1>Batcamp Global Servcies</h1>
            </div>
            <div className="links">
                <Link to="/" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/Courses" className='link'>Courses</Link>
                {/* <button className='col-md-4 log-but'><Link to='/login'>LOGIN</Link></button> */}
            </div>
        </nav>
        </>
    );
}
 
export default Navbar;