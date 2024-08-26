import { useState, useEffect } from 'react';
import axios from '../../axios';
import CardProject from './CardProject';
import Spinner from '../spiner/Spinner'
import { useStateContext } from '../../Contexts/ContextProvider';

export default function CreateComponent() {
  const{projects,loading}=useStateContext();


  if (loading) {
    return <Spinner/>; // Render the spinner component when loading is true
  }

  return (
    <>
      {projects.length > 0 ? (
        projects.map((project) => <CardProject project={project}  key={project.id} />)
      ) : (
        <p className='text-3xl mb-7'>No projects found.</p>
      )}
    </>
  );
}

