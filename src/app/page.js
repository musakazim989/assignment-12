import Link from "next/link"

export default function Home() {
  return (
    <div className="text-3xl text-center py-24 font-bold">
      <h1>Welocome to my Blog</h1>
      <Link href="/blog">
        <button className="mt-4 bg-blue-700 px-4 py-2 text-white rounded">
          Enter my Blog
        </button>
      </Link>
    </div>
  )
}
