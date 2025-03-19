import React from "react";
import PropTypes from "prop-types";

const AwardItem = ({ logo, title, year }) => {
  return (
    <div className="flex-none w-[22%] sm:w-auto rounded-3xl flex-row mx-auto p-2 text-center items-center">
      <img className="w-full max-w-[80px] sm:max-w-[150px]" src={logo} alt={title} />
    </div>
  );
};



AwardItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AwardItem;
