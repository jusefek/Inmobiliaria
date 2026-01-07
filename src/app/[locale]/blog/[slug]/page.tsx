
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link as UserLink, Calendar, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// WAIT: The previous implementation used dangerouslySetInnerHTML with HTML string. The new content is MARKDOWN (strings with #, ##). 
// The user asked to "Use Markdown (h2, h3, bullet points) inside the string". 
// To render this properly in Next.js without a heavy library, I should probably stick to simple HTML in the string OR install a markdown parser. 
// Given the user said "Actúa como experto... Tu tarea es generar el archivo...", and I generated markdown strings.
// To make it work, I need to render that markdown. 
// I will assume for this step I will try to render it simply or use a markdown library if available. 
// Since I installed @tailwindcss/typography, it expects HTML. 
// I should probably Convert the Markdown to HTML on the fly or... 
// actually, I'll just use a simple regex replacement or better, since I don't want to install more deps if I can avoid it. 
// BUT, the prompt asked for "Markdown (h2, h3)". 
// Let's use a very simple markdown parser helper function inside the file for now to keep it dependency-free.

// Helper to convert simple markdown to HTML
function simpleMarkdownToHtml(markdown: string) {
    let html = markdown
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/^\s*-\s+(.*$)/gim, '<ul><li>$1</li></ul>') // Naive list
        .replace(/<\/ul>\s*<ul>/gim, '') // Merge lists
        .replace(/\n/gim, '<br />');
    return html;
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    // Fallback to EN if locale not found
    const data = post?.content[locale as keyof typeof post.content] || post?.content['en'];

    if (!post || !data) return { title: "Not Found" };

    return {
        title: `${data.title} - Tesela Projects`,
        description: data.excerpt,
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    const data = post?.content[locale as keyof typeof post.content] || post?.content['en'];

    if (!post || !data) {
        notFound();
    }

    // Parse markdown (simple version)
    // Note: In a real prod app we'd use 'remark' or 'marked', but here we use a simple adaptation to keep moving fast.
    const htmlContent = simpleMarkdownToHtml(data.body);

    return (
        <article className="min-h-screen font-sans bg-white pb-24">

            {/* Header Image */}
            <div className="relative h-[60vh] w-full bg-slate-900">
                <Image
                    src={post.image}
                    alt={data.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
                    <div className="container max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white backdrop-blur-md text-sm font-semibold mb-6 border border-white/20">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <div className="flex items-center gap-4 text-slate-300 text-sm font-medium">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-500" />
                            <span>By {post.author}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container max-w-3xl mx-auto px-4 py-16">
                {/* Lead Summary */}
                <div className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 border-l-4 border-nolla-gold pl-6 py-1">
                    {data.excerpt}
                </div>

                {/* Prose Content */}
                <div
                    className="prose prose-lg prose-slate max-w-none 
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-strong:text-nolla-blue prose-strong:font-bold
                    prose-li:text-slate-600
                    prose-a:text-nolla-blue prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </div>

            {/* CTA Component */}
            <div className="container max-w-4xl mx-auto px-4 mt-8">
                <BlogCTA locale={locale} />
            </div>

        </article>
    )
}

function BlogCTA({ locale }: { locale: string }) {
    // Determine translations for CTA based on locale
    const isEs = locale === 'es';
    const title = isEs ? "¿Preocupado por estos riesgos?" : "Worried about these risks?";
    const desc = isEs
        ? "No dejes que una 'Nota Simple' o una licencia falsa arruine tu inversión. Audita tu propiedad hoy mismo por solo 49€."
        : "Don't let a 'Nota Simple' or a fake license ruin your investment. Audit your property today for just 49€.";
    const btnText = isEs ? "Auditar Propiedad (49€)" : "Audit Property (49€)";

    return (
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                <ShieldCheck className="w-64 h-64 -mr-16 -mt-16 text-slate-900" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                        {title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        {desc}
                    </p>
                    <ul className="space-y-2 mb-0 inline-block text-left">
                        {[
                            isEs ? "Verificación de Deudas" : "Debt Verification",
                            isEs ? "Chequeo Urbanístico" : "Urban Planning Check",
                            isEs ? "Análisis de Mercado" : "Market Analysis"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Button size="lg" className="bg-nolla-blue hover:bg-nolla-blue/90 text-white font-bold shadow-lg shadow-nolla-blue/20 h-14 px-8 text-lg" asChild>
                        <Link href={`/${locale}/services/audit`}>
                            {btnText}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
