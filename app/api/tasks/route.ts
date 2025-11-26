//create and delete tasks

import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(){
    try {
        const tasks = await prisma.task.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(tasks)
    } catch (error) {
        return NextResponse.json("error in fetching tasks",{status:500})
    }
}

export async function POST(req:Request){
    try {
       const{title,description,category,status} = await req.json()
       const tasks = await prisma.task.create({
        data:{
          title,
          description,
          category,
           status
        }
        
       })
       return NextResponse.json(tasks)
    } catch (error) {
        return NextResponse.json("error in creating tasks",{status:401})
    }
}