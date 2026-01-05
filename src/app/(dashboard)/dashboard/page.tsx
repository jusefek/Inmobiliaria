import { auth } from '@/auth'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { PayButton } from '@/features/anti-scam/components/PayButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileSearch, PlusCircle, AlertCircle, CheckCircle2, FileText, Ban } from 'lucide-react'

export const metadata = {
    title: 'My Dashboard | InmoValencia',
}

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user?.id) {
        redirect('/login')
    }

    // 1. Fetch User Requests
    const requests = await db.serviceRequest.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: 'desc' },
    })

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">Manage your property analysis requests.</p>
                </div>
                <Button asChild>
                    <Link href="/services/new-request">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        New Analysis
                    </Link>
                </Button>
            </div>

            {requests.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {requests.map((request) => (
                        <RequestCard key={request.id} request={request} />
                    ))}
                </div>
            )}
        </div>
    )
}

// Sub-components

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-in fade-in-50 h-[400px] bg-muted/10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent mb-6">
                <FileSearch className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold">No analysis requests yet</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground max-w-sm mb-6">
                Ready to invest? Submit a property URL and we will audit it for hidden risks in 24 hours.
            </p>
            <Button asChild>
                <Link href="/services/new-request">Create your first request</Link>
            </Button>
        </div>
    )
}

function RequestCard({ request }: { request: any }) {
    const isPending = request.status === 'PENDING_PAYMENT'
    const isPaid = request.status === 'PAID' || request.status === 'IN_PROGRESS'
    const isCompleted = request.status === 'COMPLETED'

    return (
        <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium line-clamp-1">
                        {new URL(request.propertyUrl).hostname.replace('www.', '')} Analysis
                    </CardTitle>
                    <CardDescription className="text-xs">
                        {new Date(request.createdAt).toLocaleDateString()}
                    </CardDescription>
                </div>
                <StatusBadge status={request.status} />
            </CardHeader>
            <CardContent className="pt-4 flex-1">
                <div className="text-sm text-muted-foreground break-all line-clamp-2 mb-2">
                    {request.propertyUrl}
                </div>
                {/* Logic for showing verdict preview if completed could go here */}
            </CardContent>
            <CardFooter className="pt-2 border-t bg-muted/20">
                {isPending && (
                    <div className="w-full flex items-center justify-between">
                        <span className="text-sm font-medium text-amber-600">Action Required</span>
                        <PayButton requestId={request.id} />
                    </div>
                )}
                {isPaid && (
                    <div className="w-full flex items-center gap-2 text-sm text-blue-600">
                        <FileSearch className="h-4 w-4" />
                        Analysis in progress...
                    </div>
                )}
                {isCompleted && (
                    <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

function StatusBadge({ status }: { status: string }) {
    switch (status) {
        case 'PENDING_PAYMENT':
            return <Badge variant="warning" className="gap-1"><Ban className="h-3 w-3" /> Unpaid</Badge>
        case 'PAID':
        case 'IN_PROGRESS':
            return <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 gap-1"><FileSearch className="h-3 w-3" /> in Progress</Badge>
        case 'COMPLETED':
            return <Badge variant="success" className="gap-1"><CheckCircle2 className="h-3 w-3" /> Completed</Badge>
        default:
            return <Badge variant="outline">{status}</Badge>
    }
}
