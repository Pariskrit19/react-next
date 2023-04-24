import { Suspense } from "react";


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function About() {

    const users = getData();
    const posts = getPosts();

    const res = await users
    return <div>{res.map((data: any) => <p key={data.id}>{data?.name}</p>)}
        <Suspense fallback={<div>Loading...</div>}>
            {/* @ts-expect-error Async Server Component */}
            <Post promise={posts} />

        </Suspense>

    </div>
}

async function Post({ promise }: any) {


    const posts = await promise;
    return <div>
        <h2>Posts</h2>
        {posts.map((post: any) => <p key={post?.id}>{post?.title}</p>)}
    </div>


}