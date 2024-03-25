import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const details = useLoaderData();
     console.log(details)
     const booksId = useParams();
       console.log(booksId)
    return (
        <div>
             <h2>Book Details</h2>
        </div>
    );
};

export default BookDetails;