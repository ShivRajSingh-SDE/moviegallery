import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Contextpage from "../Contextpage";
import { useNavigate } from "react-router-dom";
import slugify from "react-slugify";
import bgVideo from "../assets/bg.mp4"; // Import the video
// Import your component's CSS file

function Searchbar() {
  const { filteredGenre, fetchSearch, setBackGenre, setGenres } =
    useContext(Contextpage);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      onKeyUp(value);
    }, 500);

    setTypingTimeout(newTimeout);
  };

  const onKeyUp = (query) => {
    if (query !== "") {
      query = query.trim();
      if (query === "") {
        navigate("/");
      } else {
        navigate(`/search/${slugify(query)}`);
      }
    }
  };

  useEffect(() => {
    // Play the video on component mount
    const video = document.getElementById("bgVideo");
    video.play().catch((error) => {
      // Handle any errors, e.g., autoplay may be disabled
      console.error("Video playback error:", error);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>BlueBird Movies</title>
      </Helmet>
      <video
        id="bgVideo"
        className="bg-video "
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>
      {/* Other content */}
      <div className="main w-full h-[10rem] md:h-[12rem] rounded-2xl">
        <div className="h-full w-full  flex  justify-center items-center">
          <input
            type="search"
            name="searchpanel"
            id="searchpanel"
            placeholder="Search Movie "
            className="p-3 drop-shadow-2xl shadow-2xl shadow-black w-full mx-10 md:w-[40rem]  rounded-xl outline-none"
            onKeyUp={(e) => handleSearch()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <h1 className=" p-3 drop-shadow-2xl justify-between shadow-2xl shadow-black  mx-10   rounded-xl outline-none">
            🔍
          </h1>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
