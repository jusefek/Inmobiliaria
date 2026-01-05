import React from "react";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <span className="hidden font-bold sm:inline-block">
                                InmoValencia
                            </span>
                        </a>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <a href="/services/anti-scam">Anti-Estafas</a>
                            <a href="/blog">Blog</a>
                            <a href="/about">Nosotros</a>
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            {/* Search or CTA */}
                        </div>
                        <nav className="flex items-center">
                            <a href="/dashboard" className="text-sm font-medium hover:underline">
                                Clients Area
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{' '}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            InmoValencia
                        </a>
                        . The source code is available on{' '}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </div>
    );
}
