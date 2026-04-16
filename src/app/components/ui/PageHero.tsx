import Link from "next/link";

type Breadcrumb = {
    label: string;
    href?: string;
};

type Props = {
    title: string;
    subtitle?: string;
    breadcrumbs?: Breadcrumb[];
};

export default function PageHero({ title, subtitle, breadcrumbs }: Props) {
    return (
        <section className="bg-gray-50 border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">

                {/* Breadcrumb */}
                {breadcrumbs && (
                    <div className="mb-4 text-xs text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                        {breadcrumbs.map((item, index) => (
                            <span key={index} className="flex items-center gap-2">
                                {item.href ? (
                                    <Link href={item.href} className="hover:text-green-600">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-gray-500">{item.label}</span>
                                )}

                                {index < breadcrumbs.length - 1 && (
                                    <span className="text-gray-300">/</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-sm text-gray-500">
                        {subtitle}
                    </p>
                )}

            </div>
        </section>
    );
}