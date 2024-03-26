

const ReadBookCard = ({item}) => {

    const { author, bookName, image, publisher, rating, review, category, tags, totalPages, yearOfPublishing } = item;
       
    return (
        <>
           <div className="card mb-5 card-side bg-base-100 shadow-xl">
  <figure><img className="w-[300px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>      
        </>
    );
};

export default ReadBookCard;