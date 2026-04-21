import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Bağış Yap | Özgür İrade Derneği',
    description: 'Bağış sistemimiz yakında yayında olacaktır.',
}

export default function BagisPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <div className="max-w-md w-full flex flex-col items-center gap-8 text-center">
                <Image
                    src="/Logo.png"
                    alt="Özgür İrade Derneği"
                    width={160}
                    height={160}
                    className="object-contain"
                />
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-green-600"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M12 8v4M12 16h.01" />
                    </svg>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">
                        Yakında
                    </span>
                    <h1 className="text-2xl font-bold text-gray-800 leading-snug">
                        Bağış Sistemimiz Güncelleniyor
                    </h1>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Daha iyi bir deneyim sunmak için bağış sayfamızı yeniliyoruz.
                        Kısa süre içinde yeni sistemimizle yayında olacağız.
                    </p>
                </div>
                <Link
                    href="/"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl
                        border border-gray-200 text-gray-600 text-sm font-medium
                        hover:border-green-300 hover:text-green-700 transition-colors duration-200"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Ana Sayfaya Dön
                </Link>

            </div>
        </main>
    )
}