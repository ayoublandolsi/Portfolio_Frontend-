import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import axios from '../axios';
import CloseIcon from '@mui/icons-material/Close';
import TextareaComment from '../Components/comment/TextareaComment';
import { useStateContext } from '../Contexts/ContextProvider';
import HoverRating from '../Components/comment/HoverRating';
import { scroll } from 'framer-motion';
import Sppiner from '../Components/spiner/sppiner';

const CommentList = ({ comments, handleEdit, handleDelete }) => {
  return (
    <div className="max-h-2/3-screen overflow-y-scroll">
      {comments.map((comment) => (
        <TextareaComment
          key={comment.id}
          comment={comment}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const EditComment = ({ commentEdit, getComments,state }) => {
    const { user } = useStateContext();
    const [stars, setStars] = useState(commentEdit.stars);
    const [comment, setComment] = useState(commentEdit.comment);
    const [disabled, setDisabled] = useState();
    const [message, setMessage] = useState("");
    // set initial comment value to the comment being edited
    const [open, setOpen] = useState(true);

    const Edit = async (e) => { // add event parameter to function
      e.preventDefault();
      setDisabled(true)
      try{
        await axios.put(`/api/coment/${commentEdit.id}`, { // use commentEdit.id to identify which comment to edit
          user_id: user.id, // use user.id instead of setUser_id(user.id)
          comment,
          stars,
        });
        setComment(""); // clear comment input field
        setStars(null);
        getComments();
        setDisabled(false);
        state();
    } catch (error) {
        if (error.response && error.response.status === 422) {
          const errors = error.response.data.errors;
          setMessage("Required");
          setDisabled(false);
        } else {
          setMessage("Required");
          setDisabled(false);
        }

    };
}

    return (
        <>
      <div>
        <form onSubmit={Edit}>
          <label className="block mb-2 text-2xl font-bold text-gray-800" htmlFor="comment">
            Edit your Comment
          </label>
          <div className="ml-5 mb-3">
            {message === "Required" ? (
              <span style={{ color: "red", marginLeft: 10 }}>{message}</span>
            ) : null}
            <HoverRating value={parseFloat(stars)} onChange={(e, newValue) => setStars(newValue)} />
          </div>
          <div className="relative">
            <textarea
              className="w-full px-6 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your edited comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={disabled}
              className="absolute mr-6 mb-4 my-2 px-4 py-2 font-bold text-black border border-solid rounded-md hover:bg-black hover:text-white bottom-0 right-0"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
      </>
    );
  };

const Feedback = () => {

  const { user } = useStateContext();
  const [stars, setStars] = useState(null);
  const [editt , setEditt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [commentEdit ,setCommentEdit] = useState([]);
  const [open, setOpen] = useState(true);

  const getComments = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/coment');

      setComments(response.data);
      setIsLoading(false);
    } catch (error) {
      setMessage("Error fetching comments");
      setIsLoading(false);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
setIsLoading(true);
    try {
      const response = await axios.post("/api/coment", {
        user_id: user.id, // use user.id instead of setUser_id(user.id)
        comment,
        stars,
      });
      setOpen(true);
      setMessage("");
      setComment("");
      setStars(null);
      getComments();
      setIsLoading(false);
      setTimeout(() => {
        setOpen(false);
      }, 10000);
      const errorMessage = response.data.message;
  setMessage(errorMessage);
      console.log(errorMessage);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        setMessage("Required");
        console.log(errors);
      } else {
        console.log(message);
        setMessage("Required");

      }

  }
  setIsLoading(false);
}
useEffect(() => {
    getComments();
  }, []);

  const handleEdit = async (id) => {
    setIsLoading(true);
    setEditt(false);
   const  response = await axios.get(`/api/coment/${id}`)
   console.log(response);
   setEditt(true);
    setCommentEdit(response.data.comment);
    setIsLoading(false);


}






    /*try {
     await axios.post(`/api/coment/${id}`, {
        user_id,
        comment,
        stars,
      });
      setMessage("");
      setComment("");
      setStars(0);
      getComments();
    } catch (error) {
        const errors = error.response.data.errors;
        setMessage("Required");
        console.log(errors);

    }µ*/

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`/api/coment/${id}`);
      const errorMessage = response.data.message;
      setMessage(errorMessage);
      getComments();
      setIsLoading(false);
      setTimeout(() => {
        setOpen(false);
      }, 10000);
      setOpen(true);
    } catch (error) {
      console.log("Error deleting comment");
    }
    setIsLoading(false);
  };
  const state =()=>{
    setEditt(false);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 10000);
    setMessage("The comment was updated successfully");

  }

  return (
    <div className="container pl-4 mx-auto flex flex-col">
      <div className="flex-1/3 bg-white shadow-lg rounded-b-xl p-4">
         {editt ?(<div><EditComment getComments={getComments} commentEdit={commentEdit} state={state}/></div>):isLoading ?(<div><Sppiner/></div>):(
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-2xl font-bold text-gray-800" htmlFor="comment">
            Add your Comment
          </label>
          <div className="ml-5 mb-3">
            {message === "Required" ? <span style={{ color: 'red', marginLeft: 10 }}>{message}</span> : null}
            <HoverRating value={parseFloat(stars)} onChange={(e, newValue) => setStars(newValue)} />
          </div>
          <div className="relative">
          <textarea
              className="w-full pl-6  pr-40 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute mr-6 mb-4 my-2 px-4 py-2 font-bold text-black border border-solid rounded-md hover:bg-black hover:text-white bottom-0 right-0"
            >
              Submit
            </button>
          </div>
        </form>
        )}

{message !== "Required"  && message !== "" ?(        <Box sx={{ width: '100%' }}>
          <Collapse in={open}>
          <Alert
        className=' bg-green-200'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}

            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         {message}
        </Alert>
          </Collapse>
        </Box>
    ):(null)}
        <div className="flex-2/3 mt-4 bg-slate-100 shadow-lg rounded-t-xl">
          <h2 className="px-4 py-2 font-bold text-lg text-gray-800">Comments</h2>
          { comments.length > 0 ? (
            <CommentList
              comments={comments}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ):isLoading? (<Sppiner/>):(
                <div className="pb-4">
              <p className="mx-5 mt-4">You don't have any comments. Please submit your review.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

