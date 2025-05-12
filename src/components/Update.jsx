// import booksData "./book";

import { useEffect, useState } from "react";

function Update() {
  const id = 3; //placeholder;
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(
      `https://course-project-codesquad-comics-server.onrender.com/api/books/${id}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("method is functional");

    const form = e.target;
    console.log("title");
    console.log("author");
    console.log("publisher");
    console.log("genre");
    console.log("pages");
    console.log("rating");
    console.log("synopsis");
  };

  fetch(
    `https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log("Update successful:", result);
      setBook(result.data);
      navigate("/admin");
    })
    .catch((error) => {
      console.error("Error updating book:", error);
    });
};

  return (
    <div>
      <main>
        <div className="main-body-container">
          <h1>Update Comic</h1>
          <form>
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" value={book.title} />
            </div>

            <div>
              <label htmlFor="author">Author</label>
              <input type="text" id="title" name="title" value={book.author} />
            </div>
            <br />
            <div>
              <label htmlFor="publisher">Publisher</label>
              <select name="publisher" id="publisher" value={book.publisher}>
                <option value="">BOOM! Box</option>
                <option value="">DC Comics</option>
                <option value="">Harry N. Abrams</option>
                <option value="">Icon Books</option>
                <option value="">Image Comics</option>
                <option value="">Marvel</option>
                <option value="">Simon & Schuster</option>
                <option value="">Top Shelf Productions</option>
                <option value="">VIZ Media LLC</option>
              </select>
            </div>
            <br />
            <div>
              <label htmlFor="genre">Genre</label>
              <input type="text" id="genre" name="genre" value={book.genre} />
            </div>
            <br />
            <div>
              <label htmlFor="Number of Pages">Number of Pages</label>
              <input type="number" id="pages" name="pages" value={book.pages} />
            </div>
            <br />
            <div>
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={book.rating}
              />
            </div>
            <br />
            <div>
              <label htmlFor="multi-line-text">Synopsis</label>
              <textarea
                id="multi-line-text"
                name="multi-line-text"
                value={book.synopsis}
              />
            </div>
            <br />
            <div className="submit-button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Update;
