import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                MV Digital Tools
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://pay.mvdigital.tools/p/login/28EbJ16H93aDbjS3C7eEo00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transform hover:scale-105"
            >
              Manage Subscriptions
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
