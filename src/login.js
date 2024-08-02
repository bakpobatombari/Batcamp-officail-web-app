import './assets/css/bootstrap.min.css';
import './login.css'

const Login = () => {
    return ( 
        <>
        <div className="body">
          <div className="login-container">
            <form action="./">
            <center>
            <h1>Login</h1>
            <div className="hr-line col-md-2"></div>
            </center>
            <label htmlFor="name">
              Username:
            </label>
            <input type="text" name='name' placeholder='Username' className='col-md-5 username' required/>
            <label htmlFor="password">
              Password:
            </label>
            <input type="password" name='password' placeholder='Password' className='col-md-5' required/>
            <center><button className="col-md-2">submit</button></center>
            </form>
          </div>
          </div>
        </>
     );
}
 
export default Login;