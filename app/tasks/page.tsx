"use client";

import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import Filters from "./components/Filters";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await fetch("/api/tasks", { cache: "no-store" });
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    //@ts-ignore
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Task Manager</h1>

      <TaskForm onCreated={fetchTasks} />
       /
      <Filters tasks={tasks} onFiltered={setTasks} />

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task: any) => (
            <TaskCard key={task.id} task={task} refresh={fetchTasks} />
          ))}
        </div>
      )}
    </div>
  );
}
