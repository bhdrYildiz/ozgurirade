import { services } from "@/app/faaliyetler/data/services";
import PageHero from "@/app/components/ui/PageHero";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export default function FaaliyetDetay({ params }: Props) {
    const item = services.find(s => s.slug === params.slug);

    if (!item) {
        return <div className="p-10">Sayfa bulunamadı</div>;
    }

    return (
        <main>

            <PageHero
                title={item.title}
                subtitle={item.subtitle}
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Faaliyetler", href: "/faaliyetler" },
                    { label: item.title },
                ]}
            />

            <section className="py-16 bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 space-y-8">

                    {/* Görsel */}
                    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* İçerik */}
                    <div className="space-y-5 text-gray-900 leading-relaxed text-sm ">
                        {item.content.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}