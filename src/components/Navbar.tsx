import React from 'react';
import { TabType } from '../types';
import { Home, ShieldCheck, Smartphone, Headphones } from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav className="rhs-nav" id="main-navigation">
      <div className="rhs-nav-inner">
        {/* Top Branding Row */}
        <div className="rhs-nav-top-row">
          <a
            className="rhs-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onTabChange('home');
            }}
            title="Reliable HR Solutions Home"
          >
            <div className="rhs-logomark">RHS</div>
            <div className="rhs-logotype">
              <span className="rhs-logotype-main">RELIABLE HR SOLUTIONS</span>
              <span className="rhs-logotype-sub">Employee Hub · Self Service</span>
            </div>
          </a>

          {/* Builder Credits in Header (Desktop & Mobile) */}
          <div className="rhs-nav-quick-actions">
            <div className="brand-badge flex items-center">
              <div className="monogram">GP</div>
              <div className="btext">
                <b>GAURAV PATIL</b>
                <span>Build by Gaurav Patil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Strip (4 Core Tabs) */}
        <div className="hub-tabs" id="hubTabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'home'}
            className={`hub-tab ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => onTabChange('home')}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            <span>Home</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'insurance'}
            className={`hub-tab ${activeTab === 'insurance' ? 'active' : ''}`}
            onClick={() => onTabChange('insurance')}
          >
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>Insurance</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'spine'}
            className={`hub-tab ${activeTab === 'spine' ? 'active' : ''}`}
            onClick={() => onTabChange('spine')}
          >
            <Smartphone className="w-4 h-4 flex-shrink-0" />
            <span>Spine HR</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'support'}
            className={`hub-tab ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => onTabChange('support')}
          >
            <Headphones className="w-4 h-4 flex-shrink-0" />
            <span>Support</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
