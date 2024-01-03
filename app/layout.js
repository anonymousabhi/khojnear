import './globals.css'
import Link from 'next/link';

export const metadata = {
  title: 'Khoj Near',
  description: 'Find all services near you!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
        </nav>
      </header>
      <div>{children}</div>
      </body>
    </html>
  )
}
