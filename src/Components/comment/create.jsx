import axios from 'axios';

const CreateComment = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/comments', { comment });

      // Handle the successful response
      console.log(response.data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
{/*// authService.js

import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'http://localhost:8000/api';

// Function to login and obtain the token
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data;

    // Store the token in localStorage or a state management solution
    localStorage.setItem('token', token);
  } catch (error) {
    console.error(error);
  }
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    // Check if the token is expired
    if (decodedToken.exp < currentTime) {
      // Token expired
      return false;
    }

    // Token valid
    return true;
  }

  // No token found
  return false;
};

// Function to log out and remove the token
export const logout = () => {
  localStorage.removeItem('token');
};
 */}

export default CreateComment;
