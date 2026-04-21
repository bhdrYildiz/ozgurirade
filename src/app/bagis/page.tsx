'use client'
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import PageHero from '@/app/components/ui/PageHero'
import Image from 'next/image'

const banks = [
    {
        id: 'ziraat',
        name: 'Ziraat Katılım',
        logo: '/ziraat.png',
        accountName: 'ÖZGÜR İRADE DERNEĞİ',
        branch: '80',
        swift: 'ZKBATRIS',
        accounts: [
            {
                currency: 'Türk Lirası',
                currencyCode: 'TRY',
                accountNo: '1788520-04',
                iban: 'TR18 0020 9000 0178 8520 0000 04',
            },
            {
                currency: 'Euro',
                currencyCode: 'EUR',
                accountNo: '1788520-02',
                iban: 'TR72 0020 9000 0178 8520 0000 02',
            },
        ],
    },
    {
        id: 'vakif',
        name: 'Vakıf Katılım',
        logo: '/vakifLogo.png',
        accountName: 'ÖZGÜR İRADE DERNEĞİ',
        branch: '1',
        swift: 'KTFGTR2A',
        accounts: [
            {
                currency: 'Türk Lirası',
                currencyCode: 'TRY',
                accountNo: '0000001-01',
                iban: 'TR00 0021 0000 0000 0001 0000 01',
            },
            {
                currency: 'Euro',
                currencyCode: 'EUR',
                accountNo: '0000001-02',
                iban: 'TR00 0021 0000 0000 0001 0000 02',
            },
        ],
    },
]

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text.replace(/\s/g, ''))
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg
                border border-gray-200 text-gray-400 hover:border-green-400 hover:text-green-600
                transition-all duration-200 flex-shrink-0"
            title="Kopyala"
        >
            {copied ? (
                <>
                    <Check size={12} className="text-green-500" />
                    <span className="text-green-500">Kopyalandı</span>
                </>
            ) : (
                <>
                    <Copy size={12} />
                    <span>Kopyala</span>
                </>
            )}
        </button>
    )
}

export default function BagisPage() {
    return (
        <main className="flex flex-col bg-white min-h-screen">
            <PageHero
                title="BAĞIŞ YAP"
                subtitle="Hesap Numaralarımız"
                image="/banner.png"
                breadcrumbs={[
                    { label: 'Ana Sayfa', href: '/' },
                    { label: 'Bağış Yap' },
                ]}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">

                {/* Üst bilgi */}
                <div className="mb-10 p-5 rounded-2xl bg-green-50 border border-green-100">
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                        Bağışlarınızın açıklama bölümüne <span className="font-semibold text-gray-800">isim, bağış türü ve telefon numaranızı</span> yazınız.
                        Örnek aşağıdaki gibi olabilir:
                    </p>
                    <p className="text-sm font-semibold text-green-700">
                        SADAKA BAĞIŞI — MUSTAFA YILMAZ · 0555 444 90 90
                    </p>
                </div>

                {/* Bankalar */}
                <div className="flex flex-col gap-8">
                    {banks.map((bank) => (
                        <div
                            key={bank.id}
                            className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
                        >
                            <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100">
                                <Image
                                    src={bank.logo}
                                    alt={bank.name}
                                    fill
                                    className="h-10 object-contain"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgo="
                                />
                                <span className="text-sm text-gray-500 font-medium">
                                    {bank.name} Hesap Numaralarımız
                                </span>
                            </div>

                            <div className="px-6 py-5">
                                <div className="flex flex-wrap gap-x-8 gap-y-1 mb-5 text-sm">
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Hesap adı:</span> {bank.accountName}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Şube:</span> {bank.branch}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Swift Kodu:</span> {bank.swift}
                                    </p>
                                </div>

                                <div className="flex flex-col divide-y divide-gray-100">
                                    {bank.accounts.map((acc) => (
                                        <div key={acc.currencyCode} className="py-4">
                                            <p className="text-sm text-gray-500 mb-3">{acc.currency}</p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {/* Hesap No */}
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                                                        Hesap No
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-sm font-mono text-gray-800">
                                                            {acc.accountNo}
                                                        </span>
                                                        <CopyButton text={acc.accountNo} />
                                                    </div>
                                                </div>

                                                {/* IBAN */}
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                                                        IBAN No
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-sm font-mono text-gray-800">
                                                            {acc.iban}
                                                        </span>
                                                        <CopyButton text={acc.iban} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-xs text-gray-400 text-center mt-10 leading-relaxed">
                    Bağışlarınız için teşekkür ederiz. Her katkı, bir hayata dokunur.
                </p>
            </div>
        </main>
    )
}