// import { useState, useEffect } from "react";
// import axios from "axios";

// const DataService = () => {
//   const [data, getData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://www.googleapis.com/youtube/v3/videos)
//       .then((result) => getData(JSON.stringify(result.data)));
//   }, []);

//   return (
//     <>
//       <ul>
//         {data.map((video) => (
//           <li>{video.snippet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default DataService;
