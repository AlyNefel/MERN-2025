import React, { useEffect, useState } from "react";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]); // State for storing tasks

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.slice(0, 8)); //* Fetch and set the first 8 tasks
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []); //* Empty dependency array to fetch once on component mount

  return (
    <div>
      <h1 className="text-3xl font-medium">My Tasks</h1>
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

export default MyTasks;
