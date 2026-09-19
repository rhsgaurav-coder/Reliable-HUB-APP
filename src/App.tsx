import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { App as CapApp } from '@capacitor/app';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { HomeTab } from './components/HomeTab';
import { InsuranceTab } from './components/InsuranceTab';
import { SpineTab } from './components/SpineTab';
import { SupportTab } from './components/SupportTab';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Set status bar theme
      StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
      StatusBar.setBackgroundColor({ color: '#0f172a' }).catch(() => {});

      // Android Hardware Back Button listener
      const backListener = CapApp.addListener('backButton', () => {
        if (activeTab !== 'home') {
          setActiveTab('home');
        } else {
          CapApp.exitApp();
        }
      });

      return () => {
        backListener.then((sub) => sub.remove()).catch(() => {});
      };
    }
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-slate-900">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Main Page Content */}
      <main className="page flex-1">
        <div className="wrap">
          {activeTab === 'home' && (
            <HomeTab onTabChange={handleTabChange} />
          )}

          {activeTab === 'insurance' && <InsuranceTab />}

          {activeTab === 'spine' && <SpineTab />}

          {activeTab === 'support' && <SupportTab />}

          <Footer />
        </div>
      </main>
    </div>
  );
}
