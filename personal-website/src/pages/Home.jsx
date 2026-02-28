import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg">
      <h1 className="Home-text">Hello, world!</h1>
      <div className="Home-text Home-smallText">
        I'm a writer, game developer, musician, and student at Massachusetts
        Institute of Technology.
      </div>
      <h2 className="Home-text" style={{ textAlign: "center" }}>
        Contact:
      </h2>
      {/* <a
        href="https://www.linkedin.com/in/aadya-sharma-/"
        target="_blank"
        rel="noreferrer noopener"
        style={{ zIndex: -100 }}
      >
        Linkedin
      </a> */}
      <div className="Home-text Home-smallText">
        - Email: aadya314 [at] mit [dot] edu
      </div>
    </div>
  );
};
export default Home;
