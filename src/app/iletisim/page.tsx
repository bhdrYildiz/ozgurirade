import PageHero from "@/app/components/ui/PageHero";

export default function IletisimPage() {
    return (
        <main>
            <PageHero
                title="İletişim"
                subtitle="Size Bir İyilik Kadar Uzağız"
                image="/banner.png"
                breadcrumbs={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "İletişim" },
                ]}
            />

            {/* Harita */}
            <div className="w-full h-80 md:h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.7!2d29.024!3d40.990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8b3b7a0defd%3A0x0!2sAhmet%20Rasim%20Sk.%20No%3A44%2C%20Hasanpa%C5%9Fa%2C%2034722%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dernek Konumu"
                />
            </div>
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Size bir iyilik kadar uzağız!
                            </h2>
                            <div className="w-10 h-0.5 bg-gray-900 mb-8" />

                            <ContactForm />
                        </div>

                        {/* Sağ: İletişim Bilgileri */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                İletişim Bilgilerimiz
                            </h2>
                            <div className="w-10 h-0.5 bg-gray-900 mb-8" />

                            <div className="space-y-6">
                                <ContactInfoRow
                                    icon={
                                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    }
                                    label="Adres"
                                    value={
                                        <span>
                                            Ahmet Rasim Sk. No:44, Hasanpaşa,<br />
                                            34722 Kadıköy / İstanbul<br />
                                            <span className="text-gray-400 text-xs">Mısır / Kahire (Uluslararası Temsilcilik)</span>
                                        </span>
                                    }
                                />
                                <ContactInfoRow
                                    icon={
                                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    }
                                    label="E-posta"
                                    value={
                                        <a href="mailto:info@hayattaiyilikvar.org" className="hover:text-emerald-600 transition-colors">
                                            info@hayattaiyilikvar.org
                                        </a>
                                    }
                                />
                                <ContactInfoRow
                                    icon={
                                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    }
                                    label="Telefon"
                                    value={
                                        <span>
                                            <a href="tel:+905382497264" className="hover:text-emerald-600 transition-colors">+90 538 249 72 64</a>
                                            <span className="text-gray-400 mx-1">·</span>
                                            <a href="tel:+905315568954" className="hover:text-emerald-600 transition-colors">+90 531 556 89 54</a>
                                        </span>
                                    }
                                />
                                <ContactInfoRow
                                    icon={
                                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    }
                                    label="Web"
                                    value={
                                        <a href="https://www.hayattaiyilikvar.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                                            www.hayattaiyilikvar.org
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

/* ─── Küçük yardımcı bileşenler ─── */

function ContactInfoRow({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-0.5">{icon}</div>
            <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-0.5">
                    {label}
                </span>
                <div className="text-sm text-gray-700 leading-relaxed">{value}</div>
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <form
            action="https://formsubmit.co/info@hayattaiyilikvar.org"
            method="POST"
            className="space-y-4"
        >
            {/* FormSubmit ayarları */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.hayattaiyilikvar.org/iletisim?success=true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Adınız ve Soyadınız"
                    required
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-posta Adresiniz"
                    required
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon Numaranız"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Konu"
                    required
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
            </div>

            <textarea
                name="message"
                placeholder="Mesajınız..."
                rows={6}
                required
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition resize-none"
            />

            <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200"
            >
                Gönder
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </form>
    );
}