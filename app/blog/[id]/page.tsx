import {PostsFetch} from "@/app/blog/types";

const getData = async (id: string) => { // name it as you wish
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    return res.json()
}

export async function generateMetadata({params: {id}}: Props) {
    const postInfo: PostsFetch = await getData(id)
    return {
        title: postInfo.title
    }
}

const Post = async ({params: {id}}: Props) => {
    const postInfo: PostsFetch = await getData(id)

    if (!postInfo) return <h1>sth went wrong</h1>

    return (
        <>
            <h1>Post page {id}</h1>
            <h2>{postInfo.title}</h2>
            <article>{postInfo.body}</article>
        </>
    );
};

export default Post;