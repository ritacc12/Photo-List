import React from "react";
import axios from "axios";

const Search = () => {
  const auth = "s3IRA9YtCwS89FkJRjIsTaUCxD8SCbAtK4uAlVyACn0TetZpJWB28ZWe";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  const search = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });
    console.log(result);
  };
  return (
    <div className="search">
      <input className="input" type="text"></input>
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
