import React, { useState } from 'react';
// FIX: Add .tsx extension to fix module resolution error.
import Sidebar from './Sidebar.tsx';
// FIX: Add .tsx extension to fix module resolution error.
import Header from './Header.tsx';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const toggleBanner = () => {
    setIsBannerVisible(prev => !prev);
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setIsOpen={setIsSidebarOpen} toggleBanner={toggleBanner} />
        {isBannerVisible && (
          <div className="bg-red-500 text-white text-center p-3 text-sm font-semibold animate-fade-in-down">
            ¡Envío gratis en todos los pedidos de la Campaña 13!
          </div>
        )}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
       {isSidebarOpen && (
          <div
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          ></div>
      )}
    </div>
  );
};

export default MainLayout;