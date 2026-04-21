import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { getAllNews, formatDate } from '@/app/haberler/data/news'
import Image from 'next/image'

export default function NewsSection() {
    const news = getAllNews().slice(0, 3)

    return (
        <section className="py-10 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Başlık */}
                <div className="flex items-center justify-between mb-6 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                        Haberler
                    </h2>
                    <Link href="/haberler" className="text-sm text-green-600 hover:underline">
                        Tümünü Gör →
                    </Link>
                </div>

                {/* Kartlar: mobilde tek kolon, md'de 3 kolon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {news.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/haberler/${item.slug}`}
                            className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-44 sm:h-48 overflow-hidden">
                                <Image
                                    src={item.coverImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                />
                            </div>

                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                    <Calendar size={14} />
                                    {formatDate(item.date)}
                                </div>

                                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-xs md:text-sm text-gray-500 line-clamp-3">
                                    {item.summary}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}