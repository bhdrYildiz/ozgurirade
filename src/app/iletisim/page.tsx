import PageHero from "@/app/components/ui/PageHero";

export default function IletisimPage() {
    return (
        <main className="bg-gray-50">
            <PageHero
                title="İletişim"
                subtitle="Size Bir İyilik Kadar Uzağız"
                image="/banner.png"
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "İletişim" },
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
                <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.384352178171!2d28.9390718!3d41.0168464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa382ec143fb3%3A0xda016a5de5bf299d!2zRW5uZWFncmFtIEXEn2l0aW0gdmUgRGFuxLHFn21hbmzEsWs!5e0!3m2!1str!2str!4v1785494455554!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dernek Konumu"
                    />
                </div>
            </div>

            {/* İçerik */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* SOL - FORM */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                                Size bir iyilik kadar uzağız
                            </h2>
                            <div className="w-12 h-0.5 bg-emerald-600 mb-6" />

                            <ContactForm />
                        </div>

                        {/* SAĞ - BİLGİLER */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                                İletişim Bilgilerimiz
                            </h2>
                            <div className="w-12 h-0.5 bg-emerald-600 mb-6" />

                            <div className="space-y-6">
                                <ContactInfoRow
                                    label="Adres"
                                    value={
                                        <span>
                                            Molla Gürani, Zaviye Sk. No:4 Kat:3, 34096 Fatih/İstanbul<br />
                                            <span className="text-gray-400 text-xs">
                                                İstanbul / Türkiye
                                            </span>
                                        </span>
                                    }
                                />
                                <ContactInfoRow
                                    label="E-posta"
                                    value={
                                        <a href="mailto:info@ozgurirade.org" className="hover:text-emerald-600 transition">
                                            bilgi@ozgurirade.com
                                        </a>
                                    }
                                />
                                <ContactInfoRow
                                    label="Telefon"
                                    value={
                                        <span>
                                            <a href="tel:+905382497264" className="hover:text-emerald-600 transition">
                                                +90 530 896 49 22
                                            </a>
                                        </span>
                                    }
                                />
                                <ContactInfoRow
                                    label="Web"
                                    value={
                                        <a
                                            href="https://www.hayattaiyilikvar.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-emerald-600 transition"
                                        >
                                            www.ozgurirade.org
                                        </a>
                                    }
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

function ContactInfoRow({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) {
    return (
        <div>
            <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">
                {label}
            </span>
            <div className="text-sm text-gray-700 leading-relaxed">{value}</div>
        </div>
    );
}
function ContactForm() { return (<form action="https://formsubmit.co/info@hayattaiyilikvar.org" method="POST" className="space-y-4" > {/* FormSubmit ayarları */} <input type="hidden" name="_captcha" value="false" /> <input type="hidden" name="_next" value="https://www.hayattaiyilikvar.org/iletisim?success=true" /> <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> <input type="text" name="name" placeholder="Adınız ve Soyadınız" required className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" /> <input type="email" name="email" placeholder="E-posta Adresiniz" required className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" /> </div> <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> <input type="tel" name="phone" placeholder="Telefon Numaranız" className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" /> <input type="text" name="subject" placeholder="Konu" required className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" /> </div> <textarea name="message" placeholder="Mesajınız..." rows={6} required className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition resize-none" /> <button type="submit" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200" > Gönder <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /> </svg> </button> </form>); }