const Home = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#161e46]/70"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block bg-yellow-500 text-[#161e46] px-6 py-2 rounded-full font-bold mb-6">
          بدء التقديم للعام الدراسي 2025 / 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
          أهلًا بكم في <br />
          <span className="text-yellow-400">
            مدارس الصفوة الخاصة ببلبيس
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
          نصنع المستقبل بالعلم والقيم، ونبني أجيالًا قادرة على القيادة
          والإبداع في بيئة تعليمية متكاملة وحديثة.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="#contact"
            className="bg-yellow-500 text-[#161e46] px-10 py-4 rounded-full font-black text-lg hover:bg-white transition"
          >
            سجل طفلك الآن
          </a>

          <a
            href="#stages"
            className="border-2 border-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#161e46] transition"
          >
            اكتشف مراحلنا التعليمية
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
