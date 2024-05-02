"use client";

import Header from "./components/Header";
import AddTask from "./components/AddTask";

import { useState, useEffect } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const handleCreateTask = async() => {

  }

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
    </>
  );
}
