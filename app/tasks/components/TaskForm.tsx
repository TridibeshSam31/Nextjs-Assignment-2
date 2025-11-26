//create task component

"use client"

import {useState} from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

export default function TaskForm({ onCreated }: { onCreated: () => void }){
    const [title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const [category,setCategory] = useState("ok")

    const submit = async () => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        category,
        status: "pending",
      }),
    });

    setTitle("");
    setDescription("");
    setCategory("ok");

    onCreated();
  } 

  return(
    <div className="p-4 border rounded-md space-y-3">
        <h2 className="font-semibold text-lg">Create Task</h2>
        <Input placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)  }/>
        <Select onValueChange={setCategory} defaultValue="ok">
            <SelectTrigger>{category}</SelectTrigger>
            <SelectContent>
            <SelectItem value="ok">Work</SelectItem>
            <SelectItem value="Personal">Personal</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="learning">Learning</SelectItem>
            </SelectContent>

        </Select>

        <Button onClick= {submit}>Create</Button>
    </div>
  )

}