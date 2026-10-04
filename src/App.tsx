import { useEffect, useState, type ReactNode } from "react";

const whatsappUrl =
  "https://wa.me/97433861144?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%BA%D8%B3%D9%8A%D9%84";
const mapUrl = "https://maps.app.goo.gl/av94yDMGChQJem8d7?g_st=awb";

type IconName =
  | "arrow"
  | "check"
  | "clock"
  | "delivery"
  | "location"
  | "mail"
  | "menu"
  | "phone"
  | "sparkle"
  | "whatsapp"
  | "x";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    delivery: (
      <>
        <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-4-1.5-6.5-4-8-8l2-2-2-4Z" />,
    sparkle: <path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />,
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
        <path d="M8 7.8c.4 4.1 3.8 7.3 8 7.7M8 7.8l2 3-1 1M16 15.5l-3-1.8-1 1" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

const steps = [
  ["٠١", "إزالة الغبار", "التخلص من الغبار والأتربة العالقة بعناية."],
  ["٠٢", "معالجة البقع", "فحص السجادة ومعالجة البقع حسب نوع النسيج."],
  ["٠٣", "التطهير بالماء", "تطهير شامل للسجاد باستخدام الماء الجاري."],
  ["٠٤", "تنظيف عميق", "غسيل بالشامبو والمواد المخصصة بأحدث المكائن."],
  ["٠٥", "التنشيف الآلي", "تنشيف بنسبة ٩٠٪ داخل مكائن الطرد الحديثة."],
  ["٠٦", "تجفيف نهائي", "إزالة الرطوبة المتبقية في الظل بهواء المراوح."],
];

const gallery = [
  { src: "/zarbia/majlis-rug.jpg", alt: "سجاد مجلس نظيف بعد خدمة زربية", className: "gallery-tall" },
  { src: "/zarbia/red-rug.jpg", alt: "سجادة حمراء بعد التنظيف", className: "" },
  { src: "/zarbia/clean-home.jpg", alt: "سجادة فاتحة نظيفة في غرفة المعيشة", className: "gallery-wide" },
  { src: "/zarbia/outdoor-rug.jpg", alt: "سجاد مجلس خارجي بعد التنظيف", className: "" },
  { src: "/zarbia/chair-rug.jpg", alt: "سجادة فاتحة أسفل كرسي", className: "" },
  { src: "/zarbia/worker.jpg", alt: "فني زربية يعالج سجادة بعناية", className: "gallery-wide" },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`logo ${inverse ? "logo-inverse" : ""}`} href="#top" aria-label="زربية - الصفحة الرئيسية">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>زربية</strong>
        <small>لغسيل السجاد والملابس</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  return (
    <main id="top">
      <header className="site-header">
        <div className="cr-banner">CR 71953</div>
        <div className="nav-wrap">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="التنقل الرئيسي">
            <a href="#services" onClick={() => setMenuOpen(false)}>خدماتنا</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>طريقة العمل</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>أعمالنا</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
          </nav>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={19} />
            اطلب الخدمة
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-photo" role="img" aria-label="سجاد نظيف في منزل أنيق" />
        <div className="hero-shade" />
        <div className="hero-pattern" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="kicker"><Icon name="sparkle" size={17} /> عناية متخصصة منذ ١٩٩٥</p>
            <h1>نُعيد لسجادتك<br /><em>رونقها من جديد</em></h1>
            <p className="hero-lead">
              غسيل آلي متكامل للسجاد والمفروشات في ٦ خطوات دقيقة، مع خدمة الاستلام والتسليم إلى باب منزلك.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                اطلب عبر واتساب
                <Icon name="whatsapp" />
              </a>
              <a className="button button-ghost" href="#process">
                اكتشف طريقتنا
                <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="hero-facts">
              <span><Icon name="delivery" /> استلام وتسليم</span>
              <span><Icon name="clock" /> يومياً ٩ ص — ١٠ م</span>
            </div>
          </div>
        </div>
        <a className="offer-card" href={whatsappUrl} target="_blank" rel="noreferrer">
          <span>عرض الشتاء</span>
          <strong>٥ قطع <b>٥٠</b> ريال</strong>
          <small>بطانيات ولحاف بأي حجم<br />شامل الاستلام والتسليم</small>
          <i><Icon name="arrow" size={18} /></i>
        </a>
      </section>

      <section className="trust-strip" aria-label="مميزات الخدمة">
        <div className="shell trust-grid">
          <div><strong>٦</strong><span>مراحل تنظيف دقيقة</span></div>
          <div><strong>٩٠٪</strong><span>تنشيف آلي بالمكائن</span></div>
          <div><strong>٥–٦</strong><span>أيام للاستلام والتسليم</span></div>
          <div><strong>يومياً</strong><span>من ٩ صباحاً إلى ١٠ مساءً</span></div>
        </div>
      </section>

      <section className="services section shell" id="services">
        <div className="section-heading">
          <div>
            <p className="kicker dark"><Icon name="sparkle" size={17} /> خدمات متكاملة</p>
            <h2>عناية تُناسب<br />كل نسيج</h2>
          </div>
          <p>نستخدم مكائن أوتوماتيكية ومواد تنظيف مختارة لنمنح كل قطعة العناية التي تستحقها، من أول فحص وحتى عودتها نظيفة إلى منزلك.</p>
        </div>
        <div className="service-grid">
          <article className="service-card service-main">
            <img src="/zarbia/washing-machine.jpg" alt="ماكينة زربية الأوتوماتيكية أثناء غسيل السجاد" />
            <div>
              <span>الخدمة الرئيسية</span>
              <h3>غسيل السجاد بالمكائن</h3>
              <p>تنظيف عميق وتطهير وتجفيف آلي يعيد للسجاد ألوانه ونظافته.</p>
            </div>
          </article>
          <article className="service-card">
            <div className="service-icon"><Icon name="sparkle" size={28} /></div>
            <span>عناية منزلية</span>
            <h3>المفروشات والبطانيات</h3>
            <p>غسيل آمن للبطانيات واللحاف والمفروشات بمختلف الأحجام.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">اطلب الخدمة <Icon name="arrow" size={17} /></a>
          </article>
          <article className="service-card">
            <div className="service-icon"><Icon name="delivery" size={28} /></div>
            <span>راحتك أولاً</span>
            <h3>استلام وتسليم مجاني</h3>
            <p>أرسل لنا عنوانك الوطني، وسنصل إليك لاستلام طلبك وإعادته.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">أرسل موقعك <Icon name="arrow" size={17} /></a>
          </article>
        </div>
      </section>

      <section className="process-section section" id="process">
        <div className="shell process-layout">
          <div className="process-visual">
            <video autoPlay muted loop playsInline poster="/zarbia/washing-machine.jpg">
              <source src="/zarbia/process.mp4" type="video/mp4" />
            </video>
            <div className="process-caption"><span>من داخل المغسلة</span><strong>دقة في كل تفصيلة</strong></div>
          </div>
          <div className="process-copy">
            <p className="kicker"><Icon name="sparkle" size={17} /> كيف نعمل</p>
            <h2>ست خطوات،<br />والنتيجة كأنها جديدة</h2>
            <div className="steps">
              {steps.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section section shell" id="gallery">
        <div className="section-heading gallery-heading">
          <div>
            <p className="kicker dark"><Icon name="sparkle" size={17} /> من أعمالنا</p>
            <h2>نظافة تُرى<br />وتُلمس</h2>
          </div>
          <p>صور حقيقية من أعمالنا لبيوت ومجالس عملائنا. نهتم بالتفاصيل لنُعيد لكل سجادة رونقها وملمسها الجميل.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <figure className={image.className} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="delivery-section">
        <div className="shell delivery-layout">
          <div className="delivery-copy">
            <p className="kicker dark"><Icon name="delivery" size={18} /> نصل إليك</p>
            <h2>من باب منزلك<br />وإليه</h2>
            <p>لا داعي لنقل السجاد بنفسك. أرسل لنا اللوحة الزرقاء «العنوان الوطني» عبر واتساب، وفريقنا يتولى الباقي.</p>
            <ul>
              <li><Icon name="check" size={18} /> سيارات مجهزة للاستلام والتسليم</li>
              <li><Icon name="check" size={18} /> عناية كاملة أثناء النقل</li>
              <li><Icon name="check" size={18} /> التسليم خلال ٥ إلى ٦ أيام</li>
            </ul>
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              أرسل عنوانك الآن <Icon name="whatsapp" />
            </a>
          </div>
          <div className="truck-wrap">
            <div className="truck-number">٣٣٨٦١١٤٤</div>
            <img src="/zarbia/delivery-truck.jpg" alt="سيارة زربية المخصصة للاستلام والتسليم" />
          </div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="shell contact-layout">
          <div>
            <p className="kicker"><Icon name="sparkle" size={17} /> نحن جاهزون لخدمتكم</p>
            <h2>سجادتك تستحق<br />عناية زربية</h2>
          </div>
          <div className="contact-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <span><Icon name="whatsapp" /></span>
              <small>واتساب الأعمال</small>
              <strong dir="ltr">3386 1144</strong>
              <i><Icon name="arrow" /></i>
            </a>
            <a href="tel:+97450435533">
              <span><Icon name="phone" /></span>
              <small>اتصل بنا</small>
              <strong dir="ltr">5043 5533</strong>
              <i><Icon name="arrow" /></i>
            </a>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <span><Icon name="location" /></span>
              <small>موقع المغسلة</small>
              <strong>مبنى ٧، شارع ٦٩٧<br />شارع أبها، منطقة ٧٩</strong>
              <i><Icon name="arrow" /></i>
            </a>
            <a href="mailto:zarbia.services@gmail.com">
              <span><Icon name="mail" /></span>
              <small>البريد الإلكتروني</small>
              <strong className="email">zarbia.services@gmail.com</strong>
              <i><Icon name="arrow" /></i>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <Logo inverse />
          <p>غسيل احترافي للسجاد والمفروشات بالمكائن الأوتوماتيكية، مع خدمة الاستلام والتسليم.</p>
          <div className="footer-links">
            <a href="#services">خدماتنا</a>
            <a href="#process">طريقة العمل</a>
            <a href="#gallery">أعمالنا</a>
            <a href={mapUrl} target="_blank" rel="noreferrer">موقعنا</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} شركة زربية لغسيل السجاد</span>
          <span>
            Made by @Xenosys Qatar,{" "}
            <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
              Xenosysweb.com
            </a>
            , +97470643918
          </span>
          <span>CR 71953</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب">
        <Icon name="whatsapp" size={28} />
        <span>اطلب الآن</span>
      </a>
    </main>
  );
}

export default App;
