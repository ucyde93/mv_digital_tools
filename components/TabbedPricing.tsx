import React, { useState, useRef, useEffect } from 'react';
// FIX: Import `../types` for its side-effects to load global type augmentations for custom elements like <stripe-pricing-table>.
import '../types';
import type { PricingCategory } from '../types';

interface TabbedPricingProps {
  categories: PricingCategory[];
}

interface TabIndicatorStyle {
  left: number;
  width: number;
}

export const TabbedPricing: React.FC<TabbedPricingProps> = ({ categories }) => {
  const [activeCategoryName, setActiveCategoryName] = useState(categories[0]?.name);
  const [indicatorStyle, setIndicatorStyle] = useState<TabIndicatorStyle | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeTabIndex = categories.findIndex(c => c.name === activeCategoryName);
    const activeTab = tabsRef.current[activeTabIndex];
    const container = tabsContainerRef.current;

    if (activeTab && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  }, [activeCategoryName, categories]);

  const activeCategory = categories.find(c => c.name === activeCategoryName);

  return (
    <div className="w-full max-w-5xl">
      {/* Tab buttons */}
      <div ref={tabsContainerRef} className="relative flex justify-center border-b border-white/10 mb-10 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={category.name}
            // FIX: The ref callback function must not return a value. The original concise arrow function `el => tabsRef.current[index] = el` implicitly returned the result of the assignment, which is `el`. By adding curly braces, we create a function body that returns `undefined` (which is assignable to `void`).
            ref={el => { tabsRef.current[index] = el; }}
            onClick={() => setActiveCategoryName(category.name)}
            className={`relative px-3 md:px-5 py-4 text-sm md:text-base font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-t-md ${
              activeCategoryName === category.name
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
            aria-current={activeCategoryName === category.name ? 'page' : undefined}
          >
            {category.name}
          </button>
        ))}
        {indicatorStyle && (
          <div
            className="absolute bottom-[-1px] h-0.5 bg-indigo-400 transition-all duration-300 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              boxShadow: '0 0 10px 1px #818cf8, 0 0 20px 1px #818cf8'
            }}
          ></div>
        )}
      </div>

      {/* Pricing table content */}
      {activeCategory && (
        <div
          key={activeCategory.pricingTableId}
          className="bg-black/30 p-2 rounded-2xl shadow-2xl shadow-indigo-900/20 ring-1 ring-white/10 backdrop-blur-md fade-in"
        >
          <stripe-pricing-table
            pricing-table-id={activeCategory.pricingTableId}
            publishable-key={activeCategory.publishableKey}
          >
          </stripe-pricing-table>
        </div>
      )}
    </div>
  );
};
