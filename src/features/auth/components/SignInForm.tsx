'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '../actions/login'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignInForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined)

    return (
        <form action={dispatch} className="space-y-4 w-full max-w-sm">
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <Input id="email" type="email" name="email" placeholder="info.teselaprojects@gmail.com" required />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" htmlFor="password">Password</label>
                <Input id="password" type="password" name="password" required />
            </div>
            <div aria-live="polite" aria-atomic="true">
                {errorMessage && (
                    <p className="text-sm text-destructive">{errorMessage}</p>
                )}
            </div>
            <LoginButton />
        </form>
    )
}

function LoginButton() {
    const { pending } = useFormStatus()
    return (
        <Button className="w-full" aria-disabled={pending} type="submit" disabled={pending}>
            {pending ? "Signing in..." : "Sign In"}
        </Button>
    )
}
