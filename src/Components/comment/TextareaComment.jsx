import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import HoverRating from "./HoverRating";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useStateContext } from "../../Contexts/ContextProvider";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const TextareaComment = ({ comment, handleEdit, handleDelete }) => {
  const [promptCommentId, setPromptCommentId] = useState(null);

const {user}=useStateContext();

  return (
    <div className="">
      <div className="flex  items-start space-x-4">
        <img
          className="w-12 h-12 ml-5 rounded-full object-cover"
          src={`http://127.0.0.1:8000/storage/users-avatar/${user?.avatar}`}
          alt={comment.name}
        />
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <p className="text-[20px] sm:text-lg text-black font-bold mr-3">{user.name}</p>
            <HoverRating value={comment.stars} />
          </div>
          <p className="text-gray-500 text-justify mr-12">{comment.comment}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <a
          className="mr-6 text-blue-600 cursor-pointer hover:text-blue-800"
          onClick={() => {handleEdit(comment.id)

                window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <FiEdit fontSize={20} />
        </a>
        <a
          className="text-red-600 mr-3 mb-3 cursor-pointer hover:text-red-800"
          onClick={() => setPromptCommentId(comment.id)}
        >
          <FiTrash2 fontSize={20}  />
        </a>
      </div>
      {/* Confirmation Prompt */}
      {comment.id === promptCommentId && (
        <div className="fixed  inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white w-3/4 sm:w-[35%]  p-4 rounded-md">
            <p className="text-lg font-semibold mb-3">Delete Confirmation</p>
            <p className="text-gray-700 mb-3">Are you sure you want to delete this comment?</p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md"
                onClick={() => {
                  handleDelete(comment.id);
                  setPromptCommentId(null);
                }}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md"
                onClick={() => setPromptCommentId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextareaComment;
