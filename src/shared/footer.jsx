function Footer() {
  return (
    <div>
      <div>
        <h3 className="text-color-white">VISIT US</h3>
        <p>CodeSquad Comics</p>
        <p>123 Dorchester Avenue</p>
        <p>Boston, MA 02124</p>
      </div>

      <div>
        <h3>LINKS</h3>
        <p>
          <a href="index.html">#</a>
        </p>
        <p>
          <a href="about.html">#</a>
        </p>
        <p>
          <a href="login.html">#</a>
        </p>
      </div>

      <div>
        <h3>FOLLOW US</h3>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-square-twitter"></i>
      </div>

      <div>
        <h3>A PRODUCT OF</h3>
        <a href=" http://codesquad.org/">
          <img
            className="footer-image"
            src="public/images/CodeSquad-logo-b.png"
            alt="code squad logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
