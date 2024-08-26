import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinearProgressWithLabel from '@mui/material/LinearProgress';

const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
`;

const Card = styled.div`
  width: 700px;
  height: auto;
  margin: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const CardHeader = styled.div`
  background-image: linear-gradient(to right, #FF512F 0%, #F09819 100%);
  color: #fff;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 3px;
`;

const ProjectType = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProjectProgress = styled.div`
  align-items: center;
`;

const LinearProgressWithLabelstyled = styled(LinearProgressWithLabel)`
  margin-right: 10px;
  border-radius:20px;
  height:12px;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 1px;
  right: 30px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CallButton = styled.button`
  background-color: #FF512F;
  color: #fff;
  border: none;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

`;

export const FeedbackButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const mockData = [
  { id: 1, title: `If you d'ont have any projects, please get in touch with me to discuss your project needs.`, type: ' ', progress: 1},

];

const YourProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data from Laravel backend
    setProjects(mockData);
  }, []);


  return (
    <div>
      <Container>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader></CardHeader>
            <CardBody>
              <ProjectTitle className=' font-bold'>{project.title}</ProjectTitle>
              <ProjectType className=' text-slate-500'>{project.type}</ProjectType>
              <ProjectProgress>
                <LinearProgressWithLabelstyled variant="determinate" value={project.progress} />
              </ProjectProgress>
            </CardBody>
          </Card>
        ))}
      </Container>

    </div>
  );
};

export default YourProject;
