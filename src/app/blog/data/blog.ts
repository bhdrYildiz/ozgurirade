export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  dateISO: string;
  author: string;
  authorTitle?: string;
  tags: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "toplumsal-dayanismanin-gucu-ve-ozgur-irade",
    title: "Toplumsal Dayanışmanın Gücü ve Özgür İrade",
    excerpt:
      "İnsanın kendi hayatını şekillendirme süreci, sadece bireysel bir mesele değil aynı zamanda toplumsal bir sorumluluktur...",
    content: `
İnsanın kendi hayatını şekillendirme süreci, sadece bireysel bir mesele değil aynı zamanda toplumsal bir sorumluluktur. Özgür irade kavramı, bireyin kendi tercihlerini yapabilmesi kadar, bu tercihlerin toplum üzerindeki etkisini de kapsar.

Dayanışma, insanlık tarihinin en köklü değerlerinden biridir. Tarih boyunca toplumlar, zor dönemlerini birbirlerine destek olarak aşmışlardır. Bu destek, yalnızca maddi bir yardım değil; aynı zamanda manevi bir bağ, bir aidiyet duygusu ve ortak bir gelecek inşasıdır.

## Bireysel Tercihten Toplumsal Sorumluluğa

Özgür irade, bireyin kendi hayatı üzerindeki belirleyici gücüdür. Ancak bu güç, toplumdan bağımsız kullanıldığında anlam yitirir. Gerçek özgürlük, başkalarının özgürlüğünü de gözeterek yapılan tercihlerde gizlidir.

Derneğimizin temel felsefesi de buradan beslenir: Bireyin güçlenmesi, toplumun güçlenmesiyle mümkündür. Toplumun güçlenmesi ise bireylerin birbirine uzanan ellerinden geçer.
    `,
    coverImage: "/Logo.png",
    date: "10 Nisan 2026",
    dateISO: "2026-04-10",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["dayanışma", "özgür irade", "toplum"],
    featured: true,
  },
  {
    id: 2,
    slug: "sosyal-sorumluluk-projelerinde-yeni-yaklasimlar",
    title: "Sosyal Sorumluluk Projelerinde Yeni Yaklaşımlar",
    excerpt:
      "Sivil toplum kuruluşları, günümüzde sadece yardım dağıtmakla kalmayıp sürdürülebilir çözümler üretmeye yönelmektedir...",
    content: `
Sivil toplum kuruluşları, günümüzde sadece yardım dağıtmakla kalmayıp sürdürülebilir çözümler üretmeye yönelmektedir. Bu dönüşüm, sosyal sorumluluk anlayışında köklü bir değişimi temsil etmektedir.

Geleneksel yardım modelinin ötesine geçen yaklaşımlar; eğitim, istihdam ve güçlendirme ekseninde şekillenmektedir. Bireyin mağdur konumundan çıkıp aktif bir toplum üyesine dönüşmesi hedeflenmektedir.

## Etki Odaklı Proje Yönetimi

Modern STK'lar artık yaptıkları işin etkisini ölçmeye, raporlamaya ve hesap verebilir olmaya önem vermektedir. Bu şeffaflık kültürü, hem bağışçı güvenini artırmakta hem de kaynakların daha etkin kullanılmasını sağlamaktadır.
    `,
    coverImage: "/sosyal-sorumluluk.jpg",
    date: "05 Nisan 2026",
    dateISO: "2026-04-05",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["sivil toplum", "proje", "sosyal sorumluluk"],
  },
  {
    id: 3,
    slug: "aile-yapisinin-toplum-uzerindeki-etkisi",
    title: "Aile Yapısının Toplum Üzerindeki Etkisi",
    excerpt:
      "Sağlıklı bir toplumun temelinde sağlıklı aile yapıları yatmaktadır. Aile, bireyin ilk sosyalleşme ortamıdır...",
    content: `
Sağlıklı bir toplumun temelinde sağlıklı aile yapıları yatmaktadır. Aile, bireyin ilk sosyalleşme ortamı, değerlerin ilk aktarıldığı ve kimliğin şekillendiği yerdir.

Günümüzde aile yapısı büyük bir dönüşüm geçirmektedir. Kentleşme, dijitalleşme ve ekonomik baskılar ailenin geleneksel rollerini zorlamaktadır. Ancak bu zorluklar, ailenin önemini azaltmamakta; aksine daha bilinçli bir aile politikasına duyulan ihtiyacı artırmaktadır.

## Derneğimizin Aile Odaklı Çalışmaları

Aile danışmanlığından çocuk gelişim programlarına, gençlik projelerinden yaşlı bakım desteğine kadar geniş bir yelpazede hizmet sunuyoruz. Amacımız, ailenin her bireyine dokunan bütüncül bir destek sistemi oluşturmaktır.
    `,
    coverImage: "/aile-yapisi.jpg",
    date: "02 Nisan 2026",
    dateISO: "2026-04-02",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["aile", "toplum", "sosyal"],
  },
  {
    id: 4,
    slug: "bilincli-toplum-olusturmanin-temelleri",
    title: "Bilinçli Toplum Oluşturmanın Temelleri",
    excerpt:
      "Bilinç, bir toplumun geleceğini belirleyen en kritik faktörlerden biridir. Eğitimden iletişime, kültürden siyasete her alan bu bilincin ürünüdür...",
    content: `
Bilinç, bir toplumun geleceğini belirleyen en kritik faktörlerden biridir. Eğitimden iletişime, kültürden siyasete her alan bu bilincin ürünüdür.

Bilinçli bir toplum oluşturmak; sadece okuma-yazma oranını artırmakla değil, eleştirel düşünce, empati ve sivil katılım kapasitesini geliştirmekle mümkündür.

## Eğitim ve Farkındalık Çalışmalarımız

Derneğimiz, bu hedef doğrultusunda seminerler, atölyeler ve eğitim programları düzenlemektedir. Özellikle gençlere yönelik farkındalık çalışmaları, uzun vadeli bir toplumsal dönüşümün tohumlarını ekmektedir.
    `,
    coverImage: "/bilincli-toplum.jpg",
    date: "30 Mart 2026",
    dateISO: "2026-03-30",
    author: "Özgür İrade Derneği",
    authorTitle: "Editör",
    tags: ["eğitim", "bilinç", "toplum"],
  },
];

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
