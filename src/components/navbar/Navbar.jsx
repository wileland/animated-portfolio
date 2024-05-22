import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>William L. Haynes</span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          <a href="https://www.linkedin.com/in/williamhaynesxp/"><img src="/linkedin.png" alt="Linkedin" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
