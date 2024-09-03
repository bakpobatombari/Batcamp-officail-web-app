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
            <span className='openNav' onClick={()=>{
              document.querySelector('.sidenav').className = 'sidenav width show';
            }}>&#9776;</span>
            <div className="links">
                <Link to="/" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/Courses" className='link'>Courses</Link>
                <Link to="/Rcontact" className='link'>Contact</Link> 
    
            </div>
        </nav>
        <div className="sidenav">
          <span onClick={()=>{

document.querySelector('.sidenav').classList = 'hide sidenav';
          }}>&times;</span>
          <div className="s-link">
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Rcontact'>Contact</Link>
           <Link to='/database'>DB</Link>
        </div>
        </div>
        </>
    );
}
 
export default Navbar;