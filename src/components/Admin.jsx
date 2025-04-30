import booksData from "../data/books";

function Admin(user,setUser) {
  const [books,setBooks] = useState([])

  useEffect(() => {
    setBooks(booksData)
  }

  );

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
                {booksData.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
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