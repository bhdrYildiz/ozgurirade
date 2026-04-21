import PageHero from "@/app/components/ui/PageHero";

export default function MisyonVizyonPage() {
    return (
        <main>

            <PageHero
                title="Misyon & Vizyon"
                subtitle="Gelişerek Değiştirmek, Birlikte Güçlenmek"
                image="/banner.png"
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Kurumsal", href: "/kurumsal/misyonvevizyon" },
                    { label: "Misyon & Vizyon" },
                ]}
            />

            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-12">

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-green-700">
                                Misyonumuz
                            </h2>

                            <p className="text-gray-500 text-sm italic">
                                “Gelişerek Değiştirmek, Birlikte Güçlenmek”
                            </p>

                            <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                Görevimiz, toplumun en küçük birimi olan aileden başlayarak,
                                sivil toplumun en geniş halkalarına kadar uzanan bir gelişim
                                ve destek köprüsü kurmaktır.
                            </p>

                            <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">

                                <li>
                                    <span className="text-xl text-gray-800">
                                        Aileyi ve Bireyi Güçlendirmek:
                                    </span>{" "}
                                    <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                        Sosyal ve ekonomik zorluklarla mücadele eden ailelere,
                                        sadece anlık çözümler değil, kendi iradeleriyle hayatlarını
                                        değiştirebilecekleri imkânlar sunmak.
                                    </p>
                                </li>

                                <li>
                                    <span className="text-xl text-gray-800">
                                        Sivil Toplumu Geliştirmek:
                                    </span>{" "}
                                    <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                        Dernek, vakıf ve STK’lara yönelik eğitimlerle kurumsal
                                        kapasiteyi artırmak.
                                    </p>
                                </li>

                                <li>
                                    <span className="text-xl text-gray-800">
                                        İş Birliği Kültürü Oluşturmak:
                                    </span>{" "}
                                    <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                        Yardımlaşmayı rekabet değil imece haline getirerek
                                        toplumsal faydayı büyütmek.
                                    </p>
                                </li>

                                <li>
                                    <span className="text-xl text-gray-800">
                                        Onurlu Yardımlaşma:
                                    </span>{" "}
                                    <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                        “Sağ elin verdiğini sol el görmeden” anlayışıyla insan
                                        onurunu korumak.
                                    </p>
                                </li>

                            </ul>
                        </div>

                        {/* VİZYON */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-green-700">
                                Vizyonumuz
                            </h2>

                            <p className="text-gray-500 text-sm italic">
                                “Dayanışmada Profesyonellik, Kalpte Samimiyet”
                            </p>

                            <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                Hayalimiz; her bireyin kendi özgür iradesiyle geleceğine
                                yön verebildiği ve tüm sivil toplum kuruluşlarının bir
                                orkestra uyumuyla çalıştığı bir gelecek inşa etmektir.
                            </p>

                            <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                Türkiye’de sivil toplum denince sadece “yardım toplamak”
                                değil, “insan ve toplum mimarlığı” anlayışının hâkim olduğu
                                bir yapı oluşturmayı hedefliyoruz.
                            </p>

                            <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                Bilginin ışığıyla aydınlanmış, eğitimle güçlenmiş ve
                                birbirine samimiyetle kenetlenmiş bir sivil toplum
                                ekosisteminin öncüsü olmayı amaçlıyoruz.
                            </p>

                            <p className="space-y-6 text-gray-700 leading-relaxed text-base">
                                Kimsenin arkada kalmadığı, her derneğin bir okul, her
                                gönüllünün birer meşale olduğu bir gelecek için
                                çalışıyoruz.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}