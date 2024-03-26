import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    //  console.log(books)
     const {bookId} = useParams();
      const parseBookId = parseInt(bookId)
      
       const details = books.find(detail => detail.bookId === parseBookId);
       console.log(details)
       const {author, bookId: bookIdx, bookName, image, publisher, rating, review,category, tags,totalPages,yearOfPublishing} = details;
      
    return (
        <>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
      <div className='w-1/2 min-h-[700px] bg-slate-300 px-16 flex justify-center items-center mx-12'>
      <img  src={image} className="max-w-lg h-[500px] rounded-lg shadow-2xl" />
      </div>
    <div>
      <h1 className="text-3xl font-semibold">{bookName}</h1>
      <h5 className='py-2 font-semibold text-gray-600'>By:{author}</h5>
      <hr />
       <h4 className='py-2 font-semibold'>{category}</h4>
       <hr />
       <p className='text-sm'> <span className='font-semibold'>Review :</span> {review}  </p>
       <p className='text-yellow-500 my-4'> <span className='text-black font-semibold'>Tag :</span> #{tags[0]} <span className='ml-4'>#{tags[1]}</span>   </p>
       <hr />
        <div className='flex justify-between items-center'>
            <div className='text-gray-500 space-y-1'>
                <h5>Number Of Pages:</h5>
                <h5>Publisher:</h5>
                <h5>Year of Publishing:</h5>
                <h5>Rating:</h5>
            </div>
            <div className='mr-24 font-semibold space-y-1'>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
        </div>
        {/* <h6 className='text-green-800'>Number of Pages <span className='ml-12 font-semibold'>{totalPages}</span> </h6>
        <h6 className=''>Publisher:  <span className='ml-12 font-semibold'>{publisher}</span> </h6>
        <h6>Year of Publishing:  <span className='ml-12 font-semibold'>{yearOfPublishing}</span> </h6>
        <h6>Rating:  <span className='ml-12 font-semibold'>{rating}</span> </h6> */}
      <button className="btn btn-primary mt-5 mr-6">Read</button>
      <button className="btn btn-outline">Wishlist</button>
    </div>
  </div>
</div>
        </>
    );
};

export default BookDetails;