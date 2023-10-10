import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.user);
  const isLoggedIn = Boolean(Object.keys(loggedIn).length);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BLOGING SITE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              {!isLoggedIn && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              {!isLoggedIn && (
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              )}
              {isLoggedIn && (
                <Link className="nav-link">{loggedIn.username} LoggedIn</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
