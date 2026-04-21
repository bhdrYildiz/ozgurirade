import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import PageHero from '@/app/components/ui/PageHero'
import { getFeaturedPost, getNonFeaturedPosts } from './data/blog'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Blog | Özgür İrade Derneği',
    description: 'Toplumsal dayanışma, aile değerleri ve sivil toplum üzerine yazılar.',
}

export default function BlogPage() {
    const featured = getFeaturedPost()
    const rest = getNonFeaturedPosts()

    return (
        <main>
            <PageHero
                title="Blog"
                subtitle="Düşünce, Deneyim ve İlham"
                image="/banner.png"
                breadcrumbs={[
                    { label: 'Ana Sayfa', href: '/' },
                    { label: 'Blog' },
                ]}
            />

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Öne çıkan + kompakt liste */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">

                        {/* Featured Card */}
                        <Link
                            href={`/blog/${featured.slug}`}
                            className="md:col-span-2 group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                        >
                            <div className="relative h-80 overflow-hidden bg-gray-100">
                                <Image
                                    src={featured.coverImage}
                                    alt={featured.title}
                                    fill
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex gap-1.5 flex-wrap">
                                        {featured.tags.slice(0, 2).map((tag) => (
                                            <span key={tag} className="text-xs bg-green-50 text-green-600 px-2.5 py-0.5 rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                        <Calendar size={13} />
                                        {featured.date}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition leading-snug">
                                    {featured.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {featured.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600 group-hover:gap-2 transition-all">
                                    Devamını oku <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>

                        {/* Kompakt liste */}
                        <div className="flex flex-col gap-4">
                            {rest.slice(0, 4).map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition group"
                                >
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                        <Calendar size={13} />
                                        {post.date}
                                    </div>
                                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition leading-snug">
                                        {post.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>

                    </div>

                    {rest.length > 4 && (
                        <>
                            <hr className="border-gray-200 mb-12" />
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {rest.slice(4).map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                                    >
                                        <div className="relative h-48 overflow-hidden bg-gray-100">
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                                placeholder="blur"
                                                blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                            />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                                <Calendar size={13} />
                                                {post.date}
                                            </div>
                                            <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition leading-snug">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            {post.tags.length > 0 && (
                                                <div className="flex gap-1.5 mt-3 flex-wrap">
                                                    {post.tags.slice(0, 3).map((tag) => (
                                                        <span key={tag} className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                </div>
            </section>
        </main>
    )
}