import { db } from "@/lib/db"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ExternalLink } from "lucide-react"

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
    const requests = await db.serviceRequest.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            user: {
                select: { email: true, name: true },
            },
        },
    })

    return (
        <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Recent Requests</h2>
                <Badge variant="outline" className="text-base px-3 py-1">
                    Total: {requests.length}
                </Badge>
            </div>

            <Table>
                <TableCaption>A list of recent property analysis requests.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Property URL</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {requests.map((req) => (
                        <TableRow key={req.id}>
                            <TableCell className="font-medium">
                                {new Date(req.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="font-medium">{req.user.name || 'No Name'}</span>
                                    <span className="text-xs text-muted-foreground">{req.user.email}</span>
                                </div>
                            </TableCell>
                            <TableCell className="max-w-[300px] truncate">
                                <a href={req.propertyUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-blue-600">
                                    <ExternalLink className="h-3 w-3" />
                                    {req.propertyUrl}
                                </a>
                            </TableCell>
                            <TableCell>
                                <StatusBadge status={req.status} />
                            </TableCell>
                            <TableCell className="text-right">
                                {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(Number(req.amountPaid))}
                            </TableCell>
                            <TableCell className="text-right">
                                <Button size="icon" variant="ghost">
                                    <Eye className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

function StatusBadge({ status }: { status: string }) {
    switch (status) {
        case 'PENDING_PAYMENT':
            return <Badge variant="warning" className="text-xs">Unpaid</Badge>
        case 'PAID':
            return <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-700 text-xs text-white">Paid 💰</Badge>
        case 'COMPLETED':
            return <Badge variant="secondary" className="text-xs">Done</Badge>
        default:
            return <Badge variant="outline">{status}</Badge>
    }
}
