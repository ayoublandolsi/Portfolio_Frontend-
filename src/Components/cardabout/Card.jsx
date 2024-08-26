import ayoub from '../../assets/images/Ayoublabdol-eb76e0a8.jpg'
import './Card.css'
export default function Card() {
  return (
    <section  className='about'>
    <div className='img-about'>
<img src={ayoub} alt="ayoub image" className='img' />
<div className="infoabout1">
    <span className='span'>100+</span>
    <p className="paragraphe">happy client </p>
</div>
<div className="infoabout2">
    <span className='span'>1+</span>
    <p className="paragraphe  text-xs">Years exprience</p>
</div>
<div className="infoabout3">
    <span className='span'>12+</span>
    <p className="paragraphe">Project Complete</p>
</div>
</div>
   <div className="about_content ">
    <span className='span2 '>Let me introduce myself</span>
<h2 className='h2'>About Me</h2>
<h3 className='h4'>a story of good</h3>
<p className='p '>
With a diverse skill set encompassing business intelligence development, mobile app development, and full-stack programming, I bring a unique blend of technical prowess to the table. Alongside my proficiency in software development, my expertise as a builder in construction further enriches my capabilities.My portfolio stands as a testament to my aptitude in crafting cutting-edge digital solutions while seamlessly integrating practical insights from the construction industry, resulting in a well-rounded approach to every project.
</p>
<div className="btn_box">
    <a href="#" className='btn'>Read More</a>
</div>
   </div>


    </section>
  )
}
