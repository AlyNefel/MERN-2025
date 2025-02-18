import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [todos, setTodos] = useState([]);
  const [memes, setMemes] = useState([]);


  useEffect(() => {
    // Fetch the Todos API (fetch 3 tasks)
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 3)); // Take the first 3 tasks
      })
      .catch((error) => console.error("Error fetching todos:", error));

    // Fetch the Memes API (fetch 3 memes)
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes.slice(0, 3)); // Take the first 3 memes
      })
      .catch((error) => console.error("Error fetching memes:", error));
  }, []);
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="stack"
    >
    
      <div className="w-full text-center py-5">
        <h2 className="text-xl font-medium">Tasks</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {todos.map((todo) => (
            <div key={todo.id} className="border p-4 rounded shadow-sm w-60">
              <p className="font-medium">Task: {todo.title}</p>
              <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-medium mt-8">Memes</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {memes.map((meme) => (
            <div key={meme.id} className="border p-4 rounded shadow-sm w-60">
              <img src={meme.url} alt={meme.name} className="w-full h-auto rounded" />
              <p className="mt-2 text-sm font-medium">{meme.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
