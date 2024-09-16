import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function ContactUs() {
    const [result, setResult] = useState("");
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);
    const onSubmit = async (event) => {
      event.preventDefault();
      setIsPending(true)
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0cc9cba7-3522-4dfc-ab9c-33d6ea0e7ad1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        history.push('/');
      } else {
        console.log("Error", data);
        setResult(data.message);
        setIsPending("false");
      }
    };
  
    return (
      <div className="container contact-us">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Name</label>
          <input type="text" className="mb-4" name="name" required/>
          <label htmlFor="">Email</label>
          <input type="email" className="mb-4" name="email" required/>
          <label htmlFor="">Message</label>

        <input type="hidden" name="access_key" value="0cc9cba7-3522-4dfc-ab9c-33d6ea0e7ad1"/>
          <textarea name="message" cols={43} rows={5} className="mb-4"required></textarea>
          {!isPending && <button type="submit" className="btn btn-primary">Send</button>}
          {isPending && <button type="submit" className="btn btn-primary">Sending</button>}
        </form>
        <span>{result}</span>
  
      </div>
    );
  }