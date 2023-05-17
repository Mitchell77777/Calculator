import React from "react";

const Display = ({ result }) => {
  return <input type="text" className="display" value={result} readOnly />;
};

export default Display;
