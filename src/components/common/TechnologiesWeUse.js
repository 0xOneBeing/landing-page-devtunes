import { useState } from "react";

import technologies from "../../assets/data/technologies.json";

export default function TechnologiesWeUse() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleHover = (event, tech) => {
    event.currentTarget.querySelector("i").style.color = tech.color;
    event.currentTarget.style.borderColor = tech.color;
    setHoveredTech(tech);
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.querySelector("i").style.color = "";
    event.currentTarget.style.borderColor = "";
    setHoveredTech(null);
  };

  return (
    <section className="container-fluid technology mt-3 mb-5">
      <div className="container">
        <h1 className="mb-3 text-center">Technologies We Use</h1>
        <div className="row g-3 justify-content-center align-items-center">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="col-4 col-md-2 mb-3 tech-icon"
              onMouseEnter={(event) => handleHover(event, tech)}
              onMouseLeave={handleMouseLeave}
              style={{
                border:
                  hoveredTech && hoveredTech.id === tech.id
                    ? `1px solid ${tech.color}`
                    : "0px",
              }}
            >
              <div className="card" style={{ border: "0px" }}>
                <div className="card-body text-center">
                  <i
                    className={tech.icon}
                    style={{ cursor: "pointer" }} // Optional: add pointer cursor
                  ></i>
                  <p className="card-text text-bold">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
