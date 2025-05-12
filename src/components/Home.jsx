// import booksData from "../data/books";
import {useState, useEffect} from "react";

function Home({user,setUser}) {
  const [books,setBooks] = useState([])

  useEffect(() => {
    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/api/books"
    )
      .then((response) => response.json()) // convert to json first
      .then((result) => {
        setBooks(result.data.books);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching books", error);
        throw new Error("this was a failure");
      });
  }, []);

// use books._id from database are named with _id
  return (
    <section className="myComics">
      {books.map((book) => (
        <div key={book._id} className="container">   
          <img src={`../../public/images/${book.imageUrl}`} alt={book.title} />
          <p>
            <em>{book.title}</em>
          </p>
          <p>{book.author}</p>
          <p>{book.rating}</p>
          <a href="#">Details</a>
        </div>
      ))}
    </section>
  );
}

export default Home;
