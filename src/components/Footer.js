import React from 'react';
import Algolia from '../search-by-algolia-dark-background.svg';

const Footer = () => (
  <footer>
    Made with <span className="hearts">&#10084; </span> by
    <a href="https://sa-ma.github.io/" className="footer-link">
      Samaila Bala
    </a>
    and powered with
    <a href="https://www.algolia.com" className="footer-link">
      <img src={Algolia} className="algolia-search" alt="Search By Algolia" />
    </a>
  </footer>
);

export default Footer;
