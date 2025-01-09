'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function IssuePage() {
  const [formData, setFormData] = useState({
    issuerName: '',
    credentialType: '',
    recipientName: '',
    recipientWallet: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Issue Credential NFT
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg shadow-lg">
        <div>
          <label htmlFor="issuerName" className="block mb-2 text-sm font-medium text-gray-300">Issuer Name</label>
          <input
            type="text"
            id="issuerName"
            name="issuerName"
            value={formData.issuerName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="credentialType" className="block mb-2 text-sm font-medium text-gray-300">Credential Type</label>
          <select
            id="credentialType"
            name="credentialType"
            value={formData.credentialType}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300"
            required
          >
            <option value="">Select a type</option>
            <option value="degree">Degree</option>
            <option value="certificate">Certificate</option>
            <option value="license">License</option>
          </select>
        </div>
        <div>
          <label htmlFor="recipientName" className="block mb-2 text-sm font-medium text-gray-300">Recipient's Name</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="recipientWallet" className="block mb-2 text-sm font-medium text-gray-300">Recipient's Wallet Address</label>
          <input
            type="text"
            id="recipientWallet"
            name="recipientWallet"
            value={formData.recipientWallet}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="document" className="block mb-2 text-sm font-medium text-gray-300">Upload Document</label>
          <input
            type="file"
            id="document"
            name="document"
            className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-300">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <Link href="/" className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300 shadow-md hover:shadow-lg">
            Cancel
          </Link>
          <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition-all duration-300 shadow-md hover:shadow-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

