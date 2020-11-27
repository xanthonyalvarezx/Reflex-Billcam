import { useState, useEffect } from "react";
import axios from "axios";

const DataService = () => {
  const [data, getData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/videos&api_key=AIzaSyDjokEZzqF2e8a0n4Jcla0wRyUYqCvMFyU")
      .then((result) => getData(result.data));
  }, []);

  return (
    <>
      <ul>
        {data.map((video) => (
          <li>{video.snippet}</li>
        ))}
      </ul>
    </>
  );
};

export default DataService;
