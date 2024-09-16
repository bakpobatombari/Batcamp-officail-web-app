import { useState} from 'react';
import { useHistory } from 'react-router-dom';
import './assets/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
const Footer = () => {
   const history = useHistory();
   const [isPending, setIsPending] = useState(false);
   const [subscribed, setSubscribed] = useState(false);
   const [email, setEmail] = useState('');
   const handleFooter = (e) => {
      let btn = document.getElementById('subber');
      e.preventDefault();
      setIsPending(true);
      setTimeout(()=>{
          history.push('/')
          setIsPending(false);
          setSubscribed(true)
          btn.style.display ='none';
      },1000)
   };
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
            <form onSubmit={handleFooter}>
               {!subscribed &&<p style={
                  {
                  fontFamily: 'serif'
                  }
                  }>Enter Email for more info</p>}
                  {subscribed && <p>{email} has successfully subscibed To Batcamp</p>}
               <div className="row">
               {!isPending && !subscribed &&<input type="email" className='col-md-8' name="Email" required onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Enter email'/>}
               {!isPending && subscribed &&<input type="email" className='col-md-8' value={email} disabled name="Email" id='email' placeholder='Enter email'/>}
               {!isPending && !subscribed && <button className='col-md-4' id='subber'>Submit</button>}
               {isPending && <button className='col-md-4' disabled>Submiting</button>}
               {subscribed && <button className='col-md-4' disabled>subscribed</button>}
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
            <p><Link to="/RContact"style={{
               fontFamily: "serif",
               textDecoration: "none",
               color: "white"
            }
            }>Contact</Link></p>
           </div>
           </div>
           </div>
        </footer>
        </>
     );
}
 
export default Footer;