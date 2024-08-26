import { Route, Routes } from "react-router-dom";
import { useStateContext } from "./Contexts/ContextProvider";
import CreateComponent from "./Components/Project/CreateComponent";
import EditComponent from "./Components/Project/EditComponent";
import Home from "./Views/Home";
import { Project } from "./Views/Project";
import DefaultLayout from "./Components/DefaultLayout";
import GeustLayout from "./Components/GeustLayout";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Skills from "./Components/skill/Skills";
import Education from "./Components/skill/Education";
import Exprience from "./Components/skill/Exprience";
import Login from "./Views/auth/Login";
import Dashbord from "./Views/Dashbord";
import NavSkills from "./Components/skill/NavSkills";
import ForgetPassword from "./Views/auth/ForgetPassword";
import ResetPassword from "./Views/auth/ResetPassword";
import NotFoundPage from "./Views/404";
import Unauthorize from "./Views/Unauthorize";
import DashboardLayout from "./layouts/dashboard";
import Message from "./Views/Message";
import YourProject from "./Views/YourProject";
import Edit from "./Components/coment/Edit";
import Create from "./Components/coment/Create";
import Feedback from "./Views/Feedback";

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/password-reset/:token" element={<ResetPassword />} />
        <Route path="/" element={<NavSkills />}>
          <Route path="/Education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Exprience" element={<Exprience />} />
        </Route>
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/dashboard/project" element={<YourProject />} />
        <Route path="/dashboard/message" element={<Message />} />
        <Route path="/client/contact" element={<Contact />} />
        <Route path="/feedback/create" element={<Create />} />
        <Route path="/feedback/Edit/:id" element={<Edit />} />
        <Route path="/dashboard/feedback" element={<Feedback />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
      <Route path="/Unauthorize " element={<Unauthorize />} />

      <Route path="/" element={<GeustLayout />}>
        <Route path="/client/" element={<Home />} />
        <Route path="/client/about" element={<About />} />
        <Route path="/client/project" element={<Project />} />

        <Route path="/client/create" element={<CreateComponent />} />
        <Route path="/client/edit/:id" element={<EditComponent />} />
        <Route path="/" element={<NavSkills />}>
          <Route path="/about/client/education" element={<Education />} />
          <Route path="/about/client/skills" element={<Skills />} />
          <Route path="/about/client/Exprience" element={<Exprience />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
