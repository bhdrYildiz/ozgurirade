export default function VisionSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
                <div className="relative order-2 md:order-1">
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
                        <img
                            src="/images/vision.jpg"
                            alt="Vizyon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl font-bold text-green-700 mb-6">
                        Vizyonumuz
                    </h2>

                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        <p>
                            Derneğimizin vizyonunda özgür irade; yardıma muhtaç bir bireyin,
                            sadece temel ihtiyaçlarını karşılamak değil, onu kendi ayakları üzerinde
                            durabilecek donanıma kavuşturmaktır. Çünkü bir insanın iradesini
                            özgürce kullanabilmesi için öncelikle temel insani yaşam standartlarına
                            sahip olması ve sosyal güvence hissetmesi gerekir. Bizler, verdiğimiz her
                            destekle, aile fertlerinin hayatları hakkında bağımsız kararlar
                            verebilmelerini ve potansiyellerini tam anlamıyla hayata geçirebilmelerini
                            amaçlıyoruz.
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