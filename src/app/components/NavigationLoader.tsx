'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function NavigationLoader() {
    const pathname = usePathname()
    const [loading, setLoading] = useState(false)
    const [prevPath, setPrevPath] = useState(pathname)

    useEffect(() => {
        if (pathname !== prevPath) {
            setLoading(false)
            setPrevPath(pathname)
        }
    }, [pathname, prevPath])

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a')
            if (!target) return
            const href = target.getAttribute('href')
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return
            if (href !== pathname) {
                setLoading(true)
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [pathname])

    if (!loading) return null

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">

            <div className="relative flex items-center justify-center mb-8">
                <span className="absolute w-20 h-20 rounded-full border-2 border-green-200 animate-ping opacity-60" />
                <span className="absolute w-14 h-14 rounded-full border border-green-300 animate-pulse" />
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-green-50 border border-green-100 z-10">
                    <Image
                        src="/Logo.png"
                        alt="Özgür İrade Derneği"
                        className="w-full h-full object-cover"
                        fill
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgo="
                    />
                </div>
            </div>

            <div className="w-40 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-loading-bar" />
            </div>

            <p className="mt-5 text-xs tracking-widest uppercase text-gray-400">
                Özgür İrade Derneği
            </p>

            <style jsx>{`
                @keyframes loading-bar {
                    0%   { width: 0%;   margin-left: 0; }
                    50%  { width: 70%;  margin-left: 15%; }
                    100% { width: 0%;   margin-left: 100%; }
                }
                .animate-loading-bar {
                    animation: loading-bar 1.4s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}