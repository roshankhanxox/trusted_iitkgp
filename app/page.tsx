import Link from 'next/link'
import { LockClosedIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          TrustEd - Blockchain Credential Verification
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Securely issue, verify, and manage credentials on the blockchain.
        </p>
        <Link href="/issue" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Get Started
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<LockClosedIcon className="w-12 h-12 text-purple-400" />}
          title="Decentralized Verification"
          description="Ensure the authenticity of credentials through blockchain technology."
        />
        <FeatureCard
          icon={<ShieldCheckIcon className="w-12 h-12 text-purple-400" />}
          title="NFT-Based Credentials"
          description="Issue unique, non-fungible tokens representing verified credentials."
        />
        <FeatureCard
          icon={<GlobeAltIcon className="w-12 h-12 text-purple-400" />}
          title="Global Access"
          description="Access and verify credentials from anywhere in the world."
        />
      </section>

      <section className="text-center">
        <Link href="/issue" className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Issue Credential
        </Link>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-filter backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-purple-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

