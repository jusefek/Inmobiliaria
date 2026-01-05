import Link from 'next/link'
import { getAllPosts } from '@/features/blog/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Blog Inmobiliario Valencia | Consejos y Análisis',
  description: 'Guías de inversión, análisis de zonas y consejos legales para comprar propiedad en Valencia.',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Blog InmoValencia</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Información privilegiada para inversores inteligentes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle className="line-clamp-2 leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3">
                {post.summary}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href={`/blog/${post.slug}`}>Leer Artículo</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
