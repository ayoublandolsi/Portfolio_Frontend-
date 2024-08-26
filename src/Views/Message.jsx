import React from 'react';
import './message/message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPhone, faPaperPlane,faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { useStateContext } from '../Contexts/ContextProvider';

export default function Message() {
const {user}=useStateContext();
return (
<div className='message'>
<div className="chat-global">
<div className="nav-top">
  <div className=" flex items-center">
    <img src="/assets/images/avatars/avatar_12.jpg" className="rounded-full h-10 w-10 mr-3 ml-5 " alt="Profile" />
    <div>
      <p className="font-bold">{user?.name}</p>
      <p className="text-gray-500">Active Now</p>
    </div>
  </div>

        </div>

<div className="conversation">
<div className="talk left">
<img src="/assets/images/avatars/avatar_2.jpg" alt="Avatar" />
<p>Lorem ipsum dolor sit amet</p>
</div>
<div className="talk right">
<p>Lorem ipsum dolor sit amet,</p>
<img  className='ml-2' src="/assets/images/avatars/avatar_8.jpg" alt="Avatar" />
</div>
<div className="talk right">
<p>Lorem ipsum dolor sit amet,</p>
<img  className='ml-2' src="/assets/images/avatars/avatar_8.jpg" alt="Avatar" />
</div>
<div className="talk right">
<p>Lorem ipsum dolor sit amet,</p>
<img  className='ml-2' src="/assets/images/avatars/avatar_8.jpg" alt="Avatar" />
</div>
<div className="talk left">
<img src="/assets/images/avatars/avatar_1.jpg"  alt="Avatar" />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam mi.</p>
</div>
<div className="talk right">
<p>Larcu. Prae</p>
<img className='ml-2' src="/assets/images/avatars/avatar_8.jpg" alt="Avatar" />
</div>
</div>
<form className="chat-form">
<div className="container-inputs-stuffs">
<div className="files-logo-cont">
<FontAwesomeIcon icon={faPaperclip} fontSize={20} />
</div>
<div className="group-inputs">
<textarea minLength={1} maxLength={1500} type="text" placeholder="Type a message" className="input-message" />
<FontAwesomeIcon icon={faFaceSmileBeam} className="my-auto mx-2" fontSize={20} />
</div>
<div className="send-logo-cont">
<FontAwesomeIcon icon={faPaperPlane} fontSize={20} className="cursor-pointer" />
</div>
</div>
</form>
</div>
</div>
);
}
