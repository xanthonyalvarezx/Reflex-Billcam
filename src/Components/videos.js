const Videos = () => {
  return (
    <div id="videoListWrapper">
      <ul id="videoList">
        <li>
          <iframe
            title={Math.floor(Math.random() * 1000000)}
            src="https://www.youtube.com/embed/7EFp6PSOySk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li>
          <iframe
            title={Math.floor(Math.random() * 1000000)}
            src="https://www.youtube.com/embed/PjEg4ZXdeSE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li>
          <iframe
            title={Math.floor(Math.random() * 1000000)}
            src="https://www.youtube.com/embed/eCMLrVgAfyA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li>
          <iframe
            title={Math.floor(Math.random() * 1000000)}
            src="https://www.youtube.com/embed/ekgBRji_u0g"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li>
          <iframe
            title={Math.floor(Math.random() * 1000000)}
            src="https://www.youtube.com/embed/GwPhaosV4Nk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li>
          <iframe
            title={Math.floor(Math.random() * 1000000)}
            src="https://www.youtube.com/embed/6mYkBqVouqg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
      </ul>
    </div>
  );
};

export default Videos;
