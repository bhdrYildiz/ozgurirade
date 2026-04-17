import PageHero from "@/app/components/ui/PageHero";

export default function HakkimizdaPage() {
    return (
        <main>

            <PageHero
                title="Hakkımızda"
                subtitle="İyiliği Paylaşarak, Bilgiyi Çoğaltarak"
                image="/banner.png"
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
                    { label: "Hakkımızda" },
                ]}
            />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    {/* Giriş */}
                    <div className="mb-10 text-center">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                            “İnsan neyi değiştirebilir?”
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Biz bu soruya tek bir cevap veriyoruz: Özgür iradesiyle her şeyi.
                        </p>
                    </div>

                    {/* İçerik */}
                    <div className="space-y-6 text-gray-600 leading-relaxed text-sm">

                        <p>
                            Özgür İrade Aile ve Sosyal Yardımlaşma Derneği olarak, sadece
                            ihtiyaç anında kapısı çalınan bir kurum değil, bir yol arkadaşı
                            olma hayaliyle yola çıktık. İnanıyoruz ki; gerçek güç birinin
                            elinden tutmakta değil, o elin kendi başına ayağa kalkmasını
                            sağlayacak bir dayanışma ağı örmektedir.
                        </p>

                        <p>
                            Bizim için aile, sadece kan bağıyla değil, ortak bir gelecek
                            hayaliyle birbirine bağlanan koca bir toplumu ifade eder.
                        </p>

                        <p>
                            Ancak biz, yolun sadece bir kısmında yürümekle yetinmedik.
                            İyilik yapmanın da bir ustalığı, paylaşmanın da bir yöntemi
                            olduğuna inanıyoruz. Bu yüzden derneğimizin kalbine
                            <span className="font-medium text-gray-800">
                                {" "}“Dayanışmanın Dayanışması”
                            </span>{" "}
                            fikrini yerleştirdik.
                        </p>

                        <p>
                            Sivil toplumun gücüne inanıyor, bu yolda yürüyen diğer dernek,
                            vakıf ve STK’larla omuz omuza vermeyi en büyük sorumluluğumuz
                            görüyoruz. Bilginin paylaştıkça çoğaldığını biliyor; edindiğimiz
                            tecrübeleri, eğitimleri ve kurumsal birikimimizi diğer gönüllü
                            kuruluşlarla paylaşarak iyiliğin etkisini büyütüyoruz.
                        </p>

                        <p>
                            Biz burada sadece sofraları değil; bilgiyi, tecrübeyi ve
                            geleceği paylaşıyoruz.
                        </p>

                    </div>

                </div>
            </section>

        </main>
    );
}