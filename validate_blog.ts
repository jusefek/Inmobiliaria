
import { blogPosts } from './src/data/blog-posts';

try {
    console.log("Loading blog posts...");
    console.log(`Found ${blogPosts.length} posts.`);
    blogPosts.forEach((post, index) => {
        console.log(`Post ${index + 1}: ${post.slug}`);
        if (!post.content) {
            console.error(`ERROR: Post ${post.slug} is missing content!`);
        }
        Object.keys(post.content).forEach(lang => {
            if (!post.content[lang as keyof typeof post.content]) {
                console.error(`ERROR: Post ${post.slug} is missing content for ${lang}!`);
            }
        });
    });
    console.log("Validation Successful!");
} catch (error) {
    console.error("Validation Failed:", error);
}
