import React from "react";
import PropTypes from "prop-types";

const CloseButton = ({ width , height }) => {
    return (
        <div className="absolute top-2 right-2" style={{width , height }}>
            <span className="absolute w-full h-[2px] bg-gray-400 translate-y-2 rotate-45 rounded-xl"></span>
            <span className="absolute w-full h-[2px] bg-gray-400 translate-y-2 -rotate-45 "></span>
        </div>
    );
};

CloseButton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

export default CloseButton;
