declare global {
  interface Window {
    dataLayer?: (Record<string, any> | unknown[])[];
    gtag?: (...args: any[]) => void;
  }
}

export {};
