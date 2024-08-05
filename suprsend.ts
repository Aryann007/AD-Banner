// suprsend.ts
import Suprsend from '@suprsend/web-sdk';

const WORKSPACE_KEY = process.env.NEXT_PUBLIC_SUPRSEND_WORKSPACE_KEY || '';
const WORKSPACE_SECRET = process.env.SUPRSEND_WORKSPACE_SECRET || '';

let suprSendInstance: any = null;

if (typeof window !== 'undefined') {
  suprSendInstance = Suprsend.init(WORKSPACE_KEY, WORKSPACE_SECRET);
}

export const suprSend = {
  identify: (userId: string, traits: Record<string, any>) => {
    if (suprSendInstance && typeof suprSendInstance.identify === 'function') {
      suprSendInstance.identify(userId, traits);
    } else {
      console.error('SuprSend identify method is not available');
    }
  },
};

export const workspaceKey = WORKSPACE_KEY;