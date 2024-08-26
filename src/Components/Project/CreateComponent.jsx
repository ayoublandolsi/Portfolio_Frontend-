import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';

export default function CreateComponent() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  /* const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('shortDescription', shortDescription);
    formData.append('image', image);
    formData.append('url', url);

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

      const response = await axios.post('http://127.0.0.1:8000/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRF-TOKEN': csrfToken,
        },
      });

      // Handle successful response
      const data = response.data;
      const errorMessage = data.message;
      setMessage(errorMessage);
      navigate('/project');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        // Handle validation errors
        console.log(errors);
      } else {
        const errorMessage = error.response.data.message;
        // Handle other errors
        setMessage(errorMessage);
      }
    }
  };*/

 const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('shortDescription', shortDescription);
    formData.append('image', image);
    formData.append('url', url);


      await axios.post('/api/projects',formData).then(({data})=>{
        const errorMessage = data.message;
        // Handle other errors
        setMessage(errorMessage)
        navigate('/project');
    }).catch (({response})=>{
      if ( response.status == 422) {
        const errors = response.data.errors;
        // Handle validation errors
        console.log(errors);
      } else {
        const errorMessage = response.data.message;
        // Handle other errors
        setMessage(errorMessage);
      }
  })

}

  return (
    <div className="p-4">
      {message && (
        <div className="message-box bg-gray-200 text-gray-800 p-4 rounded-lg mb-4">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          ></textarea>
        </div>
        <div>
          <label htmlFor="shortDescription" className="block mb-1">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          ></textarea>
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="url" className="block mb-1">
            URL
          </label>
          <input
            id="url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1">
            Image
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}
