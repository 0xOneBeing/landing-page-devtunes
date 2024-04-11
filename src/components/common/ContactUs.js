import contactImg from "../../assets/images/contact.png";

export default function ContactUs() {
  return (
    <section className="container-fluid contact-us my-5 py-3">
      <div className="container">
        <h1 className="text-center">Contact us</h1>
        <p className="text-center">Get in touch</p>
        <div className="row justify-content-center align-items-center">
          <div className="col-6 d-none d-md-block">
            <img src={contactImg} alt="Contact us" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First name"
                  />
                  <label for="firstName">First name</label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last name"
                  />
                  <label for="lastName">Last name</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                placeholder="name@example.com"
              />
              <label for="emailAddress">Email address</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Message"
                style={{ height: "20vh" }}
              ></textarea>
              <label for="message">Message</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
