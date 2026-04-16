'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
    ChevronDown,
    Search,
    X,
    GraduationCap,
    HeartPulse,
    Droplets,
    Users,
    HandCoins,
    Moon,
    Building2,
    Target,
    Eye
} from 'lucide-react'

const faaliyetler = [
    { icon: GraduationCap, label: 'Eğitim & Gelişim', href: '/faaliyetler/egitim' },
    { icon: HeartPulse, label: 'Sağlık', href: '/faaliyetler/saglik' },
    { icon: Droplets, label: 'Su Kuyusu', href: '/faaliyetler/su-kuyusu' },
    { icon: Users, label: 'Yetim', href: '/faaliyetler/yetim' },
    { icon: HandCoins, label: 'Zekat', href: '/faaliyetler/zekat' },
    { icon: Moon, label: 'Ramazan', href: '/faaliyetler/ramazan' },
    { icon: HandCoins, label: 'Kurban', href: '/faaliyetler/kurban' },
]

const kurumsal = [
    { icon: Building2, label: 'Hakkımızda', href: "/kurumsal/hakkimizda" },
    { icon: Target, label: 'Misyon ve Vizyon', href: '/kurumsal/misyonvevizyon' },
]

type MenuKey = 'faaliyetler' | 'kurumsal' | null

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MenuKey>(null)
    const [searchOpen, setSearchOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenu(null)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const toggle = (key: MenuKey) =>
        setActiveMenu((prev) => (prev === key ? null : key))

    return (
        <header ref={navRef} className="relative z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <div className="leading-tight">
                        <strong className="block text-green-700 text-sm font-bold tracking-wide">
                            ÖZGÜR İRADE DERNEĞİ
                        </strong>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="flex items-center gap-1 flex-1">
                    {/* Faaliyetler */}
                    <div className="relative">
                        <button
                            onClick={() => toggle('faaliyetler')}
                            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-green-700 transition-colors"
                        >
                            Faaliyetler
                            <ChevronDown
                                size={14}
                                className={`transition-transform ${activeMenu === 'faaliyetler' ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {activeMenu === 'faaliyetler' && (
                            <div className="absolute top-full left-0 mt-2 w-[420px] bg-white border border-gray-100 rounded-2xl shadow-xl p-5">
                                <div className="grid grid-cols-2 gap-1">
                                    {faaliyetler.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setActiveMenu(null)}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 text-sm transition-colors"
                                            >
                                                <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <Icon size={16} />
                                                </span>
                                                {item.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Kurumsal */}
                    <div className="relative">
                        <button
                            onClick={() => toggle('kurumsal')}
                            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-green-700 transition-colors"
                        >
                            Kurumsal
                            <ChevronDown
                                size={14}
                                className={`transition-transform ${activeMenu === 'kurumsal' ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {activeMenu === 'kurumsal' && (
                            <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-100 rounded-2xl shadow-xl p-4">
                                <div className="flex flex-col gap-1">
                                    {kurumsal.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setActiveMenu(null)}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 text-sm transition-colors"
                                            >
                                                <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <Icon size={16} />
                                                </span>
                                                {item.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/iletisim"
                        className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-green-700 transition-colors"
                    >
                        İletişim
                    </Link>
                </nav>

                {/* Search */}
                <div className="relative hidden md:flex items-center">
                    {searchOpen ? (
                        <div className="flex items-center gap-2">
                            <input
                                autoFocus
                                type="text"
                                placeholder="Haber arayın..."
                                className="w-64 px-4 py-1.5 pl-9 border border-gray-200 rounded-full text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white"
                            />
                            <Search size={15} className="absolute left-3 text-gray-400" />
                            <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={16} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full text-sm text-gray-400 bg-gray-50 hover:border-green-400 transition-colors w-52"
                        >
                            <Search size={14} />
                            Haberler için arayınız...
                        </button>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                        href="/bagis"
                        className="px-5 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                        Bağış Yap
                    </Link>
                </div>
            </div>
        </header>
    )
}