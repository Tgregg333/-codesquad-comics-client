import booksData "./book";


function Update() => {
  const id = booksData.id;
  const[book, setBook] = useState();

  useEffect(() => {
    const
  }
  )
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("method is functional");

    const form = e.target;
    console.log("title")
    console.log("author")
    console.log("publisher")
    console.log("genre")
    console.log("pages")
    console.log("rating")
    console.log("synopsis")
  };


    return (
      <div>
        <main>
        <div className="main-body-container">
    <h1>Update Comic</h1>
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value="value stored in the database"/>
        </div>
       
        <div>
            <label htmlFor="author">Author</label>
            <input type="text"  id="title" name="title" value="author value stored in the database" />
            
      </div>
      <br />
      <div>
        <label htmlFor="publisher">Publisher</label>
        <select name="publisher" id="publisher">
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
        <input type="text"  id="genre" name="genre" value="genre data stored in the database"/>
  
      </div>
      <br />
      <div>
        <label htmlFor="Number of Pages">Number of Pages</label>
        <input type="number" id="genre" name="pages" value="255"/>
      </div>
      <br />
      <div>
        <label htmlFor="rating">Rating</label>
        <input type="number"  id="rating" name="rating" value="5"/>
      </div>
      <br />
      <div>
        <label htmlFor="multi-line-text">Synopsis</label>
        <textarea id="multi-line-text" name="multi-line-text"> synopsis value stored in the database</textarea>
      </div>
      <br />
      <div className="submit-button">
        <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
        </main>
      </div>
    )
  }
  
  export default Update