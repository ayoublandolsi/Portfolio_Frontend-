import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiTrash2, FiEdit, FiHeart, FiGithub, FiMessageSquare, FiShare } from 'react-icons/fi';
import './CardProject.css';
import '../Services/ServiceProviders.css';
import '../cardabout/Card.css';
import axios from '../../axios';
import { Buttonn } from '../button/Button';
import { useStateContext } from '../../Contexts/ContextProvider';
import { Link } from 'react-router-dom';

function FeaturedProject({ project }) {
  const [promptCommentId, setPromptCommentId] = useState(false);
  const [promptCommentIdd, setPromptCommentIdd] = useState(false);
  const [promptCommentIddd, setPromptCommentIddd] = useState(false);
  const { user } = useStateContext();
  const [allUser, setAllUser] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const getAllUser = async () => {
    const response = await axios.get('api/alluser');
    setAllUser(response.data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  useEffect(() => {
    // Update the comment count whenever the allUser array changes
    setCommentCount(allUser.length);
  }, [allUser]);

  useEffect(() => {
    // Fetch the initial like count and check if the user has liked the project
    fetchLikeCount();
  }, []);

  const fetchLikeCount = async () => {
    try {
      const response = await axios.get(`/api/likes/count?project_id=${project.id}`);
      setLikeCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };




  const createLike = async () => {
    try {
      await axios.post('/api/likes/create', {
        user_id: user.id,
        project_id:project.id,
      });
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    } catch (error) {
        console.log(project.id)
      console.log(error);
    }
  };


  const deleteLike = async () => {
    try {
      await axios.delete('/api/likes/delete', {
        data: {
          user_id: user.id,
          project_id: project.id,
        },
      });
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } catch (error) {
      console.log(error);
    }
  };


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const handeldelete = async (id) =>
{
await axios.delete(`/api/projects/${id}`)
}

    return (
      <motion.article
        ref={ref}
        className=' pro  w-full h-auto flex items-center justify-between relative rounded-3xl border border-solid rounded-br-2xl border-black bg-white shadow-2xl p-6'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.75 }}
      >
        <div className=' hover:shadow-2xl absolute rounded-br-3xl top-0 left-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-slate-800' />
        <a href='' target='_blank' rel='noreferrer' className='hidden lg:block w-1/2 cursor-pointer overflow-hidden shadow-lg border border-solid border-black rounded-lg'>
          <img       src={`http://127.0.0.1:8000/storage/project/image/${project.image}`} alt='' className='w-full h-[310px] ' />
        </a>
        <div className='w-[100%] lg:w-1/2  flex flex-col items-start justify-between lg:pl-6'>
        <a href='' target='_blank' rel='noreferrer' className=' lg:hidden w-[100%] cursor-pointer overflow-hidden shadow-lg border border-solid border-black rounded-lg'>
          <img       src={`http://127.0.0.1:8000/storage/project/image/${project.image}`} alt='' className='w-full h-[210px] ' />
        </a>
          <a href='' target='_blank' className='hover:underline underline-offset-2 mt-4 lg:mt-[-10px]'>
            <h2 className='my-2 w-full text-left text-2xl lg:text-4xl font-bold'>{project.title}</h2>
          </a>
          <span className='text-[#11a372] mb-1 font-medium text-xl'>{project.category}</span>
          <p className='my-2 text-sm lg:text-[18px]  text-justify items-center  text-gray-900'>
            {project.description}          </p>
          <div className='lg:mt-2 mt-10 flex  flex-row-reverse  justify-between align-center items-end'>
      {!promptCommentIddd && (
        <div className='hidden lg:block'>
          <Buttonn  text="Visit Project" href={project.url} />
          </div>
          )}
          </div>
        </div>
        {promptCommentIdd && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <p className="text-lg font-semibold mb-3">Share</p>
            <p className="text-gray-700 mb-3">Link: {project.url.substring(0, 35)}...</p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 text-white bg-emerald-500 hover:bg-emerald-600 rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(project.url);
                  setPromptCommentIdd(false);
                  setPromptCommentIddd(false);               }}
              >
                Copy
              </button>
              <button
                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md"
                onClick={() => {
                    setPromptCommentIdd(false);
                    setPromptCommentIddd(false);                } }
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
        {/* Add comments and share icons at the bottom of the card */}
        <div className='absolute  bottom-[-10px] right-0 flex justify-end items-center w-full p-4'>
        {user? (
            <>
        <div className='sbox'>
          <a
            className='card-button-love'
            title={isLiked ? 'Unlike' : 'Like'}
            onClick={() => {
                if(!isLiked){
                  createLike();
                }else{
                    deleteLike();

                }

            }}
          >
            <FiHeart
              className={!isLiked ? 'iconcard1 text-gray-600 hover:text-red-600 cursor-pointer' : 'iconcard1 text-red-600 cursor-pointer'}
            />
          </a>
        </div>
        <div className=' '>
            <span className='card-like-count'>{likeCount}</span>
          </div>
          <div className='sbox '>
           <Link to='/dashboard/feedback'> <FiMessageSquare title={'comment'} className='iconcard2 text-gray-600 hover:text-gray-800 cursor-pointer' />
           </Link>
          </div>
          <div className=' '>
            <span className='card-like-count'>{commentCount}</span>
          </div>
          </>
          ):(
            <>
        <div className='sbox'>
          <a
            className='card-button-love'
            title={isLiked ? 'Unlike' : 'Like'}
            onClick={() => {
                setPromptCommentId(true);
                setPromptCommentIddd(true);

            }}
          >
            <FiHeart
                         className={!isLiked ? 'iconcard1 text-gray-600 hover:text-red-600 cursor-pointer' : 'iconcard1 text-red-600 cursor-pointer'}
                         />
          </a>
        </div>
        <div className=' '>
            <span className='card-like-count'>{likeCount}</span>
          </div>
          <div className='sbox '>
            <a onClick={()=>{
                 setPromptCommentId(true);
                setPromptCommentIddd(true);}}>
            <FiMessageSquare title={'comment'} className='iconcard2 text-gray-600 hover:text-gray-800 cursor-pointer' />
</a>
          </div>
          <div className=' '>
            <span className='card-like-count'>{commentCount}</span>
          </div>
        </>)}
          <div className='sbox'>
            <a onClick={() => {
                setPromptCommentIdd(true);
                setPromptCommentIddd(true);            }}>
            <FiShare title={'share'} className='iconcard3 text-gray-600 hover:text-gray-800 cursor-pointer' />
            </a>
          </div>
         <div className="sbox ">
            <a  href={project.shortDescription} target='_blank' rel='noreferrer' className='w-10'>
              <FiGithub className="iconcard" />
            </a>
          </div>
        </div>
        { promptCommentId && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <p className="text-lg font-semibold mb-3">Warning</p>
            <p className="text-gray-700 mb-3">Please log in to like this project?</p>
            <div className="flex justify-end">
                <Link to='/login'>
              <button
                className="mr-2 px-4 py-2 text-white  bg-emerald-500 hover:bg-emerald-600 rounded-md"
                onClick={() => {
                  setPromptCommentId(false);
                  setPromptCommentIddd(false)
                }}
              >
                Login
              </button>
              </Link>
              <button
                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md"
                onClick={() => {setPromptCommentId(false);
                    setPromptCommentIddd(false)}}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

       {user?.email === 'ayoublandolsie@gmail.com' && (
  <div className='absolute top-0 bottom-40px right-0 flex justify-end items-center w-full p-4'>
    <div className=''>
      <a className='card-button-delete'>
        <FiEdit />
      </a>
      <a className='card-button-delete' onClick={() => handeldelete(project.id)}>
        <FiTrash2 />
      </a>
    </div>
  </div>
)}



      </motion.article>
    );
  }

const CardProject = ({project}) =>{
  return (
    <>
   <section className='project'>
    <div className='allcard  grid lg: md:py-2  p-6 lg:gap-24'>
        <div className='all lg:col-span-12'>
        <FeaturedProject  project={project}/>
        </div>
        <div className='lg:col-span-6'>

        </div>



        </div>


   </section>
    </>
  );
}
 export default CardProject;

