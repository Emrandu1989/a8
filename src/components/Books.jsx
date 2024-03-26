import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
    const [books, setBooks] = useState([])
    console.log(books)
    useEffect(()=>{
          fetch('../../public/books.json')
          .then(res=>res.json())
          .then(data=> setBooks(data))
    },[])
    return (
        <div>
              <h2 className="text-4xl font-bold text-center mb-12">Books</h2>
              <div className="grid lg:grid-cols-3 gap-5">
                    {
                        books.map(book=> <Book 
                        key={book.bookId}
                        book={book}
                        /> )
                    }
              </div>
        </div>
    );
};

export default Books;