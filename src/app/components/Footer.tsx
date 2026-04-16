import Link from 'next/link'
import {
    Mail,
    Phone,
    MapPin,
    Heart
} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo.jpeg"
                                alt="Özgür İrade Derneği"
                                width={40}
                                height={40}
                            />

                            <span className="text-white font-semibold">
                                Özgür İrade Derneği
                            </span>
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                        Aile ve Sosyal Yardımlaşma Derneği olarak,
                        özgür irade ve toplumsal dayanışma bilinciyle
                        ihtiyaç sahiplerine destek sağlıyoruz.
                    </p>
                </div>

                {/* Faaliyetler */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Faaliyetler</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/faaliyetler/egitim" className="hover:text-green-400">Eğitim & Gelişim</Link></li>
                        <li><Link href="/faaliyetler/kurban" className="hover:text-green-400">Kurban</Link></li>
                        <li><Link href="/faaliyetler/ramazan" className="hover:text-green-400">Ramazan</Link></li>
                        <li><Link href="/faaliyetler/saglik" className="hover:text-green-400">Sağlık</Link></li>
                        <li><Link href="/faaliyetler/su-kuyusu" className="hover:text-green-400">Su Kuyusu</Link></li>
                        <li><Link href="/faaliyetler/yetim" className="hover:text-green-400">Yetim</Link></li>
                    </ul>
                </div>

                {/* Kurumsal */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Kurumsal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/hakkimizda" className="hover:text-green-400">Hakkımızda</Link></li>
                        <li><Link href="/misyonumuz" className="hover:text-green-400">Misyonumuz</Link></li>
                        <li><Link href="/vizyonumuz" className="hover:text-green-400">Vizyonumuz</Link></li>
                    </ul>
                </div>

                {/* İletişim */}
                <div>
                    <h3 className="text-white font-semibold mb-4">İletişim</h3>

                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <MapPin size={16} />
                            İstanbul, Türkiye
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} />
                            +90 5XX XXX XX XX
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} />
                            info@dernek.org
                        </li>
                    </ul>
                </div>

            </div>
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-center text-xs text-gray-500">

                    <p>
                        © {new Date().getFullYear()} Özgür İrade Derneği. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>

        </footer>
    )
}