import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Navigation,
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import coffeeIcon from "@/assets/coffee-icon.png";
import tilesPhoto from "@/assets/tiles-photo.png";
import barPhoto from "@/assets/bar-photo.png";
import okeyTablePhoto from "@/assets/okey-table-photo.png";
import viewPhoto from "@/assets/view-photo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yeşil Köşem · Üsküdar'da Okey & 101 Mekanı" },
      {
        name: "description",
        content:
          "Yeşil Köşem · Üsküdar Mimar Sinan'da otomatik okey masaları, 101, taze demlenen çay ve boğaz manzarası. Dostlarınla oyun keyfi burada.",
      },
      { property: "og:title", content: "Yeşil Köşem · Okey & 101 · Üsküdar" },
      {
        property: "og:description",
        content: "Üsküdar'da boğaz manzaralı okey ve 101 mekanı.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MENU = {
  Sıcaklar: [
    { name: "Çay (Termos)", desc: "Taze demleme, paylaşımlık termos.", price: "₺395" },
    { name: "Türk Kahvesi", desc: "Geleneksel, orta şekerli.", price: "₺135" },
    { name: "Dibek Kahvesi", desc: "Yoğun aromalı, sütlü servis.", price: "₺135" },
    { name: "Filtre Kahve", desc: "Günün çekirdeği.", price: "₺135" },
    { name: "Salep", desc: "Tarçınlı, kış klasiği.", price: "₺150" },
    { name: "Bitki Çayları", desc: "Ihlamur, adaçayı, papatya.", price: "₺155" },
  ],
  Espresso: [
    { name: "Americano", desc: "Çift shot espresso + sıcak su.", price: "₺145" },
    { name: "Flat White", desc: "Kadifemsi süt, çift espresso.", price: "₺175" },
    { name: "Caffè Latte", desc: "Yumuşak içim, tam kıvam.", price: "₺175" },
    { name: "Mocha", desc: "Espresso, çikolata ve süt.", price: "₺175" },
    { name: "Karamel Frappuccino", desc: "Soğuk, buzlu, karamelli.", price: "₺175" },
    { name: "Macchiato", desc: "Espresso üzerine süt köpüğü.", price: "₺155" },
  ],
  Soğuklar: [
    { name: "Limonata", desc: "Taze sıkım, naneli.", price: "₺150" },
    { name: "Milkshake", desc: "Vanilya / çilek / çikolata.", price: "₺175" },
    { name: "Frozen (Mango, Karpuz, Limon…)", desc: "Buzlu, meyveli serinletici.", price: "₺175" },
    { name: "Churchill", desc: "Klasik ferahlatıcı.", price: "₺135" },
    { name: "Ayran", desc: "Yayık ayranı.", price: "₺80" },
    { name: "Red Bull", desc: "Enerji lazım olduğunda.", price: "₺135" },
  ],
  "Yemek & Tost": [
    { name: "Kaşarlı Tost", desc: "Klasik, bol kaşar.", price: "₺265" },
    { name: "Ayvalık Tost", desc: "Sucuk, kaşar, salam, sosis.", price: "₺285" },
    { name: "Kavurmalı Tost", desc: "Dana kavurma, kaşar.", price: "₺375" },
    { name: "Çıtır Tavuk Dürüm", desc: "Baharatlı, çıtır tavuk.", price: "₺375" },
    { name: "BBQ Tavuk Burger", desc: "Ev yapımı sos ile.", price: "₺375" },
    { name: "Karışık Mix Tabak", desc: "Paylaşımlık, atıştırmalık.", price: "₺350" },
  ],
  "Tatlı & Aparatif": [
    { name: "Sufle", desc: "Sıcak çikolatalı, akışkan iç.", price: "₺300" },
    { name: "Sütlaç", desc: "Fırınlanmış, tarçınlı.", price: "₺200" },
    { name: "Magnolya", desc: "Bisküvili, kremalı.", price: "₺200" },
    { name: "Kase Fındık", desc: "Kavrulmuş, tuzlu.", price: "₺295" },
    { name: "Karışık Lüks", desc: "Antep fıstığı, badem, kaju.", price: "₺295" },
    { name: "Aparatif", desc: "Klasik ikram tabağı.", price: "₺70" },
  ],
};

