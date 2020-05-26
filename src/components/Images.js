import React from "react";
import logofinal from "../img/logofinal.png";
import githublogo from "../img/githublogo.jpg";
import Image from "./Image";

const Images = ({ images }) => {
  return (
    <main role="main">
      <section className="mt-4 mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="card-columns">
              {images.map((image) => (
                <Image key={image.id} image={image} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Images;
