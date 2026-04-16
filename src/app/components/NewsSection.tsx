'use client'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

const news = [
    {
        id: 1,
        title: 'İhtiyaç Sahibi Ailelere Yardım Ulaştırıldı',
        desc: 'Derneğimiz tarafından gerçekleştirilen yardım organizasyonu ile birçok aileye destek sağlandı.',
        date: '12 Nisan 2026',
        image: '/images/news1.jpg',
        href: '/haberler/1',
    },
    {
        id: 2,
        title: 'Su Kuyusu Projemiz Tamamlandı',
        desc: 'Afrika bölgesinde açılan yeni su kuyusu ile yüzlerce insan temiz suya kavuştu.',
        date: '08 Nisan 2026',
        image: '/images/news2.jpg',
        href: '/haberler/2',
    },
    {
        id: 3,
        title: 'Ramazan Yardımları Başladı',
        desc: 'Ramazan ayında ihtiyaç sahiplerine ulaştırılmak üzere gıda kolileri dağıtılmaya başlandı.',
        date: '01 Nisan 2026',
        image: '/images/news3.jpg',
        href: '/haberler/3',
    },
]

export default function NewsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Başlık */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-green-700">
                        Haberler
                    </h2>

                    <Link
                        href="/haberler"
                        className="text-sm text-green-600 hover:underline"
                    >
                        Tümünü Gör →
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {news.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>

                                <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-500 line-clamp-3">
                                    {item.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}