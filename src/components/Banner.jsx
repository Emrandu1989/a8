import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <>
            <div className="hero rounded-lg  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={bannerImg} className="max-w-md rounded-lg shadow-2xl" />
    <div className='mr-24'>
      <h1 className="text-5xl font-bold">Books for Recharge <br /> <span className='ml-20 text-pink-500'>Your Mind</span> </h1>
      
      <button className="btn mt-12 lg:ml-36 btn-primary">View The List</button>
    </div>
  </div>
</div> 
        </>
    );
};

export default Banner;