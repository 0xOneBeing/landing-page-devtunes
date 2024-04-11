export default function GetQuote() {
  return (
    <section
      className="container-fluid get-quote py-3"
      style={{ backgroundColor: "tomato", color: "#fff" }}
    >
      <div className="row px-5 justify-content-center align-items-center">
        {/* <div className="col-12 col-md-6 order-md-2"></div>
        <div className="col-12 col-md-6 order-md-1 text-center text-md-start"></div> */}
        <div className="text-center">
          <h1 className="m-0">Book our services today!</h1>
          <p>Click "Get Quote" button below and something should happen</p>
          <button
            className="btn btn-lg btn-success px-5 mx-auto mx-md-auto"
            type="submit"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
