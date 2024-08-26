import { useState, useEffect } from "react";
import * as Components from "../../Components/logincomponents/login"
import { Link } from "react-router-dom";
import './auth.css';
import axios from "../../axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from "../../Contexts/ContextProvider";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setErrors] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { csrf }=useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
    const response = await axios.post("/forgot-password",{email})
setStatus(response.data.status)
      setIsSending(false);
      setIsSent(true);
    } catch (error) {
        if (error.response.status === 422){
setErrors(error.response.data.errors);
        }
      console.log(error);
      setIsSending(false);
    }
  };

  useEffect(() => {
    document.title = "Forgot Password";
  }, []);

  return (
    <div className="ayoub ">
      <Components.Container >
        <div className="flex items-center justify-center mt-[120px] ">
          <div className="w-96">
            <h2 className="text-3xl font-bold mb-6">Forgot Password ?<p>Let us Know your email adress and we will email you a password reset Link .</p> </h2>
            {error.email && <small  className="spano   text-red-600 "  >{error.email[0]}</small>}

            {isSent ? (
                <div>
             {status &&
              <div className="bg-green-200 text-green-800 p-4 rounded mb-6">
{status}              </div>
            }

              </div>

            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="infield">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      fontSize={22}
                      className="absolute mx-2 my-3 text-slate-500"
                    />
                    <Components.Input
                      className="inp"
                      type="email"
                      autoComplete="email"
                      autoFocus
                      placeholder="Email"
                      required
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />

                    <label className="label"></label>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-row">

                  <Components.Button
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send"}
                  </Components.Button>
                  <div className="text-center ml-11 mt-4">
                  <Components.Anchor className="text-center ml-11 mt-8">
                  <Link to='/login' className="hover:underline">
                    Back to Login
                  </Link>
                  </Components.Anchor>
                  </div>
                                  </div>

              </form>
            )}

          </div>
        </div>
      </Components.Container>
    </div>
  );
};

export default ForgotPassword;

