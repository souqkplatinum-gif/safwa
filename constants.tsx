
import { NavItem, AcademicStage, NewsItem, GalleryImage } from './types';

export const SCHOOL_NAME = "مدارس الصفوة الخاصة ببلبيس";
export const SCHOOL_LOCATION = "9H6W+R2W، بلبيس، محافظة الشرقية 7044842، مصر";
export const SCHOOL_PHONE = "+20 102 345 6789";
export const SCHOOL_EMAIL = "contact@alsafwa-school.eg";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=9H6W%2BR2W%2C+Belbes%2C+Al-Sharqia+Governorate+7044842";
export const GOOGLE_MAPS_EMBED_URL = "https://maps.google.com/maps?q=9H6W+R2W,Belbes,Egypt&t=&z=17&ie=UTF8&iwloc=&output=embed";

export const COLORS = {
  primary: "#161e46", // Dark Blue from Logo
  secondary: "#1fb1d1", // Cyan from Logo
  accent: "#ffdf00", // Star Yellow
};

export const NAV_ITEMS: NavItem[] = [
  { label: "الرئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  { label: "المراحل التعليمية", path: "/stages" },
  { label: "البرامج والخدمات", path: "/services" },
  { label: "الأخبار", path: "/news" },
  { label: "المعرض", path: "/gallery" },
  { label: "اتصل بنا", path: "/contact" },
];

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: "kg",
    title: "مرحلة رياض الأطفال (KG)",
    description: "نقدم في مدرسة الصفوة منهجاً متكاملاً لمرحلة رياض الأطفال يركز على التعلم من خلال اللعب والاكتشاف. نوفر بيئة محفزة تساعد الطفل على بناء شخصيته المستقلة وتطوير مهاراته اللغوية والاجتماعية في جو من الحب والأمان.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
    details: [
      "منهج 'Jolly Phonics' لتعليم اللغة الإنجليزية",
      "أنشطة 'Montessori' لتنمية المهارات الحركية",
      "برامج تحفيظ القرآن الكريم والآداب الإسلامية",
      "معامل ذكاء وألعاب تنموية متخصصة",
      "متابعة دورية مع أولياء الأمور عبر تطبيقنا الخاص"
    ]
  },
  {
    id: "primary",
    title: "المرحلة الابتدائية",
    description: "تعتبر المرحلة الابتدائية حجر الزاوية في مسيرة الطالب التعليمية. نحن نركز على إتقان اللغات والعلوم والرياضيات مع غرس القيم الأخلاقية والوطنية، مما يضمن تكوين طالب مثقف، واعٍ، ومتميز أكاديمياً.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    details: [
      "تدريس مناهج اللغات (Level Up) المتقدمة",
      "معامل علوم مجهزة بأحدث الوسائل التعليمية",
      "حصص تقوية دورية للطلاب الموهوبين والمتعثرين",
      "أنشطة الإذاعة المدرسية والصحافة المدرسية",
      "مسابقات حفظ القرآن الكريم والشعر العربي"
    ]
  },
  {
    id: "preparatory",
    title: "المرحلة الإعدادية",
    description: "في هذه المرحلة الانتقالية الهامة، نهدف إلى تعزيز قدرات الطلاب على البحث العلمي والتحليل المنطقي. نعد طلابنا لخوض غمار التحديات الأكاديمية مع التركيز على بناء الشخصية القيادية والمهارات التكنولوجية الحديثة.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    details: [
      "معامل حاسب آلي متطورة لتعليم البرمجة والروبوت",
      "برامج متخصصة في القيادة والذكاء العاطفي",
      "نادي العلوم للابتكار والاختراع",
      "ملاعب رياضية مجهزة (قدم، سلة، طائرة)",
      "تأهيل شامل لاختبارات الشهادة الإعدادية"
    ]
  },
  {
    id: "secondary",
    title: "المرحلة الثانوية",
    description: "رؤيتنا للمرحلة الثانوية تتجاوز مجرد التحصيل الدراسي؛ نحن نعد قادة المستقبل. نوفر بيئة أكاديمية مكثفة تساعد الطلاب على اختيار مساراتهم الجامعية بنجاح مع توفير الدعم النفسي والأكاديمي اللازم للتميز في الثانوية العامة.",
    image: "https://images.unsplash.com/photo-1541339907198-e08759dfeb3f?auto=format&fit=crop&q=80&w=800",
    details: [
      "نخبة من كبار مستشاري المواد بوزارة التربية والتعليم",
      "دورات تدريبية لاختبارات القدرات الجامعية",
      "قاعات محاضرات مجهزة بالسبورات الذكية",
      "متابعة دقيقة لمستوى التحصيل عبر الاختبارات الأسبوعية",
      "توجيه مهني لمساعدة الطلاب في اختيار الكليات"
    ]
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "انطلاق العام الدراسي الجديد والترحيب بطلابنا الجدد",
    date: "2024-09-15",
    summary: "استقبلت مدرسة الصفوة اليوم طلابها في جو من البهجة والسرور مع تنظيم حفل استقبال خاص لمرحلة رياض الأطفال.",
    image: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800",
    content: "شهد اليوم الدراسي الأول حضوراً مكثفاً من الطلاب وأولياء الأمور، حيث تم تنظيم جولات تعريفية بالمدرسة وتوزيع الهدايا على الطلاب الصغار لكسر حاجز الخوف وتحفيزهم على التعلم..."
  },
  {
    id: 2,
    title: "حصول المدرسة على درع التميز في مسابقة الروبوت المحلية",
    date: "2024-08-10",
    summary: "حصد فريق المدرسة للروبوتيكس المركز الأول في مسابقة محافظة الشرقية للابتكار العلمي والتقني.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800",
    content: "نجح طلابنا في تصميم نموذج آلي ذكي يساعد في فرز النفايات، مما أبهر لجنة التحكيم وأكد على جودة التدريب التقني الذي يتلقاه الطلاب في معامل مدرسة الصفوة..."
  },
  {
    id: 3,
    title: "تحديث أسطول النقل المدرسي بأحدث الحافلات المكيفة",
    date: "2024-07-05",
    summary: "في إطار سعينا لتوفير أقصى درجات الراحة والأمان، قامت إدارة المدرسة بإضافة 10 حافلات جديدة.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    content: "الحافلات الجديدة مجهزة بنظام تتبع GPS وكاميرات مراقبة داخلية، مع الالتزام بكافة معايير السلامة المرورية لضمان رحلة آمنة ومريحة لطلابنا من وإلى بلبيس والمناطق المجاورة..."
  }
];

