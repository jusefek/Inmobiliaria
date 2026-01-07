
import { getTranslations } from "next-intl/server";
import { blogPosts, BlogPost } from "@/data/blog-posts";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    // SEO: Fallback to English title if needed or specific string
    const title = locale === 'es' ? "Guías Inmobiliarias y Anti-Estafa" : "Real Estate Guides & Scams";
    return {
        title: `Tesela Projects - ${title}`,
        description: "Expert guides on buying property in Spain differently. Avoid scams, understand laws, and invest safely."
    }
}

export default async function BlogListPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const tNav = await getTranslations({ locale, namespace: 'nav' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });

    // Filter posts for the current locale (though all have all languages now)
    const posts = blogPosts;

    return (
        <div className="flex flex-col min-h-screen font-sans bg-slate-50">
            {/* Hero Section */}
            <header className="bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:200px]" />
                <div className="container px-4 text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-nolla-blue/20 text-nolla-blue text-sm font-semibold mb-6 border border-nolla-blue/30 backdrop-blur-sm">
                        TESELA ACADEMY
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                        {tNav('blog')}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        {locale === 'es'
                            ? "Conocimiento experto para inversores inteligentes. Sin ruido, solo hechos."
                            : "Expert knowledge for smart investors. No noise, just facts."}
                    </p>
                </div>
            </header>

            {/* Content Grid */}
            <main className="container px-4 py-20 flex-1">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => {
                            // Safe access to locale content, fallback to english if missing
                            const data = post.content[locale as keyof typeof post.content] || post.content['en'];

                            return (
                                <Link
                                    key={post.slug}
                                    href={`/${locale}/blog/${post.slug}`}
                                    className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={data.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800 rounded-full shadow-sm">
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center gap-2 text-slate-400 text-xs mb-4 font-medium">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.date).toLocaleDateString(locale)}
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            {post.author}
                                        </div>

                                        <h2 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-nolla-blue transition-colors leading-tight">
                                            {data.title}
                                        </h2>

                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {data.excerpt}
                                        </p>

                                        <div className="flex items-center text-nolla-blue font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                                            {tCommon('read_guide')}
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-500">
                            {locale === 'es' ? "Pronto publicaremos artículos." : "Articles coming soon."}
                        </p>
                    </div>
                )}
            </main>
        </div>
    )
}
