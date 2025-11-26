//update and delte tasks and get task by id

import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request,
  { params }: { params: { id: string } }){

   try {
     const task = await prisma.task.findUnique({
         where:{
            id:params.id
                
            
        }
     })
    return NextResponse.json(task);
 
   } catch (error) {
    return NextResponse.json("error in finding task",{status:403});
   }
}



export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, description, category, status } = await req.json();

    const updated = await prisma.task.update({
      where: { id: params.id },
      data: { title, description, category, status },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Error updating task" }, { status: 400 });
  }
}



export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.task.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Task deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting task" }, { status: 400 });
  }
}

