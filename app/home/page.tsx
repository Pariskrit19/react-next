import Counter from "../../components/Counter";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const res = await getData();

    return (
        <div>
            {res.map((data: any) => (
                <p key={data.id}>{data?.name}</p>
            ))}
            <Counter />
        </div>
    );
}
