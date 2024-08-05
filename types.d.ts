// types.d.ts
interface Window {
    ss?: {
      track: (event: string, properties: any) => void;
    };
  }