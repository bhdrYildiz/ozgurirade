import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '../data/blog'

type Props = {
    params: { slug: string }
}

/* ─── Static paths ─── */
export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }))
}

/* ─── Dynamic metadata ─── */
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

/* ─── Page ─── */
export default function BlogPostPage({ params }: Props) {
    const post = getPostBySlug(params.slug)
    if (!post) notFound()

    // Aynı etiketten ilgili yazılar (kendisi hariç, max 2)
    const related = getAllPosts()
        .filter(
            (p) =>
                p.slug !== post.slug &&
                p.tags.some((t) => post.tags.includes(t))
        )
        .slice(0, 2)

    return (
        <main>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

                {/* Geri */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-green-600 transition mb-8"
                >
                    <ArrowLeft size={15} />
                    Tüm yazılar
                </Link>

                {/* Cover */}
                <div className="rounded-2xl overflow-hidden mb-8 aspect-video bg-gray-100">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar size={13} />
                        {post.date}
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-green-50 text-green-600 px-2.5 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Başlık */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                    {post.title}
                </h1>

                {/* Yazar */}
                <p className="text-sm text-gray-400 mb-8">
                    {post.author}
                    {post.authorTitle && (
                        <>
                            <span className="text-gray-300 mx-1">·</span>
                            {post.authorTitle}
                        </>
                    )}
                </p>

                <hr className="border-gray-100 mb-8" />

                {/* İçerik */}
                <div
                    className="prose prose-sm prose-gray max-w-none
                        prose-headings:font-semibold prose-headings:text-gray-800
                        prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3
                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                        prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* İlgili yazılar */}
                {related.length > 0 && (
                    <div className="mt-16">
                        <hr className="border-gray-100 mb-8" />
                        <h2 className="text-lg font-semibold text-gray-800 mb-6">
                            İlgili Yazılar
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {related.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    href={`/blog/${rel.slug}`}
                                    className="p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition group"
                                >
                                    <div className="text-xs text-gray-400 mb-1.5">{rel.date}</div>
                                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition leading-snug">
                                        {rel.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </main>
    )
}