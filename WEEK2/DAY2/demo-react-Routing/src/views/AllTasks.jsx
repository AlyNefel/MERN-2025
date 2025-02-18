import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllTasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]); // Corrected state for tasks

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.slice(0, 16)); // Take the first 3 tasks
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []); // Empty dependency array since we only need to fetch once

  return (
    <div>
      <h1 className="text-3xl font-medium">All Tasks</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {tasks.map((task) => (
          <div key={task.id} className="border p-4 rounded shadow-sm w-60">
            <p className="font-medium">{task.title}</p>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
