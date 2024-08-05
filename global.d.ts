// global.d.ts
declare module '@suprsend/react-inbox' {
    const SuprSendInbox: React.ComponentType<{
      workspaceKey: string;
      subscriberId: string;
      distinctId: string;
    }>;
    export default SuprSendInbox;
  }
  
  declare module '@suprsend/web-sdk' {
    class Suprsend {
      static init(workspaceKey: string, workspaceSecret: string): any;
      identify?(userId: string, traits: Record<string, any>): void;
    }
    export default Suprsend;
  }