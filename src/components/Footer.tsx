import React from 'react'
import { Mail, Twitter, GitHub, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-100">AI Chat</a></li>
              <li><a href="#" className="hover:text-gray-100">Solutions</a></li>
              <li><a href="#" className="hover:text-gray-100">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-100">Updates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-100">About Us</a></li>
              <li><a href="#" className="hover:text-gray-100">Careers</a></li>
              <li><a href="#" className="hover:text-gray-100">Contact</a></li>
              <li><a href="#" className="hover:text-gray-100">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-100">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-100">Support</a></li>
              <li><a href="#" className="hover:text-gray-100">Tutorials</a></li>
              <li><a href="#" className="hover:text-gray-100">API</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest AI insights and product updates.</p>
            <div className="flex">
              <input type="email" placeholder="Your Email" className="bg-gray-800 text-gray-400 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition-colors duration-300">Subscribe</button>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p>&copy; 2024 AI Chat Application. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-100"><Twitter /></a>
            <a href="#" className="hover:text-gray-100"><GitHub /></a>
            <a href="#" className="hover:text-gray-100"><Linkedin /></a>
            <a href="#" className="hover:text-gray-100"><Mail /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
