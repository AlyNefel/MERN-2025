import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import AllStacks from "./views/AllMemes";
import AllTasks from "./views/AllTasks";
import MyTasks from "./views/MyTasks";
import MyMemes from "./views/MyMemes";
import OneMeme from "./views/OneMeme";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-tasks" element={<AllTasks />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/my-memes" element={<MyMemes />} />
        <Route path="/all-memes" element={<AllStacks />} />
        <Route path="/all-memes/:id" element={<OneMeme />} />
      </Routes>
    </div>
  );
}

export default App;
