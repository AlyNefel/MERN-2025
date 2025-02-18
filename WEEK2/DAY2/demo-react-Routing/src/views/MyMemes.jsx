import React, { useEffect, useState } from "react";

const MyMemes = () => {
  const [memes, setMemes] = useState([]); // State for storing memes

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMemes(data.data.memes.slice(0, 4)); // Fetch and set the first 6 memes
        }
      })
      .catch((error) => console.error("Error fetching memes:", error));
  }, []); // Empty dependency array to fetch once on component mount

  return (
    <div>
      <h1 className="text-3xl font-medium">My Memes</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {memes.map((meme) => (
          <div key={meme.id} className="border p-4 rounded shadow-sm w-60">
            <img
              src={meme.url}
              alt={meme.name}
              className="w-full h-auto rounded"
            />
            <p className="mt-2 text-center font-medium">{meme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMemes;
