import * as Components from "../../Components/logincomponents/login"
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash , faEye, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState} from "react";
import { useStateContext } from "../../Contexts/ContextProvider";



export default function Sinup() {
    const { register , errors,isloading } = useStateContext();
    const [email, setemail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState("");




    const handelRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(); // Create a new FormData object
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password_confirmation", password_confirmation);
        if(avatar){
              formData.append("avatar", avatar);
    }
        register(formData); // Pass the formData to the register function
      };



    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const handleFileChange = (e) => {
        setAvatar(e.target.files[0]); // Update the avatar state with the selected file
      };
  return (
    <Components.Form onSubmit={handelRegister}>
    <Components.Title>Create Account</Components.Title>
    <div className="infield">
      <FontAwesomeIcon
        icon={faEnvelope}
        fontSize={22}
        className="absolute mx-2 my-3 text-slate-500"
      />
      <Components.Input
        className="inp"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
    autoComplete="Name"
                    autoFocus
      />

      <label className="label"></label>
    </div>
    <div className="infield">
      <FontAwesomeIcon
        icon={faEnvelope}
        fontSize={22}
        className="absolute mx-2 my-3 text-slate-500"
      />
      <Components.Input
      disabled={isloading}
        className="inp"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
                    autoFocus
        placeholder="Email"
        required
      />

      <label className="label"></label>


    </div>
    {errors.email && <small  className="spano   text-red-600 "  >{errors.email[0]}</small>}

    <div className="infield">
      <FontAwesomeIcon
        icon={faLock}
        fontSize={22}
        className="absolute mx-2 my-3 text-slate-500"
      />
      <Components.Input
      disabled={isloading}
     type={showPassword ? "text" : "password"}

        placeholder="Password"
        className="inp"
    value={password}
        onChange={(e)=>setPassword(e.target.value)}
        autoComplete="current-password"
        autoFocus

        required
      />
          <FontAwesomeIcon
  icon={showPassword ? faEyeSlash : faEye}
  fontSize={18}
  className="absolute ml-[-35px]  my-4 text-slate-300 cursor-pointer"
  onClick={toggleShowPassword}
/>
<label className="label"></label>


    </div>
    {errors.password && <small  className="spano   text-red-600 "  >{errors.password[0]}</small>}

    <div className="infield">
      <FontAwesomeIcon
        icon={faLock}
        fontSize={22}
        className="absolute mx-2 my-3 text-slate-500"
      />
    <Components.Input
    disabled={isloading}
     type={showPassword ? "text" : "password"}

        placeholder="confirmed Password"
        className="inp"
value={password_confirmation}
        onChange={(e)=>setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
        autoFocus

        required
      />
          <FontAwesomeIcon
  icon={showPassword ? faEyeSlash : faEye}
  fontSize={18}
  className="absolute ml-[-35px]  my-4 text-slate-300 cursor-pointer"
  onClick={toggleShowPassword}
/>
       <label className="label"></label>


    </div>
    <div className="infield">
      <FontAwesomeIcon
        icon={faLock}
        fontSize={22}
        className="absolute mx-2 my-3 text-slate-500"
      />
    <Components.Input
    disabled={isloading}
        type="file"
        className="inp"
        name="avatar"
        onChange={handleFileChange}
        autoFocus

      />

       <label className="label"></label>


    </div>


    <Components.Button
     type="submit"
              disabled={isloading}

               >{isloading ? "Sign Up..." : "Sign Up"}</Components.Button>
  </Components.Form>  )
}
