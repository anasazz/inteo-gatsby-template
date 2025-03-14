import "./src/styles/global.css";

// gatsby-browser.js

if (typeof window !== 'undefined' && !window.AFRAME) {
    require('aframe');
  }
  