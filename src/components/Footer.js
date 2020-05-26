import React from "react";
import logofinal from "../img/logofinal.png";
import grayblau from "../img/grayblau.png";
import "../img/icons.svg";
import "../img/icons1.svg";
import styled from "@emotion/styled";

const Text = styled.div`
  color: #4a4747;
  font-family: Comfortaa, Arial, "Helvetica Neue", Helvetica, serif, sans-serif;
  font-weight: 400;
  line-height: 1.63;
  letter-spacing: -0.001em;
`;
const Icon = styled.div`
  fill: #4a4747;
  color: #4a4747;
  position: relative;
`;

//hacerle el style al texto del footer

const Footer = () => {
  return (
    <div>
      <footer className="footer pt-5 pb-5 text-center">
        <div className="container">
          <p>
            <span className="credits font-weight-bold">
              <a
                href="https://azulandrade.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="site-logo"
              >
                <img className="logo1" src={logofinal} alt="Woox"></img>
                <img className="logo1" src={grayblau} alt="Woox"></img>
                <Text>
                  With every line of code, I strive to make the web a beautiful
                  place.
                </Text>
              </a>
            </span>
          </p>
          <Icon>
            <a
              href="mailto:azulandrade1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                version="1.1"
                viewbox="0 0 32 32"
                width="21"
                height="21"
                aria-hidden="false"
                data-reactid="71"
                className="svg"
              >
                <path
                  d="M4.508 4A2.504 2.504 0 0 0 2 6.508v.277l8.054 4.1c.225.115.667.115.892 0L19 6.785v-.277A2.503 2.503 0 0 0 16.492 4H4.508zm4.995 8.133L2 8.313v6.323a2.502 2.502 0 0 0 2.508 2.507h11.984A2.505 2.505 0 0 0 19 14.636V8.313l-7.503 3.82c-.285.145-.64.217-.997.217-.356 0-.712-.072-.997-.217z"
                  data-reactid="22"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/azul-andrade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="icon icon-linkedin"
                xmlns="http://www.w3.org/2000/svg"
                width="21px"
                height="21"
                viewBox="0 0 144 144"
                className="svg"
              >
                <path d="M 10.625,0 C 4.7611628,0 0,4.647 0,10.375 l 0,123.25 C 0,139.359 4.7611628,144 10.625,144 l 122.71875,0 C 139.21759,144 144,139.36 144,133.625 l 0,-123.25 C 144.00001,4.647 139.21759,0 133.34375,0 L 10.625,0 z m 21.40625,19.8125 c 6.828,0 12.375,5.57525 12.375,12.40625 0,6.837 -5.547,12.375 -12.375,12.375 -6.846,0 -12.375,-5.538 -12.375,-12.375 0.001,-6.83 5.53,-12.40625 12.375,-12.40625 z m 65.0625,32.46875 c 21.62801,0 25.625,14.21675 25.625,32.71875 l 0,37.71875 -21.34375,0 0,-33.4375 c 0,-7.969 -0.17199,-18.21875 -11.125,-18.21875 -11.113,0 -12.8125,8.69325 -12.8125,17.65625 l 0,34 -21.34375,0 0,-68.71875 20.5,0 0,9.375 0.28125,0 C 79.727,57.972 86.70275,52.28125 97.09375,52.28125 z M 21.34375,54 l 21.375,0 0,68.71875 -21.375,0 0,-68.71875 z" />
              </svg>
            </a>
            <a href="https://azulandrade.netlify.app/" target="_blank">
              <svg
                version="1.1"
                viewbox="0 0 32 32"
                width="21"
                height="21"
                aria-hidden="false"
                data-reactid="71"
                className="svg"
              >
                <path
                  d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"
                  data-reactid="22"
                ></path>
              </svg>
            </a>
          </Icon>
        </div>
      </footer>
      <script defer src="../img/fontawesome-all.js"></script>
    </div>
  );
};

export default Footer;
