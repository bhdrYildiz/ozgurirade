import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { getFeaturedPost, getNonFeaturedPosts } from '@/app/blog/data/blog'

export default function BlogSection() {
    const featured = getFeaturedPost()
    const rest = getNonFeaturedPosts().slice(0, 4)

    return (
        <section className="py-10 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-6 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                        Blog Yazıları
                    </h2>
                    <Link
                        href="/blog"
                        className="text-sm text-green-600 hover:underline flex items-center gap-1"
                    >
                        Tüm yazılar <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Layout: mobilde tek kolon, md'de 3 kolon */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">

                    {/* Featured */}
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="md:col-span-2 group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                    >
                        <div className="h-52 sm:h-64 md:h-80 overflow-hidden">
                            <img
                                src={featured.coverImage}
                                alt={featured.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-4 md:p-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                <Calendar size={14} />
                                {featured.date}
                            </div>

                            <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 group-hover:text-green-700 transition">
                                {featured.title}
                            </h3>

                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                {featured.excerpt}
                            </p>
                        </div>
                    </Link>

                    {/* List */}
                    <div className="flex flex-col gap-3 md:gap-4">
                        {rest.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="p-3 md:p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition group"
                            >
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>

                                <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition">
                                    {post.title}
                                </h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}