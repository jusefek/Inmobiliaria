import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/features/blog/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: `${post.title} | InmoValencia`,
      description: post.summary,
    }
  } catch {
    return { title: 'Blog Post Not Found' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch (error) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{post.title}</h1>
        <time className="text-muted-foreground">{post.date}</time>
      </div>

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <MDXRemote source={post.content} />
      </div>

      <div className="mt-16 rounded-xl border bg-card text-card-foreground shadow p-8 text-center bg-muted/30">
        <h3 className="text-2xl font-semibold mb-2">¿Dudas sobre comprar en Valencia?</h3>
        <p className="text-muted-foreground mb-6">
          No arriesgues tu capital. Analizamos cualquier propiedad en 24h para detectar cargas ocultas o sobreprecios.
        </p>
        <Button asChild size="lg" className="font-bold">
          <Link href="/services/anti-scam">
            Prueba nuestro Análisis Anti-Estafas
          </Link>
        </Button>
      </div>
    </article>
  )
}
