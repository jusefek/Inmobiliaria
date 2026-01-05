import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    if (!session?.user?.email) {
        redirect("/login")
    }

    // Simple environment-based Admin Check
    if (session.user.email !== process.env.ADMIN_EMAIL) {
        return (
            <div className="flex h-screen flex-col items-center justify-center p-4 text-center">
                <h1 className="text-2xl font-bold text-destructive">Access Denied</h1>
                <p className="mt-2 text-muted-foreground">
                    You are not authorized to view this page. ({session.user.email})
                </p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-muted/40 p-4 font-sans antialiased">
            <header className="mb-8 flex items-center justify-between rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-lg">
                    🛡️ SuperAdmin
                </div>
                <div className="text-sm text-muted-foreground">
                    Welcome, boss.
                </div>
            </header>
            <main className="mx-auto max-w-7xl">
                {children}
            </main>
        </div>
    )
}