const REVIEWS = [
  {
    name: "Elif K.",
    src: "Google",
    rating: 5,
    text: "Otomatik okey masaları harika, ekipmanlar bakımlı. Boğaz manzarasında 101 oynamanın keyfi başka.",
  },
  {
    name: "Mert A.",
    src: "Yandex",
    rating: 5,
    text: "Fiyatlar gayet uygun, çay bitmiyor. Personel çok ilgili, arkadaş grubuyla saatlerce oturduk.",
  },
  {
    name: "Zeynep D.",
    src: "Google",
    rating: 4,
    text: "Üsküdar'da okey oynayabileceğiniz nadir kaliteli yerlerden. Sakin, temiz, huzurlu.",
  },
  {
    name: "Can Ö.",
    src: "Google",
    rating: 5,
    text: "Manzarası muhteşem. Dibek kahvesi eşliğinde 101 partisi — buluşma noktamız oldu.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <InfoBar />
      <About />
      <Games />
      <Menu />
      <Reviews />
      <LocationContact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#oyunlar", label: "Oyun Masaları" },
    { href: "#menu", label: "Menü" },
    { href: "#yorumlar", label: "Yorumlar" },
    { href: "#iletisim", label: "İletişim" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-forest/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-cream">
            <img src={coffeeIcon} alt="" className="h-20 w-6 object-contain" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-forest-deep">
            Yeşil Köşem
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-forest-deep/80 transition-colors hover:text-brass"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+905346516934"
          className="hidden items-center gap-2 rounded-full border border-forest/20 bg-forest px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-deep md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" /> 0534 651 69 34
        </a>
        <button
          aria-label="Menü"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-md text-forest-deep md:hidden"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-forest/10 bg-cream md:hidden">
          <div className="flex flex-col p-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-forest-deep"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+905346516934"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-cream"
            >
              <Phone className="h-3.5 w-3.5" /> 0534 651 69 34
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-20">
      <img
        src={tilesPhoto}
        alt="Yeşil Köşem'de 101 oyunu için dizilmiş okey taşları"
        width={1600}
        height={1100}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-forest-deep/40" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brass/40 bg-forest-deep/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brass-soft backdrop-blur-sm">
            <MapPin className="h-3 w-3" /> Mimar Sinan · Üsküdar · Boğaz Manzarası
          </span>
          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Üsküdar'da 101 &amp; Okey
            <br />
            için buluşma noktası:{" "}
            <span className="italic text-brass-soft">Yeşil Köşem</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Otomatik okey masaları, taze demlenen çay ve boğazı gören
            pencereler. Dostlarınla oyun keyfi için birinci adresin.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-forest-deep transition hover:bg-brass-soft"
            >
              Menüyü İncele
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://maps.google.com/?q=Mimar+Sinan+Eski+Keresteciler+Sk+No+10+Üsküdar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/10"
            >
              <Navigation className="h-4 w-4" /> Yol Tarifi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBar() {
  return (
    <section className="relative z-10 -mt-10 px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-forest/10 shadow-xl shadow-forest-deep/10 sm:grid-cols-3">
        <div className="flex items-center gap-4 bg-cream p-6">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/5">
            <Star className="h-5 w-5 fill-brass text-brass" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Google
            </div>
            <div className="truncate font-serif text-lg font-semibold text-forest-deep">
              4.2 ★ · 37 Yorum
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-cream p-6">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/5">
            <Clock className="h-5 w-5 text-emerald-soft" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Şu An
            </div>
            <div className="flex items-center gap-2 font-serif text-lg font-semibold text-forest-deep">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-soft opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-soft" />
              </span>
              Açık · 15:00'dan itibaren
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-cream p-6">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/5">
            <MapPin className="h-5 w-5 text-forest" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Konum
            </div>
            <div className="truncate font-serif text-lg font-semibold text-forest-deep">
              Mimar Sinan, Üsküdar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkimizda" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative">
          <img
            src={barPhoto}
            alt="Yeşil Köşem'in bar ve kasa alanı"
            loading="lazy"
            width={1200}
            height={1400}
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden max-w-[240px] rounded-2xl border border-brass/30 bg-cream p-5 shadow-xl shadow-forest-deep/10 sm:block">
            <img src={coffeeIcon} alt="" className="h-5 w-5 object-contain" />
            <p className="mt-2 font-serif text-lg leading-snug text-forest-deep">
              "Bir çay, bir oyun, bir sohbet. Yeşil Köşem'de."
            </p>
          </div>
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
            — Hakkımızda
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-forest-deep sm:text-5xl">
            Üsküdar'ın klasik okey mekanı.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Yeşil Köşem, Üsküdar Mimar Sinan'da; otomatik okey masaları, 101
            severleri ve dost sohbetleri için tasarlanmış klasik bir mekan.
            Pencerelerimizden boğaz görünür, çayımız hiç bitmez.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            İster tost eşliğinde bir el 101, ister günün çekirdeği filtre kahve
            ile uzun bir okey partisi — burası dostların köşesi.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="12+" label="Oyun masası" />
            <Stat n="Boğaz" label="Manzaralı" />
            <Stat n="4.2★" label="Ortalama puan" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl font-semibold text-forest sm:text-4xl">
        {n}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Games() {
  return (
    <section id="oyunlar" className="bg-forest-deep px-5 py-24 text-cream lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
            — Oyun Masaları
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
            101, Okey ve boğaz manzarası.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/70">
            Klasik okey masalarımız ve otomatik okey masalarımız gün boyu
            hizmetinizde. Pencere kenarında bir el 101, bir bardak çay ve boğaz
            manzarası.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <figure className="group relative overflow-hidden rounded-3xl ring-1 ring-cream/10 md:col-span-2 md:row-span-2">
            <img
              src={okeyTablePhoto}
              alt="Yeşil Köşem'de klasik okey masası"
              loading="lazy"
              width={1200}
              height={1200}
              className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] md:aspect-auto"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/40 to-transparent p-6 sm:p-8">
              <div className="text-xs uppercase tracking-wider text-brass">Klasik Okey Masası</div>
              <div className="mt-1 font-serif text-2xl">Yeşil çuha, ahşap ıstakalar</div>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-3xl ring-1 ring-cream/10">
            <img
              src={viewPhoto}
              alt="Yeşil Köşem penceresinden boğaz manzarası"
              loading="lazy"
              width={1000}
              height={700}
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/30 to-transparent p-5">
              <div className="text-xs uppercase tracking-wider text-brass">Manzara</div>
              <div className="mt-1 font-serif text-xl">Pencereden boğaz</div>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-3xl ring-1 ring-cream/10">
            <img
              src={tilesPhoto}
              alt="101 için dizilmiş okey taşları"
              loading="lazy"
              width={1000}
              height={700}
              className="h-full w-full object-cover object-bottom transition duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/30 to-transparent p-5">
              <div className="text-xs uppercase tracking-wider text-brass">101</div>
              <div className="mt-1 font-serif text-xl">Klasik Türk masa oyunu</div>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-brass/20 bg-forest/40 p-6">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
          <div className="text-sm leading-relaxed text-cream/80">
            <div className="font-semibold text-cream">Bilgilendirme</div>
            <p className="mt-1">
              Tüm masalarda kişi başı minimum harcama uygulanır. Otomatik okey
              masalarında saatlik okey ücreti, harcama sınırına ek olarak
              ücretlendirilir. Detaylar için lütfen personelimize danışın.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const categories = Object.keys(MENU) as (keyof typeof MENU)[];
  const [active, setActive] = useState<keyof typeof MENU>(categories[0]);
  return (
    <section id="menu" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
              — Menümüz
            </span>
            <h2 className="mt-4 max-w-xl text-balance font-serif text-4xl font-medium leading-tight text-forest-deep sm:text-5xl">
              Oyun masasının vazgeçilmezleri
            </h2>
          </div>
          <a
            href="tel:+905346516934"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest transition hover:text-brass"
          >
            Rezervasyon için ara
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 -mx-5 overflow-x-auto px-5">
          <div className="flex min-w-max gap-2 border-b border-border pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-t-lg px-5 py-3 text-sm font-medium transition ${
                  active === c
                    ? "text-forest-deep"
                    : "text-muted-foreground hover:text-forest-deep"
                }`}
              >
                {c}
                {active === c && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-brass" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {MENU[active].map((item) => (
            <article
              key={item.name}
              className="group flex items-baseline justify-between gap-6 border-b border-dashed border-border pb-6"
            >
              <div className="min-w-0">
                <h3 className="font-serif text-xl font-semibold text-forest-deep">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
              <span className="shrink-0 font-serif text-lg font-semibold text-brass">
                {item.price}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Fiyatlar bilgi amaçlıdır ve değişiklik gösterebilir. Güncel menü için
          mekanımıza bekleriz.
        </p>
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const total = REVIEWS.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);
  const r = REVIEWS[i];
  return (
    <section id="yorumlar" className="bg-secondary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
          — Misafirlerimiz
        </span>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-forest-deep sm:text-5xl">
          Yeşil Köşem hakkında ne diyorlar?
        </h2>

        <div className="mt-14 rounded-3xl border border-border bg-card p-10 shadow-sm sm:p-14">
          <div className="flex justify-center gap-1">
            {Array.from({ length: r.rating }).map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-brass text-brass" />
            ))}
          </div>
          <blockquote className="mt-6 font-serif text-2xl italic leading-relaxed text-forest-deep sm:text-3xl">
            "{r.text}"
          </blockquote>
          <div className="mt-8 text-sm">
            <div className="font-semibold text-forest-deep">{r.name}</div>
            <div className="text-muted-foreground">{r.src} üzerinden</div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Önceki"
            onClick={prev}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-forest-deep transition hover:bg-forest hover:text-cream"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {REVIEWS.map((_, k) => (
              <button
                key={k}
                aria-label={`Yorum ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-forest" : "w-1.5 bg-forest/25"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Sonraki"
            onClick={next}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-forest-deep transition hover:bg-forest hover:text-cream"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function LocationContact() {
  const address = "Mimar Sinan, Eski Keresteciler Sk. No:10 Kat:2, Üsküdar/İstanbul";
  const mapsQ = encodeURIComponent(address);
  return (
    <section id="iletisim" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
            — Bize Ulaşın
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-forest-deep sm:text-5xl">
            Sizi köşemize bekliyoruz.
          </h2>

          <div className="mt-10 space-y-6">
            <InfoRow icon={<MapPin className="h-5 w-5" />} label="Adres">
              Mimar Sinan, Eski Keresteciler Sk. No:10 Kat:2
              <br />
              Üsküdar / İstanbul
            </InfoRow>
            <InfoRow icon={<Phone className="h-5 w-5" />} label="Telefon">
              <a href="tel:+905346516934" className="hover:text-brass">
                0534 651 69 34
              </a>
            </InfoRow>
            <InfoRow icon={<Clock className="h-5 w-5" />} label="Çalışma Saatleri">
              Pazartesi – Cuma · 15:00 – 23:00
              <br />
              Cumartesi – Pazar · 12:00 – 00:00
            </InfoRow>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+905346516934"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest-deep"
            >
              <Phone className="h-4 w-4" /> Hemen Ara
            </a>
            <a
              href={`https://maps.google.com/?q=${mapsQ}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-cream px-6 py-3 text-sm font-semibold text-forest-deep transition hover:border-brass hover:text-brass"
            >
              <Navigation className="h-4 w-4" /> Yol Tarifi
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-forest-deep/5">
          <iframe
            title="Yeşil Köşem konumu"
            src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            className="min-h-[420px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-cream">
        {icon}
      </div>
      <div className="min-w-0 pt-1">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 leading-relaxed text-forest-deep">{children}</div>
      </div>
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-deep px-5 py-12 text-cream/70 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-brass">
            <img src={coffeeIcon} alt="" className="h-8 w-8 object-contain" />
          </span>
          <span className="font-serif text-lg font-semibold text-cream">
            Yeşil Köşem
          </span>
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Yeşil Köşem · Üsküdar, İstanbul
        </p>
        <a
          href="https://www.instagram.com/yesilkosem.tr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 transition hover:border-brass hover:text-brass"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
