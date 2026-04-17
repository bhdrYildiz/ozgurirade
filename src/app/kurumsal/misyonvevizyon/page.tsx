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

                    {/* GRID */}
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* MİSYON */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-green-700">
                                Misyonumuz
                            </h2>

                            <p className="text-gray-500 text-sm italic">
                                “Gelişerek Değiştirmek, Birlikte Güçlenmek”
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Görevimiz, toplumun en küçük birimi olan aileden başlayarak,
                                sivil toplumun en geniş halkalarına kadar uzanan bir gelişim
                                ve destek köprüsü kurmaktır.
                            </p>

                            <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">

                                <li>
                                    <span className="font-medium text-gray-800">
                                        Aileyi ve Bireyi Güçlendirmek:
                                    </span>{" "}
                                    Sosyal ve ekonomik zorluklarla mücadele eden ailelere,
                                    sadece anlık çözümler değil, kendi iradeleriyle hayatlarını
                                    değiştirebilecekleri imkânlar sunmak.
                                </li>

                                <li>
                                    <span className="font-medium text-gray-800">
                                        Sivil Toplumu Geliştirmek:
                                    </span>{" "}
                                    Dernek, vakıf ve STK’lara yönelik eğitimlerle kurumsal
                                    kapasiteyi artırmak.
                                </li>

                                <li>
                                    <span className="font-medium text-gray-800">
                                        İş Birliği Kültürü Oluşturmak:
                                    </span>{" "}
                                    Yardımlaşmayı rekabet değil imece haline getirerek
                                    toplumsal faydayı büyütmek.
                                </li>

                                <li>
                                    <span className="font-medium text-gray-800">
                                        Onurlu Yardımlaşma:
                                    </span>{" "}
                                    “Sağ elin verdiğini sol el görmeden” anlayışıyla insan
                                    onurunu korumak.
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

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Hayalimiz; her bireyin kendi özgür iradesiyle geleceğine
                                yön verebildiği ve tüm sivil toplum kuruluşlarının bir
                                orkestra uyumuyla çalıştığı bir gelecek inşa etmektir.
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Türkiye’de sivil toplum denince sadece “yardım toplamak”
                                değil, “insan ve toplum mimarlığı” anlayışının hâkim olduğu
                                bir yapı oluşturmayı hedefliyoruz.
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Bilginin ışığıyla aydınlanmış, eğitimle güçlenmiş ve
                                birbirine samimiyetle kenetlenmiş bir sivil toplum
                                ekosisteminin öncüsü olmayı amaçlıyoruz.
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed">
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