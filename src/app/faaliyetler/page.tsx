import PageHero from "@/app/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "./data/services"

export default function FaaliyetlerPage() {
    return (
        <main className="flex flex-col bg-white min-h-screen">

            <PageHero
                title="FAALİYETLERİMİZ"
                subtitle="Toplumsal Destek Alanlarımız"
                image="/banner.png"
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Faaliyetlerimiz" },
                ]}
            />

            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

                    {/* Başlık */}
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-1 h-6 bg-green-600 rounded-full" />
                        <h2 className="text-xl font-semibold text-gray-800">
                            Tüm Faaliyetler
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/faaliyetler/${item.slug}`}
                                className="group border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:border-green-100 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                </div>

                                <div className="p-5">
                                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                                        {item.subtitle}
                                    </p>

                                    <div className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
                                        Detayları Gör
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}