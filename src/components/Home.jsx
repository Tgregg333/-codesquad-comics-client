import booksData from "../data/books";
import {useState, useEffect} from "react";

function Home({user,setUser}) {
  const [books,setBooks] = useState([])

  useEffect(() => {
    setBooks(booksData)
  }

  );


  return (
    <section className="myComics">
      {booksData.map((book) => (
        <div className="container">
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
