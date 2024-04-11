import { Link } from "react-router-dom";

export default function NavLinks() {
  const noRef = null;

  return (
    <>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={noRef}>
          Services
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={noRef}>
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={noRef}>
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={noRef}>
          FAQs
        </a>
      </li>
    </>
  );
}
