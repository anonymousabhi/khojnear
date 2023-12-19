import './globals.css'

export const metadata = {
  title: 'Khoj Near',
  description: 'Find all services near you!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
