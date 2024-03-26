import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReadBookCard from "../components/ReadBookCard";

const ReadList = () => {
  const books = useLoaderData();
  console.log(books);

  const [readBooks, setReadBooks] = useState([]);

  console.log(readBooks);

  useEffect(() => {
    const storedReadBooks = localStorage.getItem("readBooks");

    if (storedReadBooks) {
      setReadBooks(JSON.parse(storedReadBooks));
    }
  }, []);

  // Filter books based on IDs stored in readBooks
  const readList = books.filter((book) => readBooks.includes(book.bookId));

  console.log(readList);

  return (
    <div>
      <div>
        {readList.map((item) => (
          <ReadBookCard key={item.bookId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReadList;
