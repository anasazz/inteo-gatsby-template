import React from "react";
import PropTypes from "prop-types";

const AwardItem = ({ logo, title, year }) => {
  return (
    <div className="flex flex-col items-center justify-center p-1 sm:p-3 md:p-5 text-center flex-1">
      <div className="flex items-center justify-center h-[60px] sm:h-[180px] md:p-5">
        <img 
          className="max-w-[60px] sm:max-w-[250px] max-h-[50px] sm:max-h-[160px] md:max-w-[250px] md:max-h-[160px]  object-contain" 
          src={logo} 
          alt={title} 
        />
      </div>
      {/* <p className="text-sm text-gray-300 mt-2">{title} </p> */}
    </div>
  );
};

AwardItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AwardItem;