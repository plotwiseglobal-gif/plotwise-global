import PremiumNavbar from "@/components/PremiumNavbar";

const PremiumDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <PremiumNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Premium Navbar Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the smooth animations and interactions inspired by ProductPursuit's elegant navigation design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-200">
              Get Started
            </button>
            <button className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections for Scroll Testing */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Smooth Animations</h3>
              <p className="text-gray-300">
                Premium transitions with framer-motion for all interactions, from hover states to scroll behaviors.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Responsive Design</h3>
              <p className="text-gray-300">
                Fully responsive navigation with elegant mobile menu and touch-friendly interactions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Scroll Effects</h3>
              <p className="text-gray-300">
                Dynamic navbar that responds to scroll with backdrop blur and size transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Scroll to Test</h2>
          <p className="text-gray-300 text-center mb-12">
            Scroll down to see the navbar shrink and add backdrop blur effects.
          </p>
          <div className="space-y-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Section {i + 1}</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Use?</h2>
          <p className="text-xl text-gray-300 mb-8">
            This premium navbar component is ready to be integrated into your project.
          </p>
          <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-200">
            Implement Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default PremiumDemo;