export const GALLERY: GalleryImage[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", category: "activities", title: "حصة العلوم التفاعلية" },
  { id: 2, url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", category: "activities", title: "البطولة الرياضية السنوية" },
  { id: 3, url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800", category: "events", title: "حفل تخرج الدفعة الخامسة" },
  { id: 4, url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", category: "classes", title: "داخل الفصل الدراسي الحديث" },
  { id: 5, url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800", category: "activities", title: "مكتبة المدرسة" },
  { id: 6, url: "https://images.unsplash.com/photo-1564923630403-bb41fb2d99c3?auto=format&fit=crop&q=80&w=800", category: "classes", title: "معمل الحاسب الآلي" }
];

export const TESTIMONIALS = [
  {
    name: "أ/ محمد صبحي",
    role: "ولي أمر طالب بالمرحلة الابتدائية",
    text: "ما لمسته في مدرسة الصفوة هو الاهتمام الحقيقي بالتفاصيل وبناء شخصية الطفل قبل تعليمه. الكادر التعليمي متعاون جداً والبيئة آمنة تماماً."
  },
  {
    name: "د/ نهى العامري",
    role: "ولي أمر طالبة بمرحلة KG",
    text: "ابنتي أصبحت تحب المدرسة لدرجة كبيرة بفضل المعاملة الراقية والأنشطة الممتعة. شكراً لإدارة المدرسة على هذا المجهود الرائع."
  }
];
