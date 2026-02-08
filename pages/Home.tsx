import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  GraduationCap,
  Users,
  BookOpen,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a0f25]/80" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#1fb1d1]/20 text-[#1fb1d1] font-bold">
            العام الدراسي 2024 / 2025
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            أهلًا بكم في <br />
            <span className="text-[#1fb1d1]">
              مدارس الصفوة الخاصة ببلبيس
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            نصنع المستقبل بالعلم والقيم، ونبني أجيالًا قادرة على القيادة
            والإبداع في بيئة تعليمية متكاملة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#1fb1d1] text-[#161e46] px-8 py-4 rounded-full font-black text-lg hover:bg-white transition"
            >
              سجّل طفلك الآن
            </Link>
            <Link
              to="/stages"
              className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#161e46] transition"
            >
              المراحل التعليمية
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-[#161e46] mb-16">
            لماذا تختار مدارس الصفوة؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature
              icon={<GraduationCap size={42} />}
              title="تعليم متميز"
              text="مناهج حديثة تجمع بين التعليم الأكاديمي وبناء الشخصية."
            />
            <Feature
              icon={<Users size={42} />}
              title="هيئة تدريس قوية"
              text="نخبة من أفضل المعلمين ذوي الخبرة والكفاءة."
            />
            <Feature
              icon={<BookOpen size={42} />}
              title="بيئة تعليمية متكاملة"
              text="فصول مجهزة، أنشطة، ورعاية كاملة للطلاب."
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h3 className="text-3xl font-black text-[#161e46] mb-6">
              عن مدارس الصفوة
            </h3>
            <p className="text-gray-700 leading-loose text-lg mb-6">
              مدارس الصفوة الخاصة ببلبيس تهدف إلى تقديم تعليم عصري
              يواكب التطور، مع ترسيخ القيم الأخلاقية والانضباط،
              لإعداد جيل واعٍ وقادر على المنافسة.
            </p>

            <ul className="space-y-4">
              {[
                "مراحل تعليمية متكاملة",
                "اهتمام فردي بالطالب",
                "أنشطة رياضية وثقافية",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-800 font-bold"
                >
                  <CheckCircle className="text-[#1fb1d1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
              alt="school"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#161e46] text-white text-center">
        <div className="container mx-auto px-6">
          <Star className="mx-auto mb-6 text-[#1fb1d1]" size={48} />
          <h3 className="text-3xl md:text-4xl font-black mb-6">
            مستقبلك يبدأ من هنا
          </h3>
          <p className="text-lg text-gray-300 mb-10">
            انضم إلى مجتمع الصفوة التعليمي وابدأ رحلة تعليمية مميزة لطفلك.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-[#1fb1d1] text-[#161e46] px-10 py-4 rounded-full font-black text-lg hover:bg-white transition"
          >
            تواصل معنا الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="text-center p-8 rounded-3xl border hover:shadow-xl transition">
    <div className="flex justify-center mb-6 text-[#1fb1d1]">{icon}</div>
    <h4 className="text-xl font-black text-[#161e46] mb-3">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

export default Home;
