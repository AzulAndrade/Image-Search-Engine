import React, { useState, useEffect } from "react";
import "./css/app.css";
import "./css/theme.css";
import Form from "./components/Form";
import Images from "./components/Images";
import Footer from "./components/Footer";

// API KEY de Pixabay 16611079-8aa3c3c56d9269010ee8b26fd

function App() {
  //states de la búsqueda
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  useEffect(() => {
    const getAPI = async () => {
      if (search === "") return;
      const imagesPerPage = 20;
      const key = "16611079-8aa3c3c56d9269010ee8b26fd";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;
      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits);

      const calculateTotalPages = Math.ceil(result.totalHits / imagesPerPage);
      setTotalPages(calculateTotalPages);
    };
    getAPI();
  }, [search, actualPage]);

  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;
    setActualPage(newActualPage);
  };
  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > totalPages) return;
    setActualPage(newActualPage);
  };

  return (
    <div>
      <Form setSearch={setSearch} />
      <Images images={images} />
      <div className="row-buttons">
        {actualPage === 1 ? null : (
          <button className="btn " type="button" onClick={previousPage}>
            &laquo; Previous
          </button>
        )}
        {actualPage === totalPages || search === "" ? null : (
          <button className="btn " type="button" onClick={nextPage}>
            Next &raquo;
          </button>
        )}
      </div>
      <Footer />
      <script src="assets/js/app.js"></script>
      <script src="assets/js/theme.js"></script>
      <script defer src="./img/fontawesome-all.js"></script>
    </div>
  );
}

export default App;
