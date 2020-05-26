import React from "react";
import "../img/icons.svg";
import "../img/icons1.svg";
import styled from "@emotion/styled";

const Images = ({ image }) => {
  //extraemos las variables

  const { largeImageURL, likes, previewURL, tags, views } = image;
  console.log("image.webformatURL", image);
  return (
    <div>
      <div className="card card-pin">
        <img className="card-img" src={largeImageURL} alt={tags}></img>
        <div className="overlay">
          <h2 className="card-title title">{likes} Likes</h2>
          <div className="more">
            <a target="_blank" href={largeImageURL}>
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              Read More
            </a>
          </div>
        </div>
      </div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v7.0&appId=137141306329511&autoLogAppEvents=1"
      ></script>
    </div>
  );
};
export default Images;
