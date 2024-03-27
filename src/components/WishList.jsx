import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import WishBookCard from './WishBookCard';

const WishList = () => {
    const books = useLoaderData();
    console.log(books)
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const storedWishlistBooks = localStorage.getItem('wishlistBooks');
       
        if (storedWishlistBooks) {
            setWishlistBooks(JSON.parse(storedWishlistBooks));
            setLoading(false)
        }
    }, []);

       const wishList = books.filter(book=> wishlistBooks.includes(book.bookId))
       console.log(wishList)
    return (
        <div>
          
            <div>
                {
                    wishList.map(item => <WishBookCard
                    key={item.bookId}
                    item={item}
                    loading={loading}
                    /> )
                }
            </div>
        </div>
    );
};

export default WishList;