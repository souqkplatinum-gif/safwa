
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronUp, Star, Share2, Check } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_NAME, COLORS, SCHOOL_LOCATION, SCHOOL_PHONE, SCHOOL_EMAIL } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Stages from './pages/Stages';
import Services from './pages/Services';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const SchoolLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const containerSize = size === "sm" ? "w-12 h-12" : size === "md" ? "w-16 h-16" : "w-24 h-24";
  const innerSize = size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-16 h-16";
  const textSize = size === "sm" ? "text-[6px]" : size === "md" ? "text-[8px]" : "text-[12px]";
  const centerTextSize = size === "sm" ? "text-[10px]" : size === "md" ? "text-[14px]" : "text-[20px]";
  const starSize = size === "sm" ? 6 : size === "md" ? 8 : 12;

  return (
    <div className={`${containerSize} relative bg-[#161e46] rounded-full border-2 border-white shadow-xl flex items-center justify-center overflow-hidden`}>
      <div className={`absolute top-1 text-white font-bold uppercase ${textSize} tracking-tighter`}>
        ElSafwa
      </div>
      <div className="absolute left-1 top-1/2 -translate-y-1/2">
        <Star size={starSize} fill="#ffdf00" color="#ffdf00" />
      </div>
      <div className="absolute right-1 top-1/2 -translate-y-1/2">
        <Star size={starSize} fill="#ffdf00" color="#ffdf00" />
      </div>
      <div className={`${innerSize} bg-[#1fb1d1] rounded-full flex items-center justify-center border border-blue-900/20`}>
        <span className={`font-black text-[#161e46] ${centerTextSize} tracking-tighter`}>S.S</span>
      </div>
      <div className={`absolute bottom-1 text-[#1fb1d1] font-bold ${textSize} tracking-wider uppercase`}>
        School
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <SchoolLogo size={isScrolled ? "sm" : "md"} />
          <div className="flex flex-col">
            <span className={`font-black text-xl md:text-2xl transition-colors ${isScrolled ? 'text-[#161e46]' : 'text-white'}`}>{SCHOOL_NAME}</span>
            {!isScrolled && <span className="text-xs font-bold text-[#1fb1d1] uppercase tracking-widest hidden md:block">Excellence • Leadership • Creativity</span>}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-bold hover:text-[#1fb1d1] transition-colors ${location.pathname === item.path ? 'text-[#1fb1d1] border-b-2 border-[#1fb1d1]' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={handleShare}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${isScrolled ? 'bg-blue-50 text-blue-900 hover:bg-blue-100' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}
          >
            {isCopied ? <Check size={18} className="text-emerald-500" /> : <Share2 size={18} />}
            <span>{isCopied ? 'تم النسخ!' : 'مشاركة'}</span>
          </button>
          <Link to="/contact" className="bg-[#1fb1d1] text-[#161e46] px-6 py-2 rounded-full font-black hover:bg-white hover:text-[#161e46] transition-all shadow-lg">التسجيل الآن</Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={handleShare} className={`p-2 rounded-full ${isScrolled ? 'bg-blue-50 text-blue-900' : 'bg-white/10 text-white'}`}>
            {isCopied ? <Check size={24} className="text-emerald-400" /> : <Share2 size={24} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 ${isScrolled ? 'text-[#161e46]' : 'text-white'}`}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-[#161e46] z-50 transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between p-6 items-center border-b border-blue-900/30">
          <div className="flex items-center gap-3">
             <SchoolLogo size="sm" />
             <span className="text-white font-bold text-lg">{SCHOOL_NAME}</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="text-white"><X size={32} /></button>
        </div>
        <div className="flex flex-col items-center gap-8 pt-12 text-center px-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold hover:text-[#1fb1d1]">{item.label}</Link>
          ))}
          <button onClick={() => { handleShare(); setIsMenuOpen(false); }} className="flex items-center gap-3 text-white text-xl font-bold bg-white/10 px-8 py-3 rounded-2xl"><Share2 /> مشاركة الرابط</button>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-[#1fb1d1] text-[#161e46] px-10 py-4 rounded-full text-xl font-black shadow-2xl">اتصل بنا</Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0f25] text-white pt-20 pb-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <SchoolLogo size="md" />
          <span className="font-black text-2xl">{SCHOOL_NAME}</span>
        </div>
        <p className="text-blue-200/70 leading-loose mb-8 text-lg">نسعى في مدرسة الصفوة لتقديم بيئة تعليمية محفزة تدمج بين التطور التكنولوجي والقيم الأخلاقية الراسخة لبناء جيل قادر على المنافسة عالمياً.</p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter].map((Icon, idx) => (
            <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-[#161e46] border border-blue-900 flex items-center justify-center hover:bg-[#1fb1d1] hover:text-[#161e46] transition-all"><Icon size={24} /></a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-black mb-8 border-r-4 border-[#1fb1d1] pr-4">روابط سريعة</h4>
        <ul className="flex flex-col gap-5">
          {NAV_ITEMS.map(item => <li key={item.path}><Link to={item.path} className="text-blue-200/70 hover:text-[#1fb1d1] flex items-center gap-3 font-bold"><span>→</span> {item.label}</Link></li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-black mb-8 border-r-4 border-[#1fb1d1] pr-4">المراحل الدراسية</h4>
        <ul className="flex flex-col gap-5 text-blue-200/70 font-bold">
          {["رياض الأطفال (KG)", "المرحلة الابتدائية", "المرحلة الإعدادية", "المرحلة الثانوية"].map(s => <li key={s} className="hover:text-[#1fb1d1] cursor-pointer">{s}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-black mb-8 border-r-4 border-[#1fb1d1] pr-4">تواصل معنا</h4>
        <ul className="flex flex-col gap-6 text-blue-200/70">
          <li className="flex gap-4"><MapPin className="text-[#1fb1d1]" /> <span className="text-sm font-bold">{SCHOOL_LOCATION}</span></li>
          <li className="flex gap-4" dir="ltr"><Phone className="text-[#1fb1d1]" /> <span className="font-bold">{SCHOOL_PHONE}</span></li>
          <li className="flex gap-4"><Mail className="text-[#1fb1d1]" /> <span className="font-bold">{SCHOOL_EMAIL}</span></li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center text-blue-400/40 text-sm font-bold">
      &copy; {new Date().getFullYear()} {SCHOOL_NAME}. تم التصميم والبرمجة بكل حب لأبناء بلبيس.
    </div>
  </footer>
);

const App: React.FC = () => (
  <Router>
    <div className="relative">
      <Header />
      <div className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 left-8 bg-[#1fb1d1] text-[#161e46] p-4 rounded-2xl shadow-2xl transition-all hover:scale-110"><ChevronUp size={28} /></button>
    </div>
  </Router>
);

export default App;
