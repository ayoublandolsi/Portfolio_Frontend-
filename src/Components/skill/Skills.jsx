import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLaravel, faJs} from '@fortawesome/free-brands-svg-icons';

import './skills.css'

export default function Skills() {
  const skill = [
    { name: 'Laravel', to:'70%',icon:'faLaravel',color: 'red' },
    { name: 'React', to:'50%',icon:'faReact',color: '#61DAFB' },
    { name: 'next', to:'40%',icon:'faJs',color: 'black' },
    { name: 'node', to:'30%',icon:'faJs',color:'green'},

  ]

  const professionel=[
    {type: 'Front-End Frameworks',percent:90},
    {type: 'Database Management',percent:80},
    {type: 'APIs & Web Services',percent:75},
    {type: 'Back-End Development',percent:65},
  ]

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faReact':
        return faReact;
      case 'faLaravel':
        return faLaravel;
      case 'faJs':
        return faJs;
      case 'faBootstrap':
        return faBootstrap;
      default:
        return null;
    }
};



  return (
    <section className="skills  ml-12">
      <div className="maintext">
        <span className="span2 font-bold">Technical and professional</span>
      </div>
      <div className="skill-main">
        <div className="skill-left">
          <h3 className="h3">Technical Skills</h3>
          {skill.map((item) => (
            <div className="skillbar " key={item.name}>
              <div className="infoo">
                <p><FontAwesomeIcon icon={getIcon(item.icon)} style={{ color: item.color , fontSize: '26px'}} /> {item.name} </p>
                <p>{item.to}</p>
              </div>
              <div className="bar ">
                <span className={item.name}></span>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-right">
          <h3 className="h3">Professional Skills</h3>
          <div className="professionel ">

            {professionel.map((item) => (
              <div className="boxx" key={item.type}>
                 <div className='cercle'>
                  <div
                    className="progress-bar text-gray-600 text-2xl font-bold"
                    style={{
                      '--percent': `${item.percent}`,
                    }}
                  >
                    <progress
                      value={item.percent}
                      min="0"
                      max="100"
                      style={{
                        visibility: 'hidden',
                        height: 0,
                        width: 0,
                      }}
                    >
                     <span className='text-2xl'>{item.percent}%</span>
                    </progress>
                  </div>
                  </div>

                <div className="texxt">
                  <small className='small'>{item.type}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
