// FIX: Import React to make its types available for JSX namespace augmentation.
import React from 'react';

export interface PricingCategory {
  name: string;
  pricingTableId: string;
  publishableKey: string;
}

// FIX: Wrap in `declare global` to correctly augment the global JSX namespace from within a module.
// Extend JSX to recognize the Stripe custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'pricing-table-id': string;
        'publishable-key': string;
      };
    }
  }
}
