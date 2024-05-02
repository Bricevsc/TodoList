"use client";
import { Flex } from "@chakra-ui/react";

import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import NoTasks from "./components/NoTasks";
import Loading from "./components/Loading";

import { useState, useEffect } from "react";
import { ITask } from "./types";

export default function Home() {
  const [task, setTask] = useState("");
  const [isLoadind, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: task,
        }),
      });
      if (response.ok) {
        setTask("");
        fetchTasks();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleCompleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/complete/${id}`, {
        method: "PATCH",
      });
      if (response.ok) {
        await fetchTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllTasks((prevTasks) =>
          prevTasks.filter((task: ITask) => task._id !== id)
        );
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoadind ? (
        <Loading />
      ) : (
        <>
          <Flex direction="column" p="2rem">
            {allTasks.length > 0 ? (
              allTasks.map((individualTask: ITask) => (
                <Task
                  key={individualTask._id}
                  individualTask={individualTask}
                  handleCompleteTask={handleCompleteTask}
                  handleDeleteTask={handleDeleteTask}
                />
              ))
            ) : (
              <NoTasks />
            )}
          </Flex>
        </>
      )}
    </>
  );
}
