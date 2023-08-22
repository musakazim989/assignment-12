import BlogData from "@/data/blogData.json"
import Link from "next/link"
export default function page() {
  return (
    <div>
      {BlogData.map((blog, index) => (
        <Link key={index} href={`/blog/${blog.id}`}>
          <h1 className=" font-bold text-[24px] p-2">
            {index + 1}. {blog.title}
          </h1>
        </Link>
      ))}
    </div>
  )
}
