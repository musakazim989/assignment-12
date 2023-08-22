import Link from "next/link"
export default function Navbar() {
  return (
    <div cla>
      <ul className="py-4 flex justify-center items-center gap-4 border-b-2">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  )
}
