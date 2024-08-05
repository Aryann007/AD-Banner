// app/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannerData from '../data/bannerData.json';
import styles from './page.module.css';
import { suprSend } from '../suprsend';

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  imageAttribution?: string;
}

export default function Home() {
  const [banners, setBanners] = useState<Banner[]>(bannerData);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  useEffect(() => {
    // Identify the user (replace 'user123' with actual user ID)
    suprSend.identify('user123', {
      email: 'user@example.com',
      // Add other user properties as needed
    });

    // Trigger a sample notification
    triggerNotification('Welcome to Ad Banners', 'Start creating and editing your ad banners now!');
  }, []);

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    triggerNotification('Editing Banner', `You are now editing the banner: ${banner.title}`);
  };

  const handleSave = (updatedBanner: Banner) => {
    setBanners(banners.map(b => b.id === updatedBanner.id ? updatedBanner : b));
    setEditingBanner(null);
    triggerNotification('Banner Saved', `The banner "${updatedBanner.title}" has been successfully updated.`);
  };

  const triggerNotification = (title: string, message: string) => {
    if (typeof window !== 'undefined' && window.ss) {
      window.ss.track('show_notification', {
        title,
        message,
        category: 'banner_update'
      });
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>AD BANNERS</h1>
      <div className={styles.bannerGrid}>
        {banners.map(banner => (
          <div className={styles.bannerWrapper} key={banner.id}>
            <BannerImageComp banner={banner} onEdit={() => handleEdit(banner)} />
          </div>
        ))}
      </div>
      {editingBanner && (
        <EditBannerTemplateBs 
          banner={editingBanner} 
          onSave={handleSave} 
          onClose={() => setEditingBanner(null)} 
        />
      )}
    </main>
  );
}