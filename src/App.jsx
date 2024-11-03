import React, { useState } from 'react';
import { Rocket, Sparkles, Wallet, Share2, Search, TrendingUp, Fire, Plus } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Mock data for memes and trending
  const trendingMemes = [
    { id: 1, title: 'Web3 Life', creator: 'CryptoKing', likes: 1234 },
    { id: 2, title: 'DeFi Dreams', creator: 'BlockchainBro', likes: 987 },
    { id: 3, title: 'NFT Life', creator: 'TokenMaster', likes: 2345 }
  ];

  // Navigation Component
  const Navigation = () => (
    <nav className="relative z-10 flex justify-between items-center p-6 bg-black/20 backdrop-blur-lg">
      <div className="flex items-center space-x-2">
        <Rocket className="w-8 h-8 text-purple-400 animate-bounce" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          AIA-MEME
        </span>
      </div>
      
      <div className="flex space-x-6">
        <button 
          onClick={() => setActiveSection('home')}
          className={`px-4 py-2 rounded-full transition-colors ${activeSection === 'home' ? 'bg-purple-500/20' : 'hover:bg-white/10'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setActiveSection('trending')}
          className={`px-4 py-2 rounded-full transition-colors ${activeSection === 'trending' ? 'bg-purple-500/20' : 'hover:bg-white/10'}`}
        >
          Trending
        </button>
        <button 
          onClick={() => setActiveSection('create')}
          className={`px-4 py-2 rounded-full transition-colors ${activeSection === 'create' ? 'bg-purple-500/20' : 'hover:bg-white/10'}`}
        >
          Create
        </button>
      </div>

      <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg">
        <Wallet className="w-5 h-5" />
        <span>Connect Wallet</span>
      </button>
    </nav>
  );

  // Home Section
  const HomeSection = () => (
    <main className="relative z-10 container mx-auto px-6 pt-20 pb-32">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight animate-fade-in">
          Share Your
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Web3 Memes
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          The next-gen platform for crypto memers to share, trade, and earn from their dankest creations
        </p>

        <div className="flex justify-center space-x-6">
          <button className="group flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg">
            <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Start Sharing</span>
          </button>
          <button className="flex items-center space-x-2 border-2 border-purple-500/50 px-8 py-3 rounded-full hover:bg-purple-500/10 transition-colors duration-200">
            <Sparkles className="w-5 h-5" />
            <span>Explore Memes</span>
          </button>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
            🚀
          </div>
          <h3 className="text-xl font-bold mb-2">Launch Your Memes</h3>
          <p className="text-gray-400">Create, share and monetize your crypto memes instantly</p>
        </div>
        
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
            💎
          </div>
          <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
          <p className="text-gray-400">Get tokens for your viral memes and engagement</p>
        </div>
        
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
            🌐
          </div>
          <h3 className="text-xl font-bold mb-2">Join Community</h3>
          <p className="text-gray-400">Connect with fellow memers in the Web3 space</p>
        </div>
      </div>
    </main>
  );

  // Trending Section
  const TrendingSection = () => (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Fire className="text-orange-500" />
          Trending Memes
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search memes..."
            className="bg-white/10 rounded-full py-2 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-4 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingMemes.map(meme => (
          <div key={meme.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-200">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg aspect-video mb-4"></div>
            <h3 className="text-xl font-bold mb-2">{meme.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">@{meme.creator}</span>
              <span className="flex items-center gap-1">
                <span className="text-red-500">❤️</span> {meme.likes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Create Section
  const CreateSection = () => (
    <div className="container mx-auto px-6 py-12 max-w-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Create Your Meme</h2>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 mb-8">
        <div className="border-2 border-dashed border-purple-500/50 rounded-lg p-8 text-center">
          <Plus className="w-12 h-12 mx-auto mb-4 text-purple-400" />
          <h3 className="text-xl font-semibold mb-2">Upload your meme</h3>
          <p className="text-gray-400 mb-4">Supports JPG, PNG, GIF (Max 10MB)</p>
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full transition-colors">
            Choose File
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            className="w-full bg-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Give your meme a catchy title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            className="w-full bg-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
            placeholder="Tell us about your meme..."
          />
        </div>

        <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-full hover:shadow-lg transition-shadow">
          Publish Meme
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-hidden">
      {/* Floating Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 -top-32 -left-16 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute w-96 h-96 top-1/2 -right-48 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <Navigation />
      
      {activeSection === 'home' && <HomeSection />}
      {activeSection === 'trending' && <TrendingSection />}
      {activeSection === 'create' && <CreateSection />}
    </div>
  );
}

export default App;