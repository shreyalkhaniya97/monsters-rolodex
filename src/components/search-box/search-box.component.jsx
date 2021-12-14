import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input type='text' onChange={handleChange} placeholder={placeholder} />
);
