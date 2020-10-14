import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-gray-700">
      <div className="max-w-3xl w-full flex justify-between items-center py-12">
        <p className="flex-1">Mintter Technologies</p>
        <nav>
          <ul>
            <li>
              <Link href="/hiring">
                <a>We are Hiring!</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
