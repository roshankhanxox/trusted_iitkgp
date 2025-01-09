import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function VerifyPage() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg shadow-lg">
        <CheckCircleIcon className="w-24 h-24 text-green-400 mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Credential Verified Successfully!
        </h1>
        <p className="text-xl mb-6 text-gray-300">This credential is verified and valid.</p>
        <div className="mb-8 text-gray-400">
          <p>Issued by: TrustEd University</p>
          <p>Issued on: June 15, 2023</p>
        </div>
        <div className="mb-8">
          <div className="w-64 h-64 bg-gray-700 mx-auto rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-gray-500">Document Placeholder</span>
          </div>
        </div>
        <Link href="/" className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
          Verify Another Credential
        </Link>
      </div>
    </div>
  )
}

