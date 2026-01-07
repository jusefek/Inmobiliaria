
export function TrustBar() {
    return (
        <div className="flex items-center justify-center gap-3 text-sm text-slate-500 mt-6 font-medium bg-slate-50 py-2 px-4 rounded-full border border-slate-100 w-fit mx-auto">
            <span>Trusted by investors from:</span>
            <div className="flex items-center gap-2 text-lg grayscale hover:grayscale-0 transition-all opacity-80">
                <span title="United Kingdom">🇬🇧</span>
                <span title="Germany">🇩🇪</span>
                <span title="Netherlands">🇳🇱</span>
                <span title="Sweden">🇸🇪</span>
                <span title="Norway">🇳🇴</span>
            </div>
        </div>
    )
}
