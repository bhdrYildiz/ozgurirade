import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import PageHero from '@/app/components/ui/PageHero'
import {
    getAllNews,
    getNewsBySlug,
    getRelatedNews,
    formatDate,
} from '../data/news'
import { NewsCategories } from '../data/news'
import {
    Newspaper,
    GraduationCap,
    HeartHandshake,
    Droplet,
    Megaphone
} from 'lucide-react'

// ─── Static Params (SSG) ──────────────────────────────────────────────────────
export async function generateStaticParams() {
    const news = getAllNews()
    return news.map((n) => ({ slug: n.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const article = getNewsBySlug(params.slug)
    if (!article) return {}
    return {
        title: `${article.title} | Özgür İrade Derneği`,
        description: article.summary,
    }
}

// ─── Markdown-benzeri içerik render ───────────────────────────────────────────
function renderContent(raw: string) {
    const lines = raw.trim().split('\n')
    const elements: React.ReactNode[] = []
    let key = 0

    for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed) {
            elements.push(<div key={key++} className="h-3" />)
        } else if (trimmed.startsWith('## ')) {
            elements.push(
                <h2 key={key++} className="text-xl font-semibold text-green-700 mt-8 mb-3">
                    {trimmed.slice(3)}
                </h2>
            )
        } else if (trimmed.startsWith('- ')) {
            elements.push(
                <li key={key++} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed ml-4">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {trimmed.slice(2)}
                </li>
            )
        } else {
            elements.push(
                <p key={key++} className="text-gray-600 text-[15px] leading-[1.85]">
                    {trimmed}
                </p>
            )
        }
    }

    return elements
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HaberDetayPage({ params }: { params: { slug: string } }) {
    const article = getNewsBySlug(params.slug)
    if (!article) notFound()

    const related = getRelatedNews(params.slug, 3)
    const allNews = getAllNews()
    const currentIndex = allNews.findIndex((n) => n.slug === params.slug)
    const prev = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null
    const next = currentIndex > 0 ? allNews[currentIndex - 1] : null

    const categoryIcons = {
        Genel: Newspaper,
        Eğitim: GraduationCap,
        Sağlık: HeartHandshake,
        'Su Kuyusu': Droplet,
        Yetim: HeartHandshake,
        Ramazan: HeartHandshake,
        Kurban: HeartHandshake,
        Zekat: HeartHandshake,
        Duyuru: Megaphone,
    }

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <PageHero
                title="HABERLER"
                subtitle={article.category}
                image="/banner.png"
                breadcrumbs={[
                    { label: 'Ana Sayfa', href: '/' },
                    { label: 'Haberler', href: '/haberler' },
                    { label: article.title },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 w-full">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12">

                    {/* ── Makale ─────────────────────────────────────────── */}
                    <article>

                        {/* Geri butonu */}
                        <Link
                            href="/haberler"
                            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-green-700 transition-colors mb-8"
                        >
                            <ArrowLeft size={14} />
                            Haberlere Dön
                        </Link>

                        {/* Kategori + Meta */}
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className={`text-xs font-medium px-3 py-1 rounded-full ${[article.category]}`}>
                                {article.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                <Calendar size={13} />
                                {formatDate(article.date)}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                <User size={13} />
                                {article.author}
                            </span>
                        </div>

                        {/* Başlık */}
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-4">
                            {article.title}
                        </h1>

                        {/* Özet */}
                        <p className="text-base text-gray-500 leading-relaxed border-l-2 border-green-500 pl-4 mb-8">
                            {article.summary}
                        </p>

                        {/* Kapak görseli */}
                        <div className="rounded-2xl overflow-hidden mb-10 border border-gray-100">
                            <img
                                src={article.coverImage}
                                alt={article.title}
                                className="w-full h-72 md:h-96 object-cover"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="space-y-2">
                            {renderContent(article.content)}
                        </div>

                        {/* Etiketler */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-100">
                                <Tag size={14} className="text-gray-400" />
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Paylaş */}
                        <div className="mt-8 flex items-center gap-3">
                            <span className="text-sm text-gray-400 flex items-center gap-1.5">
                                <Share2 size={14} />
                                Bu haberi paylaş:
                            </span>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:border-green-400 hover:text-green-700 transition-colors"
                            >
                                Twitter / X
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:border-green-400 hover:text-green-700 transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(article.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:border-green-400 hover:text-green-700 transition-colors"
                            >
                                WhatsApp
                            </a>
                        </div>

                        {/* Önceki / Sonraki */}
                        <div className="mt-10 pt-8 border-t border-gray-100 grid sm:grid-cols-2 gap-4">
                            {prev ? (
                                <Link
                                    href={`/haberler/${prev.slug}`}
                                    className="group flex flex-col gap-1 p-4 border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-md transition-all"
                                >
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <ArrowLeft size={12} />
                                        Önceki Haber
                                    </span>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors line-clamp-2">
                                        {prev.title}
                                    </p>
                                </Link>
                            ) : <div />}

                            {next && (
                                <Link
                                    href={`/haberler/${next.slug}`}
                                    className="group flex flex-col gap-1 p-4 border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-md transition-all text-right"
                                >
                                    <span className="text-xs text-gray-400 flex items-center gap-1 justify-end">
                                        Sonraki Haber
                                        <ArrowRight size={12} />
                                    </span>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors line-clamp-2">
                                        {next.title}
                                    </p>
                                </Link>
                            )}
                        </div>
                    </article>

                    {/* ── Sidebar ────────────────────────────────────────── */}
                    <aside className="flex flex-col gap-6">

                        {/* İlgili haberler */}
                        {related.length > 0 && (
                            <div className="border border-gray-100 rounded-2xl p-5">
                                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                    İlgili Haberler
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {related.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={`/haberler/${item.slug}`}
                                            className="group flex gap-3"
                                        >
                                            <div className="w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                                                <img
                                                    src={item.coverImage}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-xs font-medium text-gray-700 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">{formatDate(item.date)}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                Kategoriler
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {NewsCategories.map((cat) => {
                                    const Icon = categoryIcons[cat]

                                    return (
                                        <Link
                                            key={cat}
                                            href={`/haberler?kategori=${encodeURIComponent(cat)}`}
                                            className="group flex items-center gap-1.5 text-xs font-medium
                    px-3 py-1.5 rounded-lg border border-gray-100 bg-gray-50 text-gray-600
                    hover:bg-white hover:border-green-200 hover:text-green-700
                    transition-all duration-200"
                                        >
                                            {Icon && (
                                                <Icon
                                                    size={12}
                                                    className="text-gray-400 group-hover:text-green-600 transition-colors"
                                                />
                                            )}
                                            {cat}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Bağış CTA */}
                        <div className="rounded-2xl bg-green-600 p-6 text-white">
                            <p className="text-xs uppercase tracking-widest opacity-75 mb-2">Destek Ol</p>
                            <h3 className="text-lg font-semibold mb-3 leading-snug">
                                Yardımlarımıza ortak ol
                            </h3>
                            <p className="text-sm opacity-80 mb-5 leading-relaxed">
                                Her bağış, bir hayatı değiştirebilir.
                            </p>
                            <Link
                                href="/bagis"
                                className="inline-block bg-white text-green-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-50 transition-colors"
                            >
                                Bağış Yap
                            </Link>
                        </div>

                    </aside>
                </div>

                {/* ── İlgili Haberler (alt tam genişlik) ─────────────────── */}
                {related.length > 0 && (
                    <section className="mt-16 pt-12 border-t border-gray-100">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-1 h-6 bg-green-600 rounded-full" />
                            <h2 className="text-xl font-semibold text-gray-800">
                                Benzer Haberler
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {related.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/haberler/${item.slug}`}
                                    className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="h-44 overflow-hidden">
                                        <img
                                            src={item.coverImage}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${[item.category]}`}>
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
                                            <Calendar size={12} />
                                            {formatDate(item.date)}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}