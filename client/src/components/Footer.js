import React from "react";

const Footer = () => {
  return (
    <div className="container footer nabvar-fixed-bottom">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded d-flex justify-content-between align-items-center">
        <a
          className="navbar-brand"
          href="http://www.akbuluteren.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Developer's Website
        </a>
        <p className="text-muted my-1 hover">2020 Made by Eren Akbulut</p>
      </nav>
    </div>
  );
};

export default Footer;
