export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string veya markdown — tercihine göre değiştir
  coverImage: string;
  date: string; // "10 Nisan 2026" (görüntüleme)
  dateISO: string; // "2026-04-10" (sort + meta)
  author: string;
  authorTitle?: string;
  tags: string[];
  featured?: boolean; // anasayfada öne çıkan yazı
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "toplumsal-dayanismanin-gucu-ve-ozgur-irade",
    title: "Toplumsal Dayanışmanın Gücü ve Özgür İrade",
    excerpt:
      "İnsanın kendi hayatını şekillendirme süreci, sadece bireysel bir mesele değil aynı zamanda toplumsal bir sorumluluktur...",
    content: `
<p>İnsanın kendi hayatını şekillendirme süreci, sadece bireysel bir mesele değil aynı zamanda toplumsal bir sorumluluktur. Özgür irade kavramı, bireyin kendi tercihlerini yapabilmesi kadar, bu tercihlerin toplum üzerindeki etkisini de kapsar.</p>

<p>Dayanışma, insanlık tarihinin en köklü değerlerinden biridir. Tarih boyunca toplumlar, zor dönemlerini birbirlerine destek olarak aşmışlardır. Bu destek, yalnızca maddi bir yardım değil; aynı zamanda manevi bir bağ, bir aidiyet duygusu ve ortak bir gelecek inşasıdır.</p>

<h2>Bireysel Tercihten Toplumsal Sorumluluğa</h2>

<p>Özgür irade, bireyin kendi hayatı üzerindeki belirleyici gücüdür. Ancak bu güç, toplumdan bağımsız kullanıldığında anlam yitirir. Gerçek özgürlük, başkalarının özgürlüğünü de gözeterek yapılan tercihlerde gizlidir.</p>

<p>Derneğimizin temel felsefesi de buradan beslenir: Bireyin güçlenmesi, toplumun güçlenmesiyle mümkündür. Toplumun güçlenmesi ise bireylerin birbirine uzanan ellerinden geçer.</p>
        `.trim(),
    coverImage: "/images/blog/dayanisma.jpg",
    date: "10 Nisan 2026",
    dateISO: "2026-04-10",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["dayanışma", "özgür irade", "toplum"],
    featured: true,
  },
  {
    id: 2,
    slug: "yardimlasmа-kulturunun-tarihsel-gelisimi",
    title: "Yardımlaşma Kültürünün Tarihsel Gelişimi",
    excerpt:
      "Yardımlaşma, insanlığın varoluşundan bu yana toplumların temel yapı taşlarından biri olmuştur...",
    content: `
<p>Yardımlaşma, insanlığın varoluşundan bu yana toplumların temel yapı taşlarından biri olmuştur. Anadolu'dan Orta Asya'ya uzanan coğrafyada "imece" geleneği, bu köklü kültürün en somut ifadesidir.</p>

<p>Tarihsel süreçte yardımlaşma kurumları; vakıflar, loncalar ve dini topluluklar aracılığıyla örgütlenmiştir. Bu yapılar, hem ekonomik hem de sosyal işlevler üstlenmiştir.</p>

<h2>Osmanlı'dan Günümüze</h2>

<p>Osmanlı vakıf sistemi, dünyanın en gelişmiş sosyal güvenlik ağlarından birini oluşturmuştur. Hastaneler, okullar, aşevleri ve kervansaraylar bu sistemin ürünleridir. Bugün sivil toplum kuruluşları, bu geleneği modern formlarıyla sürdürmektedir.</p>
        `.trim(),
    coverImage: "/images/blog/tarih.jpg",
    date: "08 Nisan 2026",
    dateISO: "2026-04-08",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["tarih", "kültür", "yardımlaşma"],
  },
  {
    id: 3,
    slug: "sosyal-sorumluluk-projelerinde-yeni-yaklasimlar",
    title: "Sosyal Sorumluluk Projelerinde Yeni Yaklaşımlar",
    excerpt:
      "Sivil toplum kuruluşları, günümüzde sadece yardım dağıtmakla kalmayıp sürdürülebilir çözümler üretmeye yönelmektedir...",
    content: `
<p>Sivil toplum kuruluşları, günümüzde sadece yardım dağıtmakla kalmayıp sürdürülebilir çözümler üretmeye yönelmektedir. Bu dönüşüm, sosyal sorumluluk anlayışında köklü bir değişimi temsil etmektedir.</p>

<p>Geleneksel yardım modelinin ötesine geçen yaklaşımlar; eğitim, istihdam ve güçlendirme ekseninde şekillenmektedir. Bireyin mağdur konumundan çıkıp aktif bir toplum üyesine dönüşmesi hedeflenmektedir.</p>

<h2>Etki Odaklı Proje Yönetimi</h2>

<p>Modern STK'lar artık yaptıkları işin etkisini ölçmeye, raporlamaya ve hesap verebilir olmaya önem vermektedir. Bu şeffaflık kültürü, hem bağışçı güvenini artırmakta hem de kaynakların daha etkin kullanılmasını sağlamaktadır.</p>
        `.trim(),
    coverImage: "/images/blog/proje.jpg",
    date: "05 Nisan 2026",
    dateISO: "2026-04-05",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["sivil toplum", "proje", "sosyal sorumluluk"],
  },
  {
    id: 4,
    slug: "aile-yapisinin-toplum-uzerindeki-etkisi",
    title: "Aile Yapısının Toplum Üzerindeki Etkisi",
    excerpt:
      "Sağlıklı bir toplumun temelinde sağlıklı aile yapıları yatmaktadır. Aile, bireyin ilk sosyalleşme ortamıdır...",
    content: `
<p>Sağlıklı bir toplumun temelinde sağlıklı aile yapıları yatmaktadır. Aile, bireyin ilk sosyalleşme ortamı, değerlerin ilk aktarıldığı ve kimliğin şekillendiği yerdir.</p>

<p>Günümüzde aile yapısı büyük bir dönüşüm geçirmektedir. Kentleşme, dijitalleşme ve ekonomik baskılar ailenin geleneksel rollerini zorlamaktadır. Ancak bu zorluklar, ailenin önemini azaltmamakta; aksine daha bilinçli bir aile politikasına duyulan ihtiyacı artırmaktadır.</p>

<h2>Derneğimizin Aile Odaklı Çalışmaları</h2>

<p>Aile danışmanlığından çocuk gelişim programlarına, gençlik projelerinden yaşlı bakım desteğine kadar geniş bir yelpazede hizmet sunuyoruz. Amacımız, ailenin her bireyine dokunan bütüncül bir destek sistemi oluşturmaktır.</p>
        `.trim(),
    coverImage: "/images/blog/aile.jpg",
    date: "02 Nisan 2026",
    dateISO: "2026-04-02",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["aile", "toplum", "sosyal"],
  },
  {
    id: 5,
    slug: "bilincli-toplum-olusturmanin-temelleri",
    title: "Bilinçli Toplum Oluşturmanın Temelleri",
    excerpt:
      "Bilinç, bir toplumun geleceğini belirleyen en kritik faktörlerden biridir. Eğitimden iletişime, kültürden siyasete her alan bu bilincin ürünüdür...",
    content: `
<p>Bilinç, bir toplumun geleceğini belirleyen en kritik faktörlerden biridir. Eğitimden iletişime, kültürden siyasete her alan bu bilincin ürünüdür.</p>

<p>Bilinçli bir toplum oluşturmak; sadece okuma-yazma oranını artırmakla değil, eleştirel düşünce, empati ve sivil katılım kapasitesini geliştirmekle mümkündür.</p>

<h2>Eğitim ve Farkındalık Çalışmalarımız</h2>

<p>Derneğimiz, bu hedef doğrultusunda seminerler, atölyeler ve eğitim programları düzenlemektedir. Özellikle gençlere yönelik farkındalık çalışmaları, uzun vadeli bir toplumsal dönüşümün tohumlarını ekmektedir.</p>
        `.trim(),
    coverImage: "/images/blog/egitim.jpg",
    date: "30 Mart 2026",
    dateISO: "2026-03-30",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["eğitim", "bilinç", "toplum"],
  },
];

/* ─── Yardımcı fonksiyonlar ─── */

/** Tüm postları tarihe göre azalan sırayla döner */
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
  );
}

/** Slug'a göre tekil post döner, bulamazsa undefined */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** featured: true olan postu döner; yoksa en son yazıyı */
export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? getAllPosts()[0];
}

/** Liste için öne çıkan dışındaki postları döner */
export function getNonFeaturedPosts(): BlogPost[] {
  const featured = getFeaturedPost();
  return getAllPosts().filter((p) => p.slug !== featured.slug);
}

/** Belirli bir etikete sahip postları döner */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}
