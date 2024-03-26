import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const parsedBookId = parseInt(bookId);

    const details = books.find(detail => detail.bookId === parsedBookId);
    const { author, bookName, image, publisher, rating, review, category, tags, totalPages, yearOfPublishing } = details;

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = localStorage.getItem('readBooks');
        const storedWishlistBooks = localStorage.getItem('wishlistBooks');
        if (storedReadBooks) {
            setReadBooks(JSON.parse(storedReadBooks));
        }
        if (storedWishlistBooks) {
            setWishlistBooks(JSON.parse(storedWishlistBooks));
        }
    }, []);

    const handleAddToLocalStorage = (listType) => {
        if (listType === 'Read') {
            if (!readBooks.includes(parsedBookId)) {
                const updatedReadBooks = [...readBooks, parsedBookId];
                setReadBooks(updatedReadBooks);
                localStorage.setItem('readBooks', JSON.stringify(updatedReadBooks));
                toast.success("Book added to Read List");
            } else {
                toast.warning("You have already read this book.");
            }
        } else if (listType === 'Wishlist') {
            if (!wishlistBooks.includes(parsedBookId)) {
                const updatedWishlistBooks = [...wishlistBooks, parsedBookId];
                setWishlistBooks(updatedWishlistBooks);
                localStorage.setItem('wishlistBooks', JSON.stringify(updatedWishlistBooks));
                if (readBooks.includes(parsedBookId)) {
                    toast.warning("You have already read this book.");
                } else {
                    toast.success("Book added to Wishlist");
                }
            } else {
                toast.warning("This book is already in your Wishlist.");
            }
        }
    };

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 min-h-[700px] bg-slate-300 px-16 flex justify-center items-center mx-12'>
                        <img src={image} className="max-w-lg h-[500px] rounded-lg shadow-2xl" alt={bookName} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">{bookName}</h1>
                        <h5 className='py-2 font-semibold text-gray-600'>By:{author}</h5>
                        <hr />
                        <h4 className='py-2 font-semibold'>{category}</h4>
                        <hr />
                        <p className='text-sm'> <span className='font-semibold'>Review :</span> {review} </p>
                        <p className='text-yellow-500 my-4'> <span className='text-black font-semibold'>Tag :</span> #{tags[0]} <span className='ml-4'>#{tags[1]}</span> </p>
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
                        <button onClick={() => handleAddToLocalStorage('Read')} className="btn btn-primary mt-5 mr-6">Read</button>
                        <button onClick={() => handleAddToLocalStorage('Wishlist')} className="btn btn-outline">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default BookDetails;
