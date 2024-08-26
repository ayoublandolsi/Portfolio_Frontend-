import React, { useState, useEffect } from "react";
import * as Components from "../../Components/logincomponents/login";
import { Link, Navigate,useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "../../axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from "../../Contexts/ContextProvider";

const ResetPassword = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setErrors] = useState([]);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [searchParams] = useSearchParams();
  const { csrf } = useStateContext();
  const { token } = useParams();

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/reset-password", { email, token, password, password_confirmation });
      setStatus(response.data.status);
      setIsSending(false);
      setIsSent(true);
      navigate('/login')
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
      console.log(error);
      setIsSending(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="ayoub">
      <Components.Container>
        <div className="flex items-center justify-center mt-[70px]">
          <div className="w-96">
            <h2 className="text-3xl font-bold mb-6">Add your new Password?<p>Let us know your email address and we will email you a password reset link.</p></h2>
            {error && <small className="spano text-red-600">{error[0]}</small>}
            {error.password && <small className="spano text-red-600">{error.password[0]}</small>}

            {isSent ? (
              <div>
                {status && (
                   <div>
                  <div className="bg-green-200 text-green-800 p-4 rounded mb-6">
                    {status}
                  </div>
                    <div className="text-center ml-11 mt-4">
                    <Components.Anchor className="text-center ml-11 mt-8">
                      <Link to='/login' className="hover:underline">
                        Back to Login
                      </Link>
                    </Components.Anchor>
                  </div>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="infield mt-6" >
                    <FontAwesomeIcon
                      icon={faLock}
                      fontSize={22}
                      className="absolute mx-2 my-3 text-slate-500"
                    />
                    <Components.Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="inp "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      autoFocus
                      required

                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      fontSize={18}
                      className="absolute ml-[-35px] my-4 text-slate-300 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                    <label className="label"></label>
                  </div>

                  <div className="infield">
                    <FontAwesomeIcon
                      icon={faLock}
                      fontSize={22}
                      className="absolute mt-6 mx-2 my-3 text-slate-500"
                    />
                    <Components.Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="inp mt-3"
                      value={password_confirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      fontSize={18}
                      className="absolute mt-6  ml-[-35px] my-4 text-slate-300 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                    <label className="label"></label>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-row">
                  <Components.Button type="submit" disabled={isSending}>
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

export default ResetPassword;

