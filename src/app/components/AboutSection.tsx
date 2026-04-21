import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-10 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-3 md:mb-4">
                        ÖZGÜR İRADE
                    </h2>

                    <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
                        Aile ve Sosyal Yardımlaşma Derneği
                    </h3>

                    <p className="italic text-gray-500 mb-4 md:mb-6 text-sm md:text-base">
                        "Özgür Seçim, Bilinçli Toplum, Güçlü Aile"
                    </p>

                    <div className="space-y-3 md:space-y-4 text-gray-600 text-sm leading-relaxed">
                        <p>
                            Özgür İrade Aile ve Sosyal Yardımlaşma Derneği olarak ismimizi,
                            insanın en temel ve en onurlu yetisinden alıyoruz: Özgür İrade.
                            Modern dünyada bireyin kendi kararlarını verme, hayatına yön çizme ve
                            eylemlerinin sorumluluğunu üstlenme gücü, sadece felsefi bir kavram
                            değil, toplumsal kalkınmanın da anahtarıdır.
                        </p>

                        <p>
                            Özgür irade; insanın, dış baskılardan, ekonomik zorunluluklardan veya
                            toplumsal dayatmalardan bağımsız olarak, vicdanı ve aklıyla hareket
                            edebilmesidir. Ancak gerçek özgür irade, sadece bireysel bir tercih değil,
                            aynı zamanda başkalarının haklarına saygı duyan ve toplumsal
                            sorumlulukla harmanlanan bir bilinç düzeyidir.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-full h-[240px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/dernek-foto.jpg"
                            alt="Özgür İrade Derneği"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}