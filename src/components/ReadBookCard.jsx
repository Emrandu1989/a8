import { IoLocationSharp, IoSearchCircle  } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ReadBookCard = ({item}) => {

    const { author, bookName, image,bookId, publisher, rating, review, category, tags, totalPages, yearOfPublishing } = item;
       
    return (
        <>
           <div className="card mb-5 flex flex-col lg:flex-row card-side bg-base-100 border-2 lg:pl-9 py-5  shadow-xl">
  <figure><img className="w-[300px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <h5>By:{author}</h5>
    <div className='flex'>
    <p>Tags: <span>#{tags[0]}</span> <span>#{tags[1]}</span> <span>#{tags[1]}</span>  </p>
      <p className='flex items-center gap-2'>
      <IoLocationSharp />
       <span>Year of publishing:{yearOfPublishing} </span>
      </p>
    </div>
    <div className='flex justify-center flex-col lg:flex-row lg:items-center'>
        <p className='flex items-center  gap-2'>
        <HiUsers />
        <span>Publisher:{publisher} </span>
        </p>
        <p className='flex lg:flex-row items-center mr-24 gap-2'>
        <IoSearchCircle />
          <span> page: {totalPages}</span>
        </p>
    </div>
    <hr />
    <div className='lg:space-x-12 flex flex-col  lg:flex-row gap-4'>
      <button className="btn btn-outline">Category : {category} </button>
      <button className="btn ">Rating : {rating} </button>
      <Link to={`/book/${bookId}`}>
      <button className="btn w-full  btn-active btn-accent"> View Details </button>
      </Link>
    </div>
  </div>
</div>     
        </>
    );
};

export default ReadBookCard;