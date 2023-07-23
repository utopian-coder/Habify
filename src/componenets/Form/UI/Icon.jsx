import React from "react";

function Icon({ source }) {
  return (
    <img
      src={source}
      alt={source}
      style={{ height: "1.5rem", width: "1.5rem" }}
    />
  );
}

export default Icon;
