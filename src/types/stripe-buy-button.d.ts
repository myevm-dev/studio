// src/types/stripe-buy-button.d.ts
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'stripe-buy-button': any; // This will allow usage of the custom element without TypeScript errors
      }
    }
  }
  
  export {};
  