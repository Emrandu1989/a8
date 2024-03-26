import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Rechart from '../components/Rechart';

const PagesToRead = () => {
    const  books = useLoaderData();
    console.log(books)
    const [readBooks, setReadBooks] = useState([]);
    
    console.log(readBooks)

    useEffect(() => {
        const storedReadBooks = localStorage.getItem('readBooks');
        
        if (storedReadBooks) {
            setReadBooks(JSON.parse(storedReadBooks));
        }
       
    }, []);
    // Filter books based on IDs stored in readBooks
    const readList = books.filter(book => readBooks.includes(book.bookId));

    console.log(readList)
      
     
    return (
        <>         
             <div className='mt-12 ml-12'>
                  <Rechart readList={readList}/>
               
                 </div>     
        </>
    );
};

export default PagesToRead;