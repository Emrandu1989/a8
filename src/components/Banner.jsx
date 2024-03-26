import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <>
            <div className="hero rounded-lg my-12  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={bannerImg} className="lg:max-w-md rounded-lg shadow-2xl" />
    <div className='lg:mr-24'>
      <h1 className="lg:text-5xl text-3xl  font-bold">Books for Recharge <br /> <span className='lg:ml-20 ml-12 text-pink-500'>Your Mind</span> </h1>
      
     <Link to='/listedBooks'>
     <button className="btn mt-12 ml-16 lg:ml-36 btn-primary">View The List</button>
     </Link>
    </div>
  </div>
</div> 
        </>
    );
};

export default Banner;