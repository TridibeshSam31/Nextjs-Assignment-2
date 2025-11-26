"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EditTaskDialog from "./EditTaskDialog";
import DeleteDialog from "./DeleteDialog";

export default function TaskCard({ task, refresh }: any) {
  return (
    <Card className="p-4 flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p className="text-sm text-muted-foreground">{task.description}</p>

        <div className="flex gap-2 mt-2">
          <Badge>{task.category}</Badge>
          <Badge variant="secondary">{task.status}</Badge>
        </div>
      </div>

      <div className="flex gap-2">
        <EditTaskDialog task={task} refresh={refresh} />
        <DeleteDialog taskId={task.id} refresh={refresh} />
      </div>
    </Card>
  );
}
