import axios from "../axios";
import './contact/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [istekhdem, setistekhdem] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      setIsLoading(true);

      try {
        // Make an API request to send the form data
        const response = await axios.post("/api/contacts", {
          name,
          email,
          message,
        });

        if (response.status === 201 && response.data.message === "true") {
          setIsSubmitted(true);
          setistekhdem(true);
        } else {
          setistekhdem(false);
          setErrorMessage("Failed to send the message. Please try again."); // Set error message
        }
      } catch (error) {
        setistekhdem(false);
        setErrorMessage("An error occurred while sending the message. Please try again."); // Set error message
      }

      setIsLoading(false);
    };

    useEffect(() => {
      if (isSubmitted) {
        setName("");
        setEmail("");
        setMessage("");
      }
    }, [isSubmitted]);
  return (

    <div className="contact ">
      {/*<div className="contentcontact">
        <h2 className="tittre">Contact Us</h2>
      </div>*/}
      <div className="containerr">
        <div className="contactinfo">
          <div className="boxes">
            <div className="icons"><FontAwesomeIcon icon={faMapLocationDot} /></div>
            <div className="text">
              <h3 className="h33">Address</h3>
              <p className="paraa">4070 M,saken sousse</p>
            </div>
          </div>

          <div className="boxes">
            <div className="icons"><FontAwesomeIcon icon={faPhone} /></div>
            <div className="text">
              <h3 className="h33">Phone</h3>
              <p className="paraa">+216 20 473 407</p>
            </div>
          </div>
          <div className="boxes">
            <div className="icons"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className="text">
              <h3 className="h33">Email</h3>
              <p className="paraa">ayoublandolsie@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contactform">
        <form onSubmit={handleSubmit} >
             <h2 className="h22">Send Your Project</h2>
            <div className="inputBox">
              <input
                className="input"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className="spann">Full Name</span>
            </div>

            <div className="inputBox">
              <input
                className="input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="spann">Email</span>
            </div>

            <div className="inputBox">
              <textarea
                className="textarea"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <span className="spann">Type your Project</span>
            </div>

            <div className="inputbox">
            { istekhdem ? (
              <p className="text-green-700 mb-4">Thank you for your message!</p>

            ) : errorMessage? (
              <p className="text-red-700 mb-4">{errorMessage}</p>
            ) : null}
          </div>

            <button
  type="submit"
  className="buttonsubmit"
  disabled={isLoading}
onClick={isSubmitted}

>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
</div>

























  );
}

