import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';
const AllMemes = () => {
  const navigate = useNavigate();
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
        try {
            const response = await axios.get("https://api.imgflip.com/get_memes");
            const data = response.data;
            if (data.success) {
                setMemes(data.data.memes.slice(0, 9)); //* Take the first 9 memes
            }
        } catch (error) {
            console.error("Error fetching memes:", error);
        }
    };

    fetchMemes();
}, []);
  return (
    <div>
      <h1 className="text-3xl font-medium">All Memes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {memes.map((meme) => (


          <div key={meme.id} className="border p-2 rounded shadow-sm text-center">

<Link to={`/all-memes/${meme.id}`}>
            <img src={meme.url} alt={meme.name} className="w-full h-[250px] rounded" />
            <p className=" text-center mt-2 text-sm font-medium text-secondary">Name: {meme.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMemes;
