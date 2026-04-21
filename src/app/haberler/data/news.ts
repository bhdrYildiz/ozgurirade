export type NewsCategory = "Genel" | "Eğitim" | "Yetim";

export interface NewsArticle {
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: NewsCategory;
  date: string;
  author: string;
  coverImage: string;
  featured?: boolean;
  tags?: string[];
}
export const NewsCategories: NewsCategory[] = ["Genel", "Eğitim", "Yetim"];

export const newsArticles: NewsArticle[] = [
  {
    slug: "ihtiyac-sahibi-ailelere-yardim-ulastirildi",
    title: "İhtiyaç Sahibi Ailelere Yardım Ulaştırıldı",
    summary:
      "Derneğimiz tarafından gerçekleştirilen yardım organizasyonu ile 150 aileye gıda, giyim ve nakdi destek sağlandı.",
    content: `
Özgür İrade Derneği olarak bu ay gerçekleştirdiğimiz kapsamlı yardım seferberliğinde ihtiyaç sahibi 150 aileye ulaşmayı başardık.

## Yardım Kapsamı

Gönüllülerimiz ve bağışçılarımızın desteğiyle hazırlanan yardım paketleri; temel gıda maddeleri, mevsimlik giyim eşyaları ve nakdi destekten oluşmaktadır. Her paket, ailelerin yaklaşık iki aylık temel ihtiyacını karşılayacak şekilde özenle hazırlandı.

## Dağıtım Süreci

Sosyal hizmet uzmanlarımız tarafından önceden tespit edilen aileler, mahalleleri esas alınarak gruplandırıldı. Dağıtım süreci yaklaşık üç günde tamamlandı; her aileyle birebir görüşülerek ek ihtiyaçlar belirlendi.

## Bağışçılarımıza Teşekkür

Bu organizasyonun hayata geçmesinde katkı sağlayan tüm bağışçılarımıza ve gönüllülerimize içtenlikle teşekkür ediyoruz. Sizlerin desteği olmadan bu yardımların hiçbiri mümkün olmazdı.
        `,
    category: "Genel",
    date: "2026-04-12",
    author: "Özgür İrade Derneği",
    coverImage: "/erzakyardimi.jpg",
    featured: true,
    tags: ["yardım", "gıda", "aile"],
  },
  {
    slug: "egitim-bursu-basvurulari-acildi",
    title: "Eğitim Bursu Başvuruları Açıldı",
    summary:
      "2026-2027 eğitim yılı için burs başvuruları başladı. Başarılı ve ihtiyaç sahibi öğrencilerimiz için 80 kontenjan ayrıldı.",
    content: `
Her yıl olduğu gibi bu yıl da eğitim burs programımız kapsamında öğrencilerimize destek olmayı sürdürüyoruz.

## Başvuru Koşulları

- Lise veya üniversite öğrencisi olmak
- Genel not ortalaması 3.00 ve üzeri
- Maddi ihtiyaç belgesi sunmak

## Başvuru Tarihleri

Başvurular 15 Nisan – 15 Mayıs 2026 tarihleri arasında kabul edilmektedir. Sonuçlar Haziran ayında açıklanacaktır.

Detaylı bilgi ve başvuru formu için iletişim sayfamızı ziyaret edebilirsiniz.
        `,
    category: "Eğitim",
    date: "2026-03-25",
    author: "Eğitim Birimi",
    coverImage: "/egitimbursu.jpg",
    featured: true,
    tags: ["burs", "eğitim", "öğrenci"],
  },
  {
    slug: "yetim-kardes-programi-genisledi",
    title: "Yetim Kardeş Programı Genişledi",
    summary:
      "Yetim kardeş programımıza katılan gönüllü sayısı 200'ü aştı. Program artık 5 ülkede 380 yetim çocuğa ulaşıyor.",
    content: `
Yetim Kardeş Programımız her geçen gün daha fazla çocuğa ulaşıyor. Gönüllü kardeşlerimizin özverili desteğiyle program büyümeye devam ediyor.

## Program Hakkında

Her gönüllü, bir yetim çocuğun eğitim ve temel ihtiyaçlarını karşılamak için aylık düzenli bağış yapar. Yılda en az bir kez çocuğunun durumuna dair rapor alır.

## Nasıl Katılabilirsiniz?

Programa katılmak için web sitemiz üzerinden ya da derneğimizi arayarak başvurabilirsiniz. Her kardeş, fark yaratır.
        `,
    category: "Yetim",
    date: "2026-03-10",
    author: "Sosyal Hizmetler Birimi",
    coverImage: "/yetim-kardes.jpg",
    featured: false,
    tags: ["yetim", "gönüllü", "program"],
  },
];

export function getAllNews(): NewsArticle[] {
  return newsArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((n) => n.slug === slug);
}

export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter((n) => n.featured);
}

export function getNewsByCategory(category: NewsCategory): NewsArticle[] {
  return newsArticles
    .filter((n) => n.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllCategories(): NewsCategory[] {
  const set = new Set(newsArticles.map((n) => n.category));
  return Array.from(set);
}

export function getRelatedNews(slug: string, limit = 3): NewsArticle[] {
  const current = getNewsBySlug(slug);
  if (!current) return [];
  return newsArticles
    .filter((n) => n.slug !== slug && n.category === current.category)
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
