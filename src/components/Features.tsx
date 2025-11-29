import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Empowering Your Conversations with AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="card p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Responses, Zero Wait Time</h3>
            <p className="text-gray-600">Get immediate answers to your questions, eliminating frustrating delays. Save valuable time and boost your productivity with our lightning-fast AI.</p>
          </div>

          {/* Feature 2 */}
          <div className="card p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Unbreakable Security, Total Privacy</h3>
            <p className="text-gray-600">Your data is protected with state-of-the-art encryption and strict privacy protocols. Communicate with confidence, knowing your information remains secure.</p>
          </div>

          {/* Feature 3 */}
          <div className="card p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <TrendingUp className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning, Exponential Growth</h3>
            <p className="text-gray-600">Our AI constantly evolves, learning from every interaction to provide increasingly accurate and insightful responses. Experience the power of AI that grows with you.</p>
          </div>

        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">Join thousands of developers and businesses already transforming their communication with our AI Chat Application.</p>
          <div className="mt-8 flex justify-center gap-8">
            {/* Placeholder Logos */}
            <span>Acme Corp</span>
            <span>Globex Industries</span>
            <span>Wayne Enterprises</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
