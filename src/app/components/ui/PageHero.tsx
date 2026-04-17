import Link from "next/link";

type Breadcrumb = {
    label: string;
    href?: string;
};

type Props = {
    title: string;
    subtitle?: string;
    breadcrumbs?: Breadcrumb[];
    image?: string;
};

export default function PageHero({ title, subtitle, breadcrumbs, image }: Props) {
    return (
        <section
            className="relative border-b border-gray-100"
            style={{
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-28 text-center text-white">

                {/* Breadcrumb */}
                {breadcrumbs && (
                    <div className="mb-4 text-xs text-white/80 flex items-center justify-center gap-2 flex-wrap">
                        {breadcrumbs.map((item, index) => (
                            <span key={index} className="flex items-center gap-2">
                                {item.href ? (
                                    <Link href={item.href} className="hover:text-white">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-white">{item.label}</span>
                                )}

                                {index < breadcrumbs.length - 1 && (
                                    <span className="text-white/40">/</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-sm text-white/80">
                        {subtitle}
                    </p>
                )}

            </div>
        </section>
    );
}