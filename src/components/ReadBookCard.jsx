import { IoLocationSharp, IoSearchCircle  } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";

const ReadBookCard = ({item}) => {

    const { author, bookName, image, publisher, rating, review, category, tags, totalPages, yearOfPublishing } = item;
       
    return (
        <>
           <div className="card mb-5 card-side bg-base-100 border-2 pl-9 py-5  shadow-xl">
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
    <div className='flex justify-center items-center'>
        <p className='flex items-center gap-2'>
        <HiUsers />
        <span>Publisher:{publisher} </span>
        </p>
        <p className='flex items-center mr-24 gap-2'>
        <IoSearchCircle />
          <span> page: {totalPages}</span>
        </p>
    </div>
    <hr />
    <div className='space-x-12'>
      <button className="btn btn-outline">Category : {category} </button>
      <button className="btn ">Rating : {rating} </button>
      <button className="btn  btn-active btn-accent"> View Details </button>
    </div>
  </div>
</div>     
        </>
    );
};

export default ReadBookCard;