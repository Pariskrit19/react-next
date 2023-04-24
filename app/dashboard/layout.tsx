export default function DashboardLayout({
    children,
    admin,
    user,
}: {
    children: React.ReactNode,
    admin: any,
    user: any
}) {
    const isUser = false;
    return <section><h1>Dashboard</h1>{children}
        <div>
            {isUser ? user : admin}
        </div>
    </section>;
}