import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, ArrowLeft, Tag, ArrowRight } from 'lucide-react'
import PageHero from '@/app/components/ui/PageHero'
import { getAllPosts, getPostBySlug } from '../data/blog'

type Props = {
    params: { slug: string }
}

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
        } else if (trimmed.startsWith('### ')) {
            elements.push(
                <h3 key={key++} className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                    {trimmed.slice(4)}
                </h3>
            )
        } else if (trimmed.startsWith('- ')) {
            elements.push(
                <li key={key++} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed ml-4">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {trimmed.slice(2)}
                </li>
            )
        } else {
            elements.push(
                <p key={key++} className="text-gray-700 text-[15px] leading-[1.85]">
                    {trimmed}
                </p>
            )
        }
    }

    return elements
}

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPostBySlug(params.slug)
    if (!post) return {}
    return {
        title: `${post.title} | Özgür İrade Derneği`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.coverImage }],
            type: 'article',
            publishedTime: post.dateISO,
            authors: [post.author],
            tags: post.tags,
        },
    }
}

export default function BlogPostPage({ params }: Props) {
    const post = getPostBySlug(params.slug)
    if (!post) notFound()

    const related = getAllPosts()
        .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
        .slice(0, 3)

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <PageHero
                title={post.title}
                subtitle="Blog"
                image="/banner.png"
                breadcrumbs={[
                    { label: 'Ana Sayfa', href: '/' },
                    { label: 'Blog', href: '/blog' },
                    { label: post.title },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12">

                    <article>

                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors duration-200 mb-8 group"
                        >
                            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                            Tüm Yazılar
                        </Link>

                        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video bg-gray-100 shadow-sm">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgo="
                            />
                        </div>

                        {/* Etiketler */}
                        {post.tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap mb-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-medium"
                                    >
                                        <Tag size={10} />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Başlık */}
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-4">
                            {post.title}
                        </h1>

                        {/* Özet */}
                        <p className="text-base text-gray-600 leading-relaxed border-l-2 border-green-500 pl-4 mb-8">
                            {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 pb-6 mb-8 border-b border-gray-100">
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                <Calendar size={14} />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                <span>{post.author}</span>
                                {post.authorTitle && (
                                    <span className="text-gray-400">· {post.authorTitle}</span>
                                )}
                            </div>
                        </div>

                        {/* İçerik */}
                        <div className="space-y-2">
                            {renderContent(post.content)}
                        </div>

                        {/* İlgili Yazılar */}
                        {related.length > 0 && (
                            <div className="mt-16 pt-10 border-t border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-1 h-6 bg-green-600 rounded-full" />
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        İlgili Yazılar
                                    </h2>
                                </div>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {related.map((rel) => (
                                        <Link
                                            key={rel.slug}
                                            href={`/blog/${rel.slug}`}
                                            className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-green-100 transition-all duration-300"
                                        >
                                            <div className="relative h-36 overflow-hidden bg-gray-100">
                                                <Image
                                                    src={rel.coverImage}
                                                    alt={rel.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                                                    <Calendar size={12} />
                                                    {rel.date}
                                                </div>
                                                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 line-clamp-2 leading-snug">
                                                    {rel.title}
                                                </h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* ── Sidebar ── */}
                    <aside className="flex flex-col gap-6 lg:sticky lg:top-8 self-start">

                        {/* Yazar Kartı */}
                        <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                Yazar Hakkında
                            </h3>
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-green-50 flex-shrink-0 border border-green-100">
                                    <Image
                                        src="/Logo.png"
                                        alt="Özgür İrade Derneği"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                                    {post.authorTitle && (
                                        <p className="text-xs text-gray-500 mt-0.5">{post.authorTitle}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Etiketler */}
                        {post.tags.length > 0 && (
                            <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                    Etiketler
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1.5 rounded-xl hover:bg-green-50 hover:text-green-600 hover:border-green-100 transition-colors duration-200 cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Son Yazılar */}
                        <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                Son Yazılar
                            </h3>
                            <div className="flex flex-col gap-4">
                                {getAllPosts()
                                    .filter((p) => p.slug !== post.slug)
                                    .slice(0, 4)
                                    .map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={`/blog/${item.slug}`}
                                            className="group flex gap-3"
                                        >
                                            <div className="relative w-14 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                                <Image
                                                    src={item.coverImage}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-xs font-medium text-gray-700 group-hover:text-green-700 transition-colors duration-300 line-clamp-2 leading-snug">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>

                        {/* Bağış CTA */}
                        <div className="relative rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg hover:shadow-2xl transition-all duration-500 group">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                            <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Destek Ol</p>
                            <h3 className="text-lg font-semibold mb-3 leading-snug">
                                Yardımlarımıza ortak ol
                            </h3>
                            <p className="text-sm opacity-80 mb-5 leading-relaxed">
                                Her bağış, bir hayatı değiştirebilir.
                            </p>
                            <Link
                                href="/bagis"
                                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur text-green-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white transition-all duration-300 group-hover:translate-x-1"
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