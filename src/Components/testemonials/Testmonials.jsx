import './Testemonials.css'
import Sppiner from '../spiner/sppiner'
import SwiperCore, { EffectCoverflow, Pagination,Navigation, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HoverRating from '../comment/HoverRating';
import 'swiper/swiper-bundle.min.css';
import axios from '../../axios';
import { Title } from '../../Views/Project';
import { useEffect,useState } from 'react';
SwiperCore.use([EffectCoverflow, Pagination]);


export default function Testemonials() {
    const [isloading, setIsLoading] = useState(false);
    const[allUser,setAllUser]= useState([]);

    const getAllUser = async () => {
        setIsLoading(true);
            const response = await axios.get('api/alluser');
            setAllUser(response.data);
            setIsLoading(false);
        };

        useEffect(() =>{
                getAllUser();
        },[]);
const screenWidth = window.innerWidth;

// Set the slidesPerView value based on the screen width
let slidesPerView;

if (screenWidth >= 992) {
  slidesPerView = 2;
} else {
  slidesPerView = 1;
}


return (

    <div className="text-center mr-17 mb-8"> {/* Add Tailwind CSS class for center alignment */}
            <Title title="Testemonials" stittle="Our Client Says" className='mt-16' />
    {isloading?(<div> <Sppiner/> </div>):(

<div className='swiper-wrapper'>

<Swiper

        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 7,
          stretch: 0,
          depth: 300,
          modifier: 0,
          slideShadows: false
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={slidesPerView}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}

      >

{allUser.map((allUsers)=>(

      <SwiperSlide key={allUsers.id} className=''>
        <div className="card ">

          <div className="card__image">
            <img src={`http://127.0.0.1:8000/storage/users-avatar/${allUsers.avatar}`} alt="card image" />
          </div>
          <div className="card__content">

            <span className="card__title">{allUsers.name}</span>
            <span className="card__name mb-3" ></span>
            <div className="flex items-center mt-4 ml-[70px]">
            <HoverRating value={allUsers.stars} />

      </div>
            <div className="card__text">
            <blockquote >
{allUsers.comment}
        </blockquote>
           </div>
          </div>
        </div>

      </SwiperSlide>
               ))}

      <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </Swiper>

    </div>
        )}
    </div>

  );
}
