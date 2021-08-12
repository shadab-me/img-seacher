import React from "react";

import "../../styles/loader.css";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
