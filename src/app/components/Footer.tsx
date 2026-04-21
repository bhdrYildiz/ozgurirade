import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

                {/* Logo & Açıklama — mobilde tam genişlik */}
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <Image
                            src="/logo.jpeg"
                            alt="Özgür İrade Derneği"
                            width={36}
                            height={36}
                        />
                        <span className="text-white font-semibold text-sm">
                            Özgür İrade Derneği
                        </span>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                        Aile ve Sosyal Yardımlaşma Derneği olarak,
                        özgür irade ve toplumsal dayanışma bilinciyle
                        ihtiyaç sahiplerine destek sağlıyoruz.
                    </p>
                </div>

                {/* Faaliyetler */}
                <div>
                    <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Faaliyetler</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/faaliyetler/egitim" className="hover:text-green-400 transition-colors">Eğitim & Gelişim</Link></li>
                        <li><Link href="/faaliyetler/kurban" className="hover:text-green-400 transition-colors">Kurban</Link></li>
                        <li><Link href="/faaliyetler/ramazan" className="hover:text-green-400 transition-colors">Ramazan</Link></li>
                        <li><Link href="/faaliyetler/saglik" className="hover:text-green-400 transition-colors">Sağlık</Link></li>
                        <li><Link href="/faaliyetler/su-kuyusu" className="hover:text-green-400 transition-colors">Su Kuyusu</Link></li>
                        <li><Link href="/faaliyetler/yetim" className="hover:text-green-400 transition-colors">Yetim</Link></li>
                    </ul>
                </div>

                {/* Kurumsal */}
                <div>
                    <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Kurumsal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/hakkimizda" className="hover:text-green-400 transition-colors">Hakkımızda</Link></li>
                        <li><Link href="/misyonumuz" className="hover:text-green-400 transition-colors">Misyonumuz</Link></li>
                        <li><Link href="/vizyonumuz" className="hover:text-green-400 transition-colors">Vizyonumuz</Link></li>
                    </ul>
                </div>

                {/* İletişim */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">İletişim</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <MapPin size={15} className="flex-shrink-0" />
                            İstanbul, Türkiye
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={15} className="flex-shrink-0" />
                            +90 5XX XXX XX XX
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={15} className="flex-shrink-0" />
                            info@dernek.org
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Özgür İrade Derneği. Tüm hakları saklıdır.</p>
                </div>
            </div>

        </footer>
    )
}