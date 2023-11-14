import {Metadata} from "next";


export function generateMetadata({params: {id}}: Props) {
    return {
        title: id
    }
}

const Post = ({params: {id}}: Props) => {
    return (
        <h1>Post page {id}</h1>
    );
};

export default Post;