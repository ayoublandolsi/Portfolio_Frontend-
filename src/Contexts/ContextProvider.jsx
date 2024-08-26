import  { useState,useEffect, useContext, createContext } from "react"
import axios from "../axios"
import {useNavigate} from "react-router-dom"
const StateContext = createContext({
});

export const ContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [errors,setErrors] = useState([]);
    const [isloading, setIsLoading] = useState();
    const [status, setStatus] = useState();
    const [comments,setComments]= useState([]);
    const [is, setIs] = useState(false);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchProjects();
    }, []);

    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };


  const [user, setUser] = useState(null);

  const csrf = ()=>axios.get("/sanctum/csrf-cookie");
  const getUser = async () => {

    try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {

          setErrors(error);

      }
    };

    const createLike = async () => {
          await axios.post('/api/likes/create', {
            user_id: 1,
            project_id:1,
          });
      };

  const login = async ({...data}) => {
    setIsLoading(true);
    await csrf ();
    setErrors([]);
    try{
        await axios.post('/login',data)
        await getUser();
        setIsLoading(false);
       setIs(true);
       createLike();
navigate("/dashboard");
    }catch(e){
       if (e.response.status === 422){
        setErrors(e.response.data.errors);

       }
       setIsLoading(false);

}
};
const register = async (formData) => {
    setIsLoading(true);

    await csrf();
    setErrors([]);
    try {
      await axios.post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the appropriate headers for file upload
        },
      });
      await getUser();
      setIs(true);
      setIsLoading(false);
      status === "verification-link-sent";
      await resendEmailVerification({ setStatus });
      navigate("/dashboard");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      setIsLoading(false);
    }
  };

const logout =() => {
    axios.post('/logout').then(()=>{setUser(null);
        setIs(true);
        navigate("/login"); })
}
const resendEmailVerification = ({ setStatus }) => {
    setIsLoading(true);

    axios
      .post('/email/verification-notification')
      .then(response => {
        setStatus(response.data.status);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
      });
  };

useEffect(() =>{
    if(csrf){
    if(!user) {
        getUser();
        getComments();
    }
}
},[user]);


const getComments = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/coment');

      setComments(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        getUser,
        errors,
        logout,
        setIs,
        is,
        isloading,
        comments,
        resendEmailVerification,
        status,
        projects,
        loading,
        setStatus,
         setIsLoading,
         csrf
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);



