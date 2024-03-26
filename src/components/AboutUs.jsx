import img1 from '../assets/pexels-photo-1290141.jpeg';
import img2 from '../assets/pexels-photo-13061424.jpeg';
import img3 from '../assets/pexels-photo-5554240.jpeg';
import img4 from '../assets/pexels-photo-6214649.webp';
import img5 from '../assets/pexels-photo-9572636.jpeg';
import img6 from '../assets/banner.jpg';


const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 mt-12">

              <div className='lg:flex ml- lg:ml-0  ' >
                   <img className='lg:w-[300px]' src={img5} alt="" />
                   <img className='lg:w-[300px]' src={img1} alt="" />
                   <img className='lg:w-[300px]' src={img3} alt="" />
                   <img className='lg:w-[300px]' src={img2} alt="" />
                   <img className='lg:w-[300px]' src={img4} alt="" />
                  
              </div>
            <h1 className="text-3xl font-bold my-8">About Us</h1>
            <p className="text-lg leading-relaxed">
                Welcome to Books Arena, your ultimate destination for discovering new books, managing your reading lists, and connecting with fellow book lovers! Our platform is designed to provide you with an immersive and personalized reading experience.
            </p>
            <p className="text-lg leading-relaxed mt-4">
                At Books Arena, we believe in the power of literature to inspire, educate, and entertain. Whether you're a seasoned bookworm or just starting your reading journey, you'll find something to love on our platform. Join us and explore a world of endless stories!
            </p>
        </div>
    );
};

export default AboutUs;
