import './globals.css'
import Navbar from '@/app/components/Navbar'

export const metadata = {
  title: 'Khoj Near',
  description: 'Find all services near you!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header>
        <Navbar />
      </header>
      <div>{children}</div>
      </body>
    </html>
  )
}
