'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'

const slides = [
    {
        tag: 'Yetim Kardeş Programı',
        title: ['Yetim Kardeş Programı Genişledi'],
        desc: "Yetim kardeş programımıza katılan gönüllü sayısı 200'ü aştı. Program artık 5 ülkede 380 yetim çocuğa ulaşıyor.",
        image: '/hero-foto.jpg',
        href: '/haberler/yetim-kardes-programi-genisledi',
    },
    {
        tag: 'Yetim Hâmiliği',
        title: ['Yetime Şefkatli', 'Bir El Uzat'],
        desc: 'Yetime şefkatli bir kalbin hâmiliği yakışır.',
        image: '/hero-2.jpg',
        href: '/bagis/yetim',
    },
    {
        tag: 'Acil Yardım — Gazze',
        title: ['Gazze İçin', 'Hazırız'],
        desc: "Ateşkesin ardından Gazze'de yaraları sarmak için çalışıyoruz.",
        image: '/gazze.jpg',
        href: '/bagis/filistin',
    },
    {
        tag: 'Acil Yardım — Sudan',
        title: ['Sudan Acil', 'Yardım'],
        desc: 'Sudan halkına desteklerinizi ulaştırıyoruz.',
        image: '/sudan-yardim.jpg',
        href: '/bagis/sudan',
    },
]

const DURATION = 8000

export default function Hero() {
    const [cur, setCur] = useState(0)
    const [progress, setProgress] = useState(0)
    const startRef = useRef<number>(0)
    const rafRef = useRef<number>(0)

    const goTo = useCallback((n: number) => {
        setCur((n + slides.length) % slides.length)
    }, [])

    const prev = useCallback(() => goTo(cur - 1), [cur, goTo])
    const next = useCallback(() => goTo(cur + 1), [cur, goTo])

    useEffect(() => {
        cancelAnimationFrame(rafRef.current)
        startRef.current = performance.now()
        setProgress(0)

        const tick = (now: number) => {
            const pct = Math.min(((now - startRef.current) / DURATION) * 100, 100)
            setProgress(pct)
            if (pct < 100) {
                rafRef.current = requestAnimationFrame(tick)
            } else {
                setCur((p) => (p + 1) % slides.length)
            }
        }

        rafRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafRef.current)
    }, [cur])

    const slide = slides[cur]

    return (
        <section className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] overflow-hidden bg-[#0c1a10] rounded-xl md:rounded-2xl mx-3 sm:mx-4 md:mx-8 my-3 md:my-4">
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === cur ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={s.image}
                        alt={s.tag}
                        fill
                        priority={i === 0}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                </div>
            ))}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-8 md:px-12 pb-8 md:pb-10 z-10">
                <div className="max-w-lg">
                    <p
                        key={`tag-${cur}`}
                        className="text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-white/50 font-light mb-2 animate-fadeIn"
                    >
                        {slide.tag}
                    </p>
                    <h1
                        key={`title-${cur}`}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 leading-[1.15] font-normal animate-fadeIn"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {slide.title[0]}
                        {slide.title[1] && (
                            <>
                                <br />
                                {slide.title[1]}
                            </>
                        )}
                    </h1>
                    <p
                        key={`desc-${cur}`}
                        className="hidden sm:block text-xs text-white/60 font-light leading-relaxed mb-5 animate-fadeIn"
                    >
                        {slide.desc}
                    </p>

                    <a
                        href={slide.href}
                        className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-white border-b border-white/40 pb-0.5 hover:border-white/90 transition-colors"
                    >
                        Detaylı Bilgi
                    </a>
                </div>
            </div>

            {/* Sağ navigasyon — mobilde küçültülmüş */}
            <div className="absolute bottom-8 md:bottom-10 right-5 sm:right-8 md:right-12 z-20 flex flex-col items-end gap-2 md:gap-3">
                <span className="text-[9px] sm:text-[10px] tracking-widest text-white/40">
                    {String(cur + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-px transition-all duration-300 ${i === cur ? 'h-6 md:h-7 bg-white/80' : 'h-3 md:h-4 bg-white/25'}`}
                        />
                    ))}
                </div>
                <div className="flex gap-1">
                    <button
                        onClick={prev}
                        className="w-6 h-6 md:w-7 md:h-7 border border-white/25 bg-white/5 text-white/70 hover:bg-white/12 transition-colors text-xs flex items-center justify-center"
                    >
                        ←
                    </button>
                    <button
                        onClick={next}
                        className="w-6 h-6 md:w-7 md:h-7 border border-white/25 bg-white/5 text-white/70 hover:bg-white/12 transition-colors text-xs flex items-center justify-center"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Progress bar */}
            <div
                className="absolute bottom-0 left-0 h-[2px] bg-white/60 z-20 rounded-b-xl md:rounded-b-2xl"
                style={{ width: `${progress}%`, transition: 'none' }}
            />
        </section>
    )
}