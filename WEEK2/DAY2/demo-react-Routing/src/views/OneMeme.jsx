
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from 'axios';
import BackButton from "../components/BackButton";

const OneMeme = () => {

    const [memes, setMemes] = useState([]);
const {id}=useParams()
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
  const oneMeme=memes.find((meme)=>meme.id==id)
  console.log(id,memes)
  return (
    <div>{oneMeme && 
    
    <div>
        <h1>This is the meme Id getting from URL using useParams : <span style={{color:'red'}}>{oneMeme.id}</span> </h1>
        {oneMeme.name}
        <div  className="border p-2 rounded shadow-sm text-center">
        
        
                    <img src={oneMeme.url} alt={oneMeme.name} className="w-full h-[250px] rounded" />
                    <p className=" text-center mt-2 text-sm font-medium text-secondary">Name: {oneMeme.name}</p>
                   
                  </div>
    <BackButton></BackButton>
    </div>}
    </div>
  )
}

export default OneMeme