import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import ContactPage from "./ContactPage";
const Layout = ({ children }) => (
  <>
    <Helmet>
      <script src="https://gumroad.com/js/gumroad.js" />
    </Helmet>

   
    <div className="bg-black">
    <Header />
      <main>{children}</main>
      <ContactPage />
      {/* <Footer /> */}
    </div>

  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
