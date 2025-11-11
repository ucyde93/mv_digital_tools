
import React from 'react';
import { Header } from './components/Header';
import { TabbedPricing } from './components/TabbedPricing';
import { FAQ } from './components/FAQ';
import type { PricingCategory } from './types';

const pricingCategories: PricingCategory[] = [
  {
    name: 'Streaming',
    pricingTableId: 'prctbl_1SRtplEEfxP3B25SauM1aisV',
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'Productivity',
    pricingTableId: 'prctbl_1SRtt6EEfxP3B25SElGRlcl0',
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'Video and Photo Design',
    pricingTableId: 'prctbl_1SRtvoEEfxP3B25SxplmRNRg',
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'AI Tools',
    pricingTableId: 'prctbl_1SRtwrEEfxP3B25Sp7Zj83e7',
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'Financial',
    pricingTableId: 'prctbl_1SS8gJEEfxP3B25Sq0yajQiC',
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans isolate">
      {/* Animated Background */}
      <div className="background-aurora">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white fade-in"
              style={{ textShadow: '0 2px 20px rgba(192, 132, 252, 0.4)' }}
            >
              <span className="block">Premium Subscriptions.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Unbeatable Prices.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 fade-in fade-in-delay-1">
              Access top-tier tools in streaming, productivity, design, and AI for up to 90% off. Your favorite subscriptions, all in one place.
            </p>
          </div>

          <div className="mt-20 flex justify-center fade-in fade-in-delay-2">
            <TabbedPricing categories={pricingCategories} />
          </div>

          <div className="mt-20 md:mt-32 fade-in fade-in-delay-3">
            <FAQ />
          </div>
        </main>
        <footer className="w-full bg-black/30 border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-slate-400">
             <div className="flex justify-center space-x-6 mb-4">
                <a href="https://www.tiktok.com/@mv_digital_tools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">TikTok</a>
                <a href="https://www.facebook.com/mvDigitalTools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Facebook</a>
             </div>
              <p className="text-center">&copy; {new Date().getFullYear()} MV Digital Tools. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
