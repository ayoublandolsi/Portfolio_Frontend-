// component
import SvgColor from '../../../Components/svg-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress,faHouse,faAddressCard,faAddressBook,faComments, faListCheck,faCommentDots} from '@fortawesome/free-solid-svg-icons'

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Home',
    path: '/client/',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: 'Project',
    path: '/client/project',
    icon: <FontAwesomeIcon icon={faBarsProgress} />,
  },
  {
    title: 'Contact',
    path: '/client/contact',
    icon:<FontAwesomeIcon icon={faAddressBook} />,
  },
  {
    title: 'Message',
    path: 'http://localhost:8000/chatify',
    icon:<FontAwesomeIcon icon={faComments} />,
  },


  {
    title: 'About Me',
    path: '/client/about',
    icon:<FontAwesomeIcon icon={faAddressCard} />,
  },
  {
    title: 'Your Project',
    path: '/dashboard/project',
    icon:   <FontAwesomeIcon icon={faListCheck} />
    ,
  },
  {
    title: 'Feedback',
    path: '/dashboard/Feedback',
    icon:<FontAwesomeIcon icon={faCommentDots} />,
  },
];

export default navConfig;
