import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import WishBookCard from './WishBookCard';

const WishList = () => {
    const books = useLoaderData();
    console.log(books)
    const [wishlistBooks, setWishlistBooks] = useState([]);
    useEffect(() => {
        
        const storedWishlistBooks = localStorage.getItem('wishlistBooks');
       
        if (storedWishlistBooks) {
            setWishlistBooks(JSON.parse(storedWishlistBooks));
        }
    }, []);

       const wishList = books.filter(book=> wishlistBooks.includes(book.bookId))
       console.log(wishList)
    return (
        <div>
            <h2>This is WishList</h2>
            <div>
                {
                    wishList.map(item => <WishBookCard
                    key={item.bookId}
                    item={item}
                    /> )
                }
            </div>
        </div>
    );
};

export default WishList;