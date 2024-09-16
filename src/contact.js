import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Contact = () => {
    const [isPending, setIsPending] = useState(false);
    let [firstName,setFirstName] = useState('');
    let [LastName,setLastName] = useState('');
    let [email,setEmail] = useState('');
    let [message,setMessage] = useState('');
    const history = useHistory();
    let [password,setPassword] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const openDb = (e) =>{
        e.preventDefault();
        if(password === "batom"){
            history.push('/database')
        }
        else if(password === "batcamp"){
            history.push('/database')
        }
        else if(password ==="chigozirim"){
            history.push('/database')
        }
        else{
            let invalid = document.getElementById("invalid");
            invalid.type = "text";
            setPassword('Incorrect password');
        }
    } ;
 
    const closeBtn= ()=>{
        document.querySelector('.db').className = 'db none'; 
    }
    const dspSb = ()=>{
        document.querySelector('.db').className = 'd-b db';
    }
    const retry = () =>{
        setSubscribed(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true);
        const data = {firstName,LastName,email,message}
        setTimeout(()=>{
            fetch('http://localhost:8800/info', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }).then(()=>{
                console.log("Message sent");
            })
            alert("Message Has Been Sent");
            setIsPending(false);
            setSubscribed(true)
            history.push('/')
        },1000)
    }
    return ( 
        <>
        {isPending && <div>Loading...</div>}
            {<div className="col-md-12">
        {!subscribed &&<div className="container contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    FirstName:
                </label>
                <input 
                type="text"
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
                required
                />

                  <label htmlFor="">
                    LastName:
                </label>
                <input 
                type="text"
                value={LastName}
                onChange={(e)=> setLastName(e.target.value)}
                required
                />

                <label htmlFor="">
                    Email:
                </label>
                <input 
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                />
                
                <label htmlFor="">Message:</label>
                <textarea 
                value={message}
                onChange={(e)=> setMessage(e.target.value)} required></textarea>
                <center>
                {!isPending && <button className="col-md-4 btn btn-primary" onDoubleClick={()=>{
                        const btn = document.querySelector('.db-btn');
                        btn.className = 'd-b btn btn-primary';
                }}>send</button>}
                {isPending && <button className="col-md-4 btn btn-primary" disabled>sending</button>}
                </center>
            </form>
            <button className="db-btn btn btn-primary none" onClick={dspSb}>DB</button>
            <div className="db container none col-md-4">
                <form onSubmit={openDb}>
                    <span className="btn btn-primary" onClick={closeBtn} style={{height:'30px', marginTop:'20px'}}>&times;</span>
                    <input type="password" id="invalid" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                    <button>enter</button>
                </form>
            </div>
        </div>}
        {subscribed &&<div className="container contact">
            <h1>{firstName} has Already sent A Message To Batcamp <br /> To send another message <button onClick={retry} className="btn btn-primary">Click here</button></h1>
        </div>}
            </div>}
        </>
     );
}
 
export default Contact;