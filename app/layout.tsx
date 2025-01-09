import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TrustEd - Blockchain Credential Verification',
  description: 'Securely issue, verify, and manage credentials on the blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-black text-gray-100 min-h-screen`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-400">TrustEd</Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition duration-300">Home</Link>
            <Link href="/issue" className="text-gray-300 hover:text-purple-400 transition duration-300">Issue</Link>
            <Link href="/verify" className="text-gray-300 hover:text-purple-400 transition duration-300">Verify</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-6">
      <div className="container mx-auto px-6 text-center">
        <nav className="flex justify-center space-x-4">
          <Link href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Privacy Policy</Link>
          <Link href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Contact Us</Link>
          <Link href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  )
}

