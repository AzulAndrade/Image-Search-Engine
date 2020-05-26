import React, { useState, useEffect } from "react";
import logofinal from "../img/logofinal.png";
import githublogo from "../img/githublogo.jpg";

const Form = ({ setSearch }) => {
  const [word, setWord] = useState("");
  const search = (e) => {
    e.preventDefault();
    setSearch(word);
  };
  return (
    <div>
      <form>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="collapse navbar-collapse" id="navbarsDefault">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="author.html">
                  <img className="logo" src={githublogo} width="30"></img>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </form>
      <main role="main">
        <section className="mt-4 mb-5">
          <div className="container mb-4">
            <div className="container-search">
              <h1 className="font-weight-bold title">Explore</h1>
              <form className="bd-search" onSubmit={search}>
                <input
                  type="text"
                  className="form-control bg-graylight border-0 font-weight-bold"
                  id="search-input"
                  placeholder="Search..."
                  autocomplete="off"
                  onChange={(e) => setWord(e.target.value)}
                ></input>
                <div
                  className="dropdown-menu bd-search-results"
                  id="search-results"
                ></div>
                <input className="btn btn-info" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Form;
