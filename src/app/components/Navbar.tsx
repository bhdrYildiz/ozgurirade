'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
    ChevronDown,
    GraduationCap,
    HeartPulse,
    Droplets,
    Users,
    HandCoins,
    Moon,
    Building2,
    Target,
    Menu,
    X,
} from 'lucide-react'
import Image from 'next/image'

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
    { icon: Building2, label: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
    { icon: Target, label: 'Misyon ve Vizyon', href: '/kurumsal/misyonvevizyon' },
]

type MenuKey = 'faaliyetler' | 'kurumsal' | null

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MenuKey>(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState<MenuKey>(null)
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

    // Mobil açıkken body scroll'u kapat
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    const toggle = (key: MenuKey) =>
        setActiveMenu((prev) => (prev === key ? null : key))

    const toggleMobile = (key: MenuKey) =>
        setMobileExpanded((prev) => (prev === key ? null : key))

    const closeAll = () => {
        setMobileOpen(false)
        setMobileExpanded(null)
        setActiveMenu(null)
    }

    return (
        <header ref={navRef} className="relative z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center gap-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={closeAll}>
                    <div className="w-12 h-12 md:w-16 md:h-16 relative">
                        <Image
                            src="/Logo.png"
                            alt="Özgür İrade Derneği Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="leading-tight">
                        <strong className="block text-green-700 text-xs md:text-sm font-bold tracking-wide">
                            ÖZGÜR İRADE DERNEĞİ
                        </strong>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 flex-1">
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

                    <Link href="/haberler" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-green-700 transition-colors">
                        Haberler ve Duyurular
                    </Link>
                    <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-green-700 transition-colors">
                        Blog
                    </Link>
                    <Link href="/iletisim" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-green-700 transition-colors">
                        İletişim
                    </Link>
                </nav>

                {/* Desktop Bağış Butonu */}
                <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                    <Link
                        href="/bagis"
                        className="px-5 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                        Bağış Yap
                    </Link>
                </div>

                {/* Mobile Sağ: Bağış + Hamburger */}
                <div className="flex md:hidden items-center gap-2 ml-auto">
                    <Link
                        href="/bagis"
                        onClick={closeAll}
                        className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                        Bağış Yap
                    </Link>
                    <button
                        onClick={() => setMobileOpen((p) => !p)}
                        className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label="Menüyü aç/kapat"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
                    <nav className="px-4 py-4 flex flex-col gap-1">

                        {/* Faaliyetler accordion */}
                        <div>
                            <button
                                onClick={() => toggleMobile('faaliyetler')}
                                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                Faaliyetler
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${mobileExpanded === 'faaliyetler' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {mobileExpanded === 'faaliyetler' && (
                                <div className="ml-4 mt-1 flex flex-col gap-1">
                                    {faaliyetler.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeAll}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-600 text-sm transition-colors"
                                            >
                                                <span className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Icon size={14} />
                                                </span>
                                                {item.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Kurumsal accordion */}
                        <div>
                            <button
                                onClick={() => toggleMobile('kurumsal')}
                                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                Kurumsal
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${mobileExpanded === 'kurumsal' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {mobileExpanded === 'kurumsal' && (
                                <div className="ml-4 mt-1 flex flex-col gap-1">
                                    {kurumsal.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeAll}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-600 text-sm transition-colors"
                                            >
                                                <span className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Icon size={14} />
                                                </span>
                                                {item.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </div>

                        <Link href="/haberler" onClick={closeAll} className="px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                            Haberler ve Duyurular
                        </Link>
                        <Link href="/blog" onClick={closeAll} className="px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                            Blog
                        </Link>
                        <Link href="/iletisim" onClick={closeAll} className="px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                            İletişim
                        </Link>

                        <div className="mt-4 px-4">
                            <Link
                                href="/bagis"
                                onClick={closeAll}
                                className="block w-full text-center py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors"
                            >
                                Bağış Yap
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}