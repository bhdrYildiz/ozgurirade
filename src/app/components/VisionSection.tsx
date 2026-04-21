import Image from "next/image";

export default function VisionSection() {
    return (
        <section className="py-10 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Görsel — mobilde üstte, masaüstünde solda */}
                <div className="relative w-full h-[240px] sm:h-[300px] md:h-[400px] order-1 md:order-1">
                    <Image
                        src="/dernek-foto2.jpg"
                        alt="Özgür İrade Derneği"
                        fill
                        className="object-cover rounded-2xl shadow-md"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgo="
                    />
                </div>

                {/* Metin — mobilde altta */}
                <div className="order-2 md:order-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 md:mb-6">
                        Vizyonumuz
                    </h2>

                    <div className="space-y-3 md:space-y-4 text-gray-600 text-sm leading-relaxed">
                        <p>
                            Derneğimizin vizyonunda özgür irade; yardıma muhtaç bir bireyin,
                            sadece temel ihtiyaçlarını karşılamak değil, onu kendi ayakları üzerinde
                            durabilecek donanıma kavuşturmaktır. Çünkü bir insanın iradesini
                            özgürce kullanabilmesi için öncelikle temel insani yaşam standartlarına
                            sahip olması ve sosyal güvence hissetmesi gerekir.
                        </p>

                        <p>
                            Özgür irade; bir bireyin seçim yapabilme yeteneğidir. Derneğimizin amacı
                            ise, bu seçimlerin cehalet, yoksulluk ya da çaresizlik nedeniyle değil;
                            bilgi, refah ve umutla yapılmasını sağlamaktır. Özgür irade ile verilen her
                            karar, toplumun daha sağlam temeller üzerine inşa edilmesini sağlar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}