"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function Filters({
  tasks,
  onFiltered,
}: {
  tasks: any[];
  onFiltered: (filtered: any[]) => void;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  useEffect(() => {
    let filtered = tasks;

    if (search.trim()) {
      filtered = filtered.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter((t) => t.category === category);
    }

    if (status !== "All") {
      filtered = filtered.filter((t) => t.status === status);
    }

    onFiltered(filtered);
    
  }, [search, category, status]);

  return (
    <div className="flex gap-3 items-center">
      <Input
        placeholder="Search..."
        className="w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select onValueChange={setCategory} defaultValue="All">
        <SelectTrigger>Category: {category}</SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Work">Work</SelectItem>
          <SelectItem value="Personal">Personal</SelectItem>
          <SelectItem value="Urgent">Urgent</SelectItem>
          <SelectItem value="Learning">Learning</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={setStatus} defaultValue="All">
        <SelectTrigger>Status: {status}</SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
