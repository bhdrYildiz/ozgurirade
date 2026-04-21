import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import PageHero from '@/app/components/ui/PageHero'
import {
    getAllNews,
    getFeaturedNews,
    getAllCategories,
    formatDate,
} from './data/news'
import Image from 'next/image'

export const metadata = {
    title: 'Haberler | Özgür İrade Derneği',
    description: 'Derneğimizin güncel haberleri ve duyuruları',
}

export default function HaberlerPage() {
    const allNews = getAllNews()
    const featured = getFeaturedNews().slice(0, 2)
    const categories = getAllCategories()

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <PageHero
                title="HABERLER"
                subtitle="Güncel Gelişmeler"
                image="/banner.png"
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Haberler" },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
                {featured.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-1 h-6 bg-green-600 rounded-full" />
                            <h2 className="text-xl font-semibold text-gray-800">
                                Öne Çıkan Haberler
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {featured.map((item, i) => (
                                <Link
                                    key={item.slug}
                                    href={`/haberler/${item.slug}`}
                                    className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-sm transition-all duration-300 bg-white"
                                >
                                    <div className={`relative overflow-hidden ${i === 0 ? 'h-64' : 'h-56'}`}>
                                        <Image
                                            src={item.coverImage}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
                                    </div>
                                    <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full ${[item.category]}`}>
                                        {item.category}
                                    </span>

                                    <div className="p-6">
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                                            <Calendar size={13} />
                                            {formatDate(item.date)}
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-2 leading-snug">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                            {item.summary}
                                        </p>

                                        <div className="mt-4 flex items-center gap-1.5 text-sm text-green-600 font-medium">
                                            Devamını Oku
                                            <ArrowRight
                                                size={12}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid lg:grid-cols-[1fr_280px] gap-10">

                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-1 h-6 bg-green-600 rounded-full" />
                            <h2 className="text-xl font-semibold text-gray-800">
                                Tüm Haberler
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            {allNews.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/haberler/${item.slug}`}
                                    className="group flex gap-5 border border-gray-100 rounded-2xl p-4 bg-white
hover:-translate-y-1 hover:shadow-xl hover:border-green-100
transition-all duration-300 ease-out"
                                >
                                    <div className="relative w-28 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                                        <Image
                                            src={item.coverImage}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between flex-1 min-w-0">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${[item.category]}`}>
                                                    {item.category}
                                                </span>
                                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                                    <Calendar size={12} />
                                                    {formatDate(item.date)}
                                                </span>
                                            </div>

                                            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 line-clamp-2 leading-snug">
                                                {item.title}
                                            </h3>

                                            <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                                                {item.summary}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-1 text-xs text-green-600 mt-2 font-medium">
                                            Oku
                                            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <aside className="flex flex-col gap-6">

                        <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                Kategoriler
                            </h3>
                            <div className="flex flex-col gap-1">
                                <Link
                                    href="/haberler"
                                    className="group flex items-center justify-between px-3 py-2 rounded-xl text-sm text-gray-600
hover:bg-gray-50 transition-all duration-200"                                >
                                    <span>Tüm Haberler</span>
                                    <span className="text-xs text-gray-400">{allNews.length}</span>
                                </Link>
                                {categories.map((cat) => {
                                    const count = allNews.filter((n) => n.category === cat).length
                                    return (
                                        <Link
                                            key={cat}
                                            href={`/haberler?kategori=${encodeURIComponent(cat)}`}
                                            className="group flex items-center justify-between px-3 py-2 rounded-xl text-sm text-gray-600
hover:bg-gray-50 transition-all duration-200"
                                        >
                                            <span>{cat}</span>
                                            <span className="text-xs text-gray-400">{count}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                Son Haberler
                            </h3>
                            <div className="flex flex-col gap-4">
                                {allNews.slice(0, 4).map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={`/haberler/${item.slug}`}
                                        className="group flex gap-3"
                                    >
                                        <div className="relative w-14 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                                            <Image
                                                src={item.coverImage}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                placeholder="blur"
                                                blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-700 group-hover:text-green-700 transition-colors duration-300 line-clamp-2 leading-snug">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">{formatDate(item.date)}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="relative rounded-2xl p-6 overflow-hidden
bg-gradient-to-br from-green-600 to-green-700 text-white
shadow-lg hover:shadow-2xl transition-all duration-500 group">

                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

                            <p className="text-xs uppercase tracking-widest opacity-70 mb-2">
                                Destek Ol
                            </p>

                            <h3 className="text-lg font-semibold mb-3 leading-snug">
                                Yardımlarımıza ortak ol
                            </h3>

                            <p className="text-sm opacity-80 mb-5 leading-relaxed">
                                Her bağış, bir hayatı değiştirebilir.
                            </p>

                            <Link
                                href="/bagis"
                                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur
        text-green-700 text-sm font-semibold px-5 py-2.5 rounded-xl
        hover:bg-white transition-all duration-300 group-hover:translate-x-1"
                            >
                                Bağış Yap
                                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}