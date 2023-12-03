/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "s3IRA9YtCwS89FkJRjIsTaUCxD8SCbAtK4uAlVyACn0TetZpJWB28ZWe";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  // Closure
  const MorePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    console.log("正在morePicture內部");
    console.log(newURL);
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />

      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} key={d.id} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={MorePicture}>More pictures</button>
      </div>
    </div>
  );
};

export default Homepage;
