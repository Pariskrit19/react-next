export default function HomeLayout({
    children,

}: {
    children: React.ReactNode,

}) {
    const isUser = true;
    return <section><h1>Welcome To Home</h1>{children}

    </section>;
}