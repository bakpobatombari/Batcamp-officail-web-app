import './assets/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
const Footer = () => {
    return ( 
        <>
        <footer className="footer container-fluid">
         <div className="container">
            <center>
               <h2>Batcamp Global Services</h2>
               <div className="hr-line col-md-4"></div>
            </center>
           <div className="row">
           <div className="col-md-3">
            <form action="">
               <p style={
                  {
                  fontFamily: 'serif'
                  }
                  }>Enter Email for more info</p>
               <div className="row">
               <input type="email" className='col-md-8' name="Email" placeholder='Enter email' id="Email" />
               <button className='col-md-4'>Submit</button>
               </div>
            </form>
           </div>
           <div className="col-md-6" style={
            {
               fontFamily: "serif"
            }
           }>
          <center>
            <h3>Welcome to Batcamp</h3>
               <p style={{marginBottom: "-0.1rem"}}>Email : batombari@gmail.com</p>
               <p style={{marginBottom: "-0.1rem"}}>Phone : +234 7048142915</p>
               <p>Location : R7 Fulton Avenue, Unn</p>
               </center>
           </div>
           <div className="col-md-3">
            <p><Link to="/" style={{
               fontFamily: "serif",
               textDecoration: "none",
               color: "white"
            }
            }>Home</Link></p>
            <p><Link to="/about"style={{
               fontFamily: "serif",
               textDecoration: "none",
               color: "white"
            }
            }>About</Link></p>
            <p><Link to="/courses"style={{
               fontFamily: "serif",
               textDecoration: "none",
               color: "white"
            }
            }>Courses</Link></p>
           </div>
           </div>
           </div>
        </footer>
        </>
     );
}
 
export default Footer;