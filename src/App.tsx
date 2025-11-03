
import React, { useEffect, createContext, useContext, useCallback, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingFAB } from './components/BookingFAB';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { SpaPage } from './pages/SpaPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { StyleguidePage } from './pages/StyleguidePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CookieBanner } from './components/CookieBanner';
import { ThemeProvider, useTheme } from './hooks/useTheme';
// FIX: Import BookingModal to be used in the app.
import { BookingModal } from './components/BookingModal';

// FIX: Updated AppContext to include modal state and controls.
const AppContext = createContext<{
  openBookingModal: () => void;
  closeBookingModal: () => void;
  isBookingModalOpen: boolean;
} | null>(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // A small timeout to allow the page to render before scrolling
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  // FIX: Added state to manage booking modal visibility.
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // FIX: Updated openBookingModal to open the in-app modal.
  const openBookingModal = useCallback(() => {
    setIsBookingModalOpen(true);
  }, []);

  // FIX: Added closeBookingModal to close the in-app modal.
  const closeBookingModal = useCallback(() => {
    setIsBookingModalOpen(false);
  }, []);


  // FIX: Provide modal state and controls through context.
  const appContextValue = { openBookingModal, closeBookingModal, isBookingModalOpen };

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] smooth-transition">
        <Header />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/habitaciones" element={<RoomsPage />} />
            <Route path="/habitaciones/:slug" element={<RoomDetailPage />} />
            <Route path="/spa-bienestar" element={<SpaPage />} />
            <Route path="/restaurante" element={<RestaurantPage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/styleguide" element={<StyleguidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <BookingFAB />
        <CookieBanner />
        {/* FIX: Render the BookingModal component. */}
        <BookingModal />
      </div>
    </AppContext.Provider>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <HashRouter>
      <AppContent />
    </HashRouter>
  </ThemeProvider>
);

export default App;