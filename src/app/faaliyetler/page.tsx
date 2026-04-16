import PageHero from "@/app/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { services } from "./data/services"

export default function FaaliyetlerPage() {
    return (
        <main className="flex flex-col bg-white">

            <PageHero
                title="FAALİYETLERİMİZ"
                subtitle="Toplumsal Destek Alanlarımız"
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Faaliyetlerimiz" },
                ]}
            />

            {/* Content */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

                    {/* Header */}
                    <div className="text-center mb-14">
                        <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-3">
                            Faaliyetler
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                            Toplumsal Destek Alanlarımız
                        </h1>

                        <div className="mx-auto mb-6 h-[1px] w-20 bg-gray-200" />

                        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                            Toplumun farklı ihtiyaç alanlarına yönelik geliştirdiğimiz projeler ile
                            sürdürülebilir destek sağlıyoruz.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((item) => (
                            <article
                                key={item.slug}
                                className="group border border-gray-100 rounded-2xl bg-white hover:shadow-lg transition duration-300"
                            >
                                <div className="p-8 flex flex-col h-full">

                                    {/* Logo */}
                                    <div className="mb-6">
                                        <div className="h-14 w-40 flex items-center justify-center border border-gray-100 rounded-xl bg-white">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={120}
                                                height={50}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition">
                                        {item.title}
                                    </h3>

                                    {/* Desc */}
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                        {item.subtitle}
                                    </p>

                                    {/* Button */}
                                    <div className="mt-auto">
                                        <Link
                                            href={`/faaliyetler/${item.slug}`}
                                            className="text-sm uppercase tracking-wide text-green-700 hover:underline"
                                        >
                                            Detayları Gör →
                                        </Link>
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}