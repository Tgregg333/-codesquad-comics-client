import React from "react";

function Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is working");
  
    const element = e.target;
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
        <h1>CREATE NEW COMIC</h1>
        <form onSubmit={handleSubmit}>
          <div className="create-form">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Title" />
          </div>

          <div className="create-form">
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" placeholder="Author" />
          </div>

          <div className="create-form">
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
          <div className="create-form">
            <label htmlFor="genre">Genre</label>
            <input type="text" name="genre" id="genre" placeholder="Genre" />
          </div>
  
          <div className="create-form">
            <label htmlFor="pages">Number of Pages</label>
            <input type="number" name="pages" id="pages" placeholder="233" />
          </div>

          <div className="create-form">
            <label htmlFor="rating">Rating</label>
            <input type="number" name="rating" id="rating" placeholder="3" />
          </div>

          <div className="create-form">
            <label htmlFor="multi-line-text">Synopsis</label>
            <textarea placeholder="Synopsis" id="multi-line-text"> </textarea>
          </div>
      
          <input type="submit" value="Submit" />
        </form>
      </div>
    </main>
      </div>
    )
  }

  export default Create
  