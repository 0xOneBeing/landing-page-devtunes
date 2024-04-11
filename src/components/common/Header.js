import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-3 m-0"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="offcanvas offcanvas-end d-md-none"
        style={{ maxWidth: "300px" }}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <NavLinks />
          </ul>
        </div>
      </div>

      <div className="container-fluid p-0 m-0">
        <div className="container p-0 d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">
            <img
              src=""
              alt="logo"
              width="30"
              // height="24"
              className="d-inline-block align-text-top"
            />
            DevTunes
          </Link>
          <button
            className="d-block d-md-none btn btn-lg btn-success"
            type="submit"
          >
            Get Quote
          </button>
          <button
            className="navbar-toggler btn btn-primary"
            // className="btn btn-primary"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarNav"
            // aria-controls="navbarNav"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <NavLinks />
            </ul>
          </div>
          <button
            className="d-none d-md-block btn btn-lg btn-success"
            type="submit"
          >
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
