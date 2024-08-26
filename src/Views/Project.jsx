import React from "react";
import ListComponent from "../Components/Project/ListComponent";
import { Link } from "react-router-dom";
import "../Components/skill/Skills.css";
import { useStateContext } from "../Contexts/ContextProvider";


const Title = ({ title, stittle, className }) => {

    return (

      <div className={`${className} text-center justify-center wow fadeInUp`} data-wow-delay="0.1s">
        <h6 className="section-title text-[20px] bg-white text-center text-primary px-3">{title}</h6>
        <h1 className="mb-5 text-2xl font-bold">{stittle}</h1>
      </div>
    );
  };


function Project() {
    const { user} = useStateContext();

  return (
    <>
      <div>
        <Title title="My Project" stittle="Contact For Any Project" />

        <div className="mt-"></div>
        <ListComponent />

        {user?.email === 'ayoublandolsie@gmail.com' && (
        <Link
          to="/client/create"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 mt-4"
        >
          Create Project
        </Link>
) }
      </div>
    </>
  );
}

export { Project, Title };
