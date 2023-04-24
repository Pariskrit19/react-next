export default function DashboardLayout({
    children,

}: {
    children: React.ReactNode,

}) {
    const isUser = true;
    return <section><h1>About</h1>{children}

    </section>;
}