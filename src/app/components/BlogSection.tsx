'use client'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const featured = {
    title: 'Toplumsal Dayanışmanın Gücü ve Özgür İrade',
    desc: 'İnsanın kendi hayatını şekillendirme süreci, sadece bireysel bir mesele değil aynı zamanda toplumsal bir sorumluluktur...',
    date: '10 Nisan 2026',
    image: '/images/blog-feature.jpg',
    href: '/blog/1',
}

const blogs = [
    {
        id: 1,
        title: 'Yardımlaşma Kültürünün Tarihsel Gelişimi',
        date: '08 Nisan 2026',
        href: '/blog/2',
    },
    {
        id: 2,
        title: 'Sosyal Sorumluluk Projelerinde Yeni Yaklaşımlar',
        date: '05 Nisan 2026',
        href: '/blog/3',
    },
    {
        id: 3,
        title: 'Aile Yapısının Toplum Üzerindeki Etkisi',
        date: '02 Nisan 2026',
        href: '/blog/4',
    },
    {
        id: 4,
        title: 'Bilinçli Toplum Oluşturmanın Temelleri',
        date: '30 Mart 2026',
        href: '/blog/5',
    },
]

export default function BlogSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-green-700">
                        Blog Yazıları
                    </h2>

                    <Link
                        href="/blog"
                        className="text-sm text-green-600 hover:underline flex items-center gap-1"
                    >
                        Tüm yazılar <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Layout */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Featured */}
                    <Link
                        href={featured.href}
                        className="md:col-span-2 group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                    >
                        <div className="h-80 overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                <Calendar size={14} />
                                {featured.date}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition">
                                {featured.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {featured.desc}
                            </p>
                        </div>
                    </Link>

                    {/* List */}
                    <div className="flex flex-col gap-4">
                        {blogs.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition group"
                            >
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>

                                <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition">
                                    {item.title}
                                </h4>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}