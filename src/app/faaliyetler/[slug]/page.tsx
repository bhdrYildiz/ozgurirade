import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { services } from '@/app/faaliyetler/data/services'
import PageHero from '@/app/components/ui/PageHero'

type Props = {
    params: { slug: string }
}

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
    const item = services.find((s) => s.slug === params.slug)
    if (!item) return {}
    return {
        title: `${item.title} | Özgür İrade Derneği`,
        description: item.subtitle,
    }
}

export default function FaaliyetDetay({ params }: Props) {
    const item = services.find((s) => s.slug === params.slug)
    if (!item) notFound()

    const currentIndex = services.findIndex((s) => s.slug === params.slug)
    const prev = currentIndex > 0 ? services[currentIndex - 1] : null
    const next = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <PageHero
                title={item.title}
                subtitle={item.subtitle}
                image="/banner.png"
                breadcrumbs={[
                    { label: 'Ana Sayfa', href: '/' },
                    { label: 'Faaliyetler', href: '/faaliyetler' },
                    { label: item.title },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
                <div className="grid lg:grid-cols-[1fr_280px] gap-12">
                    <article>
                        <Link
                            href="/faaliyetler"
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors duration-200 mb-8 group"
                        >
                            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                            Tüm Faaliyetler
                        </Link>

                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-sm">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgo="
                            />
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-3">
                            {item.title}
                        </h1>

                        <p className="text-base text-gray-600 leading-relaxed border-l-2 border-green-500 pl-4 mb-10">
                            {item.subtitle}
                        </p>

                        <div className="w-full h-px bg-gray-100 mb-10" />

                        <div className="space-y-5">
                            {item.content.map((text, i) => (
                                <p key={i} className="text-gray-700 text-[15px] leading-[1.85]">
                                    {text}
                                </p>
                            ))}
                        </div>

                        <div className="mt-14 pt-8 border-t border-gray-100 grid sm:grid-cols-2 gap-4">
                            {prev ? (
                                <Link
                                    href={`/faaliyetler/${prev.slug}`}
                                    className="group flex flex-col gap-1 p-4 border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-md transition-all"
                                >
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <ArrowLeft size={12} />
                                        Önceki Faaliyet
                                    </span>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors line-clamp-1">
                                        {prev.title}
                                    </p>
                                </Link>
                            ) : <div />}

                            {next && (
                                <Link
                                    href={`/faaliyetler/${next.slug}`}
                                    className="group flex flex-col gap-1 p-4 border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-md transition-all text-right"
                                >
                                    <span className="text-xs text-gray-400 flex items-center gap-1 justify-end">
                                        Sonraki Faaliyet
                                        <ArrowRight size={12} />
                                    </span>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors line-clamp-1">
                                        {next.title}
                                    </p>
                                </Link>
                            )}
                        </div>
                    </article>

                    {/* ── Sidebar ── */}
                    <aside className="flex flex-col gap-6 lg:sticky lg:top-8 self-start">

                        {/* Diğer Faaliyetler */}
                        <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                Diğer Faaliyetler
                            </h3>
                            <div className="flex flex-col gap-1">
                                {services.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/faaliyetler/${s.slug}`}
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-200
                                            ${s.slug === params.slug
                                                ? 'bg-green-50 text-green-700 font-semibold'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-green-700'
                                            }`}
                                    >
                                        {s.slug === params.slug && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                        )}
                                        {s.title}
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