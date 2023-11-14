import {Metadata} from "next";
import {PostsFetch} from "@/app/blog/types";
import Link from "next/link";


const getData = async () => { // name it as you wish
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
    return res.json()
}

export const metadata: Metadata = {
    title: 'Blog'
}

const Blog = async () => {
    const posts: [PostsFetch] = await getData()
    return (
        <>
            <h1>Blog</h1>
            <ul>
                {
                    posts && posts.map((post: PostsFetch) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>)
                    )
                }
            </ul>
        </>
    );
};

export default Blog;