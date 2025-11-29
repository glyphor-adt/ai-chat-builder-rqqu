import React from 'react'

function Hero() {
  return (
    <header className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1690808513526-f0cd1e43820a?w=800&h=600')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">Unlock Limitless Conversations with AI</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in">Experience the future of communication with our AI-powered chat application. Get instant, intelligent responses to any question, and revolutionize the way you connect.</p>
          <div className="mt-12 flex justify-center gap-4 animate-slide-up">
            <a href="/signup" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg text-primary-foreground shadow-xl transition-all duration-300">Start Chatting Now</a>
            <a href="/features" className="border-2 border-gray-300 hover:border-blue-500 text-white px-6 py-3 rounded-xl transition-all duration-300">Explore Features</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
