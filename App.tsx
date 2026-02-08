import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ChevronUp,
  Star,
  Share2,
  Check,
} from 'lucide-react';

import {
  NAV_ITEMS,
  SCHOOL_NAME,
  SCHOOL_LOCATION,
  SCHOOL_PHONE,
  SCHOOL_EMAIL,
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

const SchoolLogo = () => (
  <div className="w-12 h-12 bg-[#1fb1d1] rounded-full flex items-center justify-center">
    <span className="font-black text-[#161e46]">S.S</span>
  </div>
);

/* =======================
   HEADER
======================= */

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <SchoolLogo />
          <span className="font-black text-[#161e46]">{SCHOOL_NAME}</span>
        </Link>

        <nav className="hidden lg:flex gap-6 font-bold">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path
                  ? 'text-[#1fb1d1]'
                  : 'text-gray-700'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

/* =======================
   FOOTER
======================= */

const Footer = () => (
  <footer className="bg-[#0a0f25] text-white py-10 mt-20">
    <div className="container mx-auto px-4 text-center space-y-2">
      <p>{SCHOOL_LOCATION}</p>
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

const App = () => {
  return (
    <Router>
      <Header />

      <main className="pt-20 min-h-screen">
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
};

export default App;
