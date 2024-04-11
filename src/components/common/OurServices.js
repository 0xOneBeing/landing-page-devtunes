export default function OurServices() {
  const noRef = null;
  return (
    <section className="container-fluid our-services mb-5">
      <div className="container">
        <h1 className="mb-4 text-center">Our Services</h1>
        <div className="row text-center">
          <div className="col-12 col-md-4 mb-3">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Software Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={noRef} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={noRef} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={noRef} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
