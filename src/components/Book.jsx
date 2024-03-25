import React from 'react';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    console.log(book)
     const {author, bookId, bookName, image, publisher, rating, review,category, tags, } = book;
    return (
        <>
            <Link to={`/book/${bookId}`}>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img className='w-[350px] h-[450px]' src={image} alt="Shoes" /></figure>
  <div className='ml-9 space-x-4 mt-2'>
       <span className='font-bold bg-base-300 p-1 px-2 rounded-full  text-yellow-500'>{category}</span> <span className='font-bold  bg-base-300 p-1 px-2 rounded-full text-gray-500'>{tags[2]}</span> 
  </div>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <h5>By: {author} </h5>
    <hr />
    <div className="flex justify-between items-center mt-2">
      <h6 className='font-bold'>{tags[0]}</h6>
        <div className='flex items-center gap-2'>
            {rating}
            <FcRating />
        </div>
    </div>
  </div>
</div>     
            </Link>
        </>
    );
};

export default Book;