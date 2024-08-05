// components/NotificationInbox.tsx
'use client'

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { workspaceKey } from '../suprsend';
import styles from './NotificationInbox.module.css';

const DynamicSuprSendInbox = dynamic(
  () => import('@suprsend/react-inbox').then((mod) => mod.default),
  { ssr: false }
);

const NotificationInbox: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={styles.notificationWrapper}>
      <button 
        className={styles.notificationButton} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Notifications' : 'Open Notifications'}
      </button>
      {isOpen && (
        <div className={styles.notificationBox}>
          <DynamicSuprSendInbox 
            workspaceKey={workspaceKey}
            subscriberId="user123"
            distinctId="user123"
          />
        </div>
      )}
    </div>
  );
};

export default NotificationInbox;