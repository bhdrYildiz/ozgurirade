
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
            <div className="max-w-md w-full flex flex-col items-center gap-6">

                <div className="relative">
                    <span className="text-[120px] font-bold text-gray-100 leading-none select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-green-600"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                                <path d="M11 8v3M11 14h.01" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Sayfa Bulunamadı
                    </h1>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <span className="flex-1 h-px bg-gray-100" />
                    <span className="text-xs text-gray-300">ne yapmak istersiniz?</span>
                    <span className="flex-1 h-px bg-gray-100" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Link
                        href="/"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                            bg-green-600 text-white text-sm font-semibold
                            hover:bg-green-700 transition-colors duration-200"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Ana Sayfaya Dön
                    </Link>

                    <Link
                        href="/haberler"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                            border border-gray-200 text-gray-600 text-sm font-medium
                            hover:border-green-300 hover:text-green-700 transition-colors duration-200"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a4 4 0 0 1-4 4z" />
                            <path d="M10 2v20" />
                        </svg>
                        Haberlere Git
                    </Link>
                </div>

                <p className="text-xs text-gray-300">
                    Sorun devam ederse{' '}
                    <Link href="/iletisim" className="text-green-600 hover:underline">
                        bizimle iletişime geçin
                    </Link>
                </p>
            </div>
        </main>
    )
}