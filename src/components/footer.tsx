import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-gray-700 w-full flex justify-between items-center pt-24 text-sm">
      <p className="flex-1">Mintter Technologies</p>
      <Link href="/">
        <a className="px-2">Home</a>
      </Link>
      <Link href="/hiring">
        <a className="px-2">We are Hiring!</a>
      </Link>
    </footer>
  )
}
