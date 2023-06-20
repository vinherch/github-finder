import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {year} vinher - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
