function Footer() {
  return (
    <footer>
      <div>
        <p>ⓒ {new Date().getFullYear()} Anthony Nguyen</p>
      </div>
      <div>
        <figure className="find-me">
          <figcaption>Find me</figcaption>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/anthony-nguyen-a8b884251/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/anthonyng041">GitHub</a>
            </li>
            <li>
              <a href="https://read.cv/">CV</a>
            </li>
            <li>
              <a href="mailto:anthonyng041@gmail.com">Email</a>
            </li>
          </ul>
        </figure>
      </div>
    </footer>
  );
}

export default Footer;
