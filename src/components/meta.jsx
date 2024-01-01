import React from "react";

const meta = ({ movie }) => {
  return (
    <div className=" bg-white">
      <>
        <div>
          <h1>{movie.title || movie.name}</h1>
          <meta name="description" content={movie.description} />
          <meta name="description" content={movie.overview} />
          <meta property="og:title" content={movie.title} />
          <meta property="og:description" content={movie.description} />
          <meta property="og:image" content={movie.imageUrl} />
        </div>
      </>
    </div>
  );
};

export default meta;
