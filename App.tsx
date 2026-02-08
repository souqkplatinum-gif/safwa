import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Phone, Mail, MapPin,
  Facebook, Instagram, Twitter,
  ChevronUp, Star, Share2, Check
} from 'lucide-react';

import {
  NAV_ITEMS,
  SCHOOL_NAME,
  SCHOOL_LOCATION,
  SCHOOL_PHONE,
  SCHOOL_EMAIL
} from './constants';

/* =======================
   SIMPLE PAGES (TEMP)
   ======================= */

const PageWrapper = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-black text-[#161e46] mb-6">{title}</h1>
    <p className="text-lg text-gray-600">
      محتوى صفحة {title} سيتم استكماله قريبًا.
    </p>
  </div>
);

const Home = () => <PageWrapper title="الرئيسية" />;
const About = () => <PageWrapper title="من نحن" />;
const Stages = () => <PageWrapper title="المراحل الدراسية" />;
const Services = () => <PageWrapper title="الخدمات" />;
const News = () => <PageWrapper title="الأخبار" />;
const Gallery = () => <PageWrapper title="المعرض" />;
const Contact = () => <PageWrapper title="تواصل معنا" />;

/* =======================
   LOGO
   ======================= */

const SchoolLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const containerSize = size === "sm" ? "w-12 h-12" : size === "md" ? "w-16 h-16" : "w-24 h-24";
  const innerSize = size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-16 h-16";

  return (
    <div className={`${containerSize} relative bg-[#161e46] rounded-full border-2 border-white flex items-center justify-center`}>
      <div className={`${innerSize} bg-[#1fb1d1] rounded-full flex items-center justify-center`}>
        <span className="font-black text-[#161e46]">S.S</span>
      </div>
    </div>
  );
};

/* =======================
   HEADER
   ======================= */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white shadow' : 'bg-transparent'} transition`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-3">
          <SchoolLogo size="sm" />
          <span className="font-black text-lg text-[#161e46]">{SCHOOL_NAME}</span>
        </Link>

        <nav className="hidden lg:flex gap-6 font-bold">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'text-[#1fb1d1]' : ''}
            >
              {item.label}
            </Link>
          ))}
          <button onClick={handleShare}>
            {isCopied ? '✔ تم النسخ' : 'مشاركة'}
          </button>
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

/* =======================
   FOOTER
   ======================= */

const Footer = () => (
  <footer className="bg-[#0a0f25] text-white py-12 mt-20">
    <div className="container mx-auto px-4 text-center space-y-4">
      <p className="font-bold">{SCHOOL_LOCATION}</p>
      <p>{SCHOOL_PHONE}</p>
      <p>{SCHOOL_EMAIL}</p>
      <p className="text-sm opacity-60">
        © {new Date().getFullYear()} {SCHOOL_NAME}
      </p>
    </div>
  </footer>
);

/* =======================
   APP
   ======================= */

const App: React.FC = () => (
  <Router>
    <Header />
    <main className="pt-16 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 bg-[#1fb1d1] p-3 rounded-xl"
    >
      <ChevronUp />
    </button>
  </Router>
);

export default App;
