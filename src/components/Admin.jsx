// import booksData from "../data/books";
import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
function Admin({ user, setUser }) {
  const [books, setBooks] = useState([]);

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

  const deleteHandle = (bookId) => {
    fetch(
      `https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`,
      {
        method: "delete",
        "Content-type": "application/json",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <main>
        <div className="main-body-container">
          <h1>Admin Page</h1>
          <div className="add-comic-button">
            <input type="submit" value="ADD NEW COMIC" />
          </div>

          <div className="comic">
            <table>
              <thead>
                <tr>
                  <th>Comic Title</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book)  => (     //localdata
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button onClick={()=>{deleteHandle(book.id)}}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
