import SignInForm from "@/features/auth/components/SignInForm"

export default function LoginPage() {
    return (
        <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-lg border bg-background p-8 shadow-sm">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Access Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email to sign in
                </p>
            </div>
            <SignInForm />
        </div>
    )
}
