export default function HomeLayout({
    children,

}: {
    children: React.ReactNode,

}) {
    const isUser = true;
    return <section><h1>Home</h1>{children}

    </section>;
}