export default function HomeLayout({
    children,

}: {
    children: React.ReactNode,

}) {
    const isUser = true;
    return <section><h1>Hello, Welcome To Home!Please Continue</h1>{children}

    </section>;
}