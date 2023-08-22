"use client"
import BlogDate from "@/data/blogData.json"
import { useParams } from "next/navigation"
import "./blog.css"

export default function blogDetails() {
  const params = useParams()
  const find = BlogDate.find((blog) => blog.id == params.id)
  if (!find) {
    return <h1>Blog not Found</h1>
  }
  return (
    <div className="blogdata">
      <h1>{find.title}</h1>
      <p>{find.date}</p>
      <p>{find.body}</p>
    </div>
  )
}
