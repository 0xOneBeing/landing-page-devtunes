import NavLinks from "./NavLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="container-fluid footer">
      <div className="container footer-area">
        <footer className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-3 border-top text-center text-md-start">
          <p className="col-md-4 mb-0 text-body-secondary">
            &copy; {currentYear} DevTunes
          </p>

          <ul className="nav col-md-4 justify-content-center justify-content-md-end w-auto text-black">
            <NavLinks />
          </ul>
        </footer>
      </div>
    </section>
  );
}
