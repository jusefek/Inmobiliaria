"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Calculator, Home, Zap, Wind, Thermometer,
    Check, Minus, Plus, RefreshCw, X,
    MapPin, Building, Trees, Waves, Hotel,
    Droplets
} from "lucide-react"
import { useTranslations } from "next-intl"

// --- 1. Constants & Prices (Valencia 2026 Market Data) ---

// Base Interior Costs (Flooring, Painting, Walls, Doors)
const INTERIOR_PRICES = {
    standard: 650,   // Standard Investment
    high_end: 950,   // High-End Living
    luxury: 1400     // Premium / Luxury
}

// Fixed Item Costs
const KITCHEN_PRICES = {
    none: 0,
    refresh: 6000,
    total: 12000
}

const BATHROOM_PRICES = {
    standard: 5500,
    luxury: 9000
}

// System/Facility Costs
const SYSTEMS_PRICES = {
    windows: {
        ratio: 15,    // 1 window per 15m²
        price: 850    // Premium PVC/Aluminum 2026 price
    },
    rewiring: 65,     // €/m²
    acSystem: 110,    // €/m² (Ducted + Machine)
    underfloor: 90    // €/m²
}

// Villa Exterior Costs
const VILLA_PRICES = {
    roof: 120,        // €/m² of roof area
    facade: 45,       // €/m² of facade area
    pool_new: 24000,  // Fixed
    pool_refurb: 5500,// Fixed
    garden_basic: 25, // €/m² of plot
    garden_landscaping: 80, // €/m² of plot
    septic: 5500      // Fixed
}

// Multipliers
const LOCATION_FACTORS = {
    city: 1.0,      // Valencia/Alicante Capital
    inland: 1.10,   // Logistics surcharge
    coastal: 1.25   // Premium labor cost (Javea/Altea)
}

const FEES = 0.12   // 8% Arch + 4% Licenses
const BUFFER = 1.10 // +10% Contingency Safety

// --- 2. Interfaces ---
type PropertyType = "apartment" | "villa"
type LocationType = "city" | "inland" | "coastal"
type KitchenType = "none" | "refresh" | "total"
type QualityType = "standard" | "high_end" | "luxury"
type PoolType = "none" | "refurb" | "new"
type GardenType = "none" | "basic" | "landscaping"

interface CalculatorState {
    propertyType: PropertyType
    location: LocationType
    surface: number     // House size
    plotSurface: number // Garden/Plot size (Only for villas)
    bathrooms: number
    kitchen: KitchenType
    quality: QualityType
    extras: {
        newWindows: boolean
        rewiring: boolean
        acSystem: boolean
        underfloor: boolean
    }
    villaExtras: {
        roof: boolean
        facade: boolean
        pool: PoolType
        garden: GardenType
        septic: boolean
    }
}

// --- 3. UI Helpers ---
const CustomSwitch = ({ checked, onChange, label, icon: Icon, description }: any) => (
    <div
        className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${checked ? 'border-nolla-blue bg-blue-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
        onClick={() => onChange(!checked)}
    >
        <div className={`mt-0.5 p-2 rounded-full ${checked ? 'bg-nolla-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
            <Icon size={18} />
        </div>
        <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
                <span className={`font-semibold text-sm ${checked ? 'text-nolla-blue' : 'text-slate-700'}`}>{label}</span>
                <div className={`w-8 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out shrink-0 ${checked ? 'bg-nolla-blue' : 'bg-slate-300'}`}>
                    <div className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${checked ? 'translate-x-3' : ''}`} />
                </div>
            </div>
            {description && <p className="text-[11px] text-slate-500 mt-1 leading-tight pr-4">{description}</p>}
        </div>
    </div>
)

const SelectCard = ({ selected, onClick, label, icon: Icon, subLabel }: any) => (
    <div
        onClick={onClick}
        className={`relative flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 h-24 ${selected ? 'border-nolla-blue bg-blue-50/50 text-nolla-blue shadow-sm' : 'border-slate-100 hover:border-slate-200 text-slate-500 bg-white'}`}
    >
        <Icon size={22} className="mb-1.5" />
        <span className="font-semibold text-xs text-center leading-tight">{label}</span>
        {subLabel && <span className="text-[10px] text-slate-400 mt-1 text-center font-normal">{subLabel}</span>}
        {selected && <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-nolla-blue rounded-full" />}
    </div>
)

// --- 4. Main Component ---
export function RenovationCalculator({ locale = "en" }: { locale?: string }) {
    const t = useTranslations('RenovationCalculator')

    // --- State ---
    const [state, setState] = useState<CalculatorState>({
        propertyType: "apartment",
        location: "city",
        surface: 90,
        plotSurface: 200,
        bathrooms: 2,
        kitchen: "refresh",
        quality: "standard",
        extras: {
            newWindows: true,
            rewiring: true,
            acSystem: false,
            underfloor: false
        },
        villaExtras: {
            roof: false,
            facade: false,
            pool: "none",
            garden: "none",
            septic: false
        }
    })

    const [totals, setTotals] = useState({
        interior: 0,
        systems: 0,
        exterior: 0,
        fees: 0,
        grandTotal: 0,
        min: 0,
        max: 0,
        locationSurcharge: 0 // To display explicit extra cost
    })

    // --- Calculation Logic (2026 Strict Order) ---
    useEffect(() => {
        // 1. Interiors
        // Cost depends on quality selection directly
        const sqmCost = INTERIOR_PRICES[state.quality]
        let interiorSub = state.surface * sqmCost

        // Kitchen
        let kitchenCost = KITCHEN_PRICES[state.kitchen]
        if (state.kitchen !== 'none' && state.quality === 'luxury') kitchenCost *= 1.4 // Luxury kitchen premium
        interiorSub += kitchenCost

        // Bathrooms
        const bathPrice = state.quality === 'luxury' ? BATHROOM_PRICES.luxury : BATHROOM_PRICES.standard
        interiorSub += state.bathrooms * bathPrice

        // 2. Systems
        let systemsSub = 0
        if (state.extras.newWindows) {
            const numWindows = Math.ceil(state.surface / SYSTEMS_PRICES.windows.ratio)
            systemsSub += numWindows * SYSTEMS_PRICES.windows.price
        }
        if (state.extras.rewiring) systemsSub += state.surface * SYSTEMS_PRICES.rewiring
        if (state.extras.acSystem) systemsSub += state.surface * SYSTEMS_PRICES.acSystem
        if (state.extras.underfloor) systemsSub += state.surface * SYSTEMS_PRICES.underfloor

        // 3. Exteriors (Villa Only)
        let exteriorSub = 0
        if (state.propertyType === 'villa') {
            // Roof (70% of surface est.)
            if (state.villaExtras.roof) exteriorSub += (state.surface * 0.7) * VILLA_PRICES.roof
            // Facade (80% of surface est.)
            if (state.villaExtras.facade) exteriorSub += (state.surface * 0.8) * VILLA_PRICES.facade

            // Pool
            if (state.villaExtras.pool === 'new') exteriorSub += VILLA_PRICES.pool_new
            if (state.villaExtras.pool === 'refurb') exteriorSub += VILLA_PRICES.pool_refurb

            // Garden (Plot Surface)
            if (state.villaExtras.garden === 'basic') exteriorSub += state.plotSurface * VILLA_PRICES.garden_basic
            if (state.villaExtras.garden === 'landscaping') exteriorSub += state.plotSurface * VILLA_PRICES.garden_landscaping

            // Septic
            if (state.villaExtras.septic) exteriorSub += VILLA_PRICES.septic
        }

        // 4. Sum & Location Factor
        const constructionBase = interiorSub + systemsSub + exteriorSub
        const locFactor = LOCATION_FACTORS[state.location]
        const constructionWithLocation = constructionBase * locFactor
        const locationSurchargeVal = constructionWithLocation - constructionBase

        // 5. Fees (12% of construction with location)
        const feesVal = constructionWithLocation * FEES

        // 6. Subtotal + Safety Buffer
        const subtotal = constructionWithLocation + feesVal
        const finalMin = subtotal * BUFFER
        const finalMax = finalMin * 1.15 // +15% Variation top

        setTotals({
            interior: Math.round(interiorSub),
            systems: Math.round(systemsSub),
            exterior: Math.round(exteriorSub),
            fees: Math.round(feesVal),
            locationSurcharge: Math.round(locationSurchargeVal),
            grandTotal: Math.round(finalMin),
            min: Math.round(finalMin),
            max: Math.round(finalMax)
        })

    }, [state])

    // --- Helpers ---
    const formatMoney = (amount: number) => {
        return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount)
    }

    return (
        <div className="w-full mx-auto max-w-7xl">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                {/* --- LEFT COLUMN: INPUTS --- */}
                <div className="xl:col-span-7 space-y-6">

                    {/* 1. Property & Location */}
                    <Card className="border-0 shadow-sm bg-white">
                        <CardHeader className="py-4 border-b border-slate-50">
                            <CardTitle className="text-sm uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
                                <MapPin size={16} /> {t('labels.propertyType')} & {t('labels.location')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 grid grid-cols-2 gap-4">
                            <div className="col-span-2 sm:col-span-1 grid grid-cols-2 gap-3">
                                <SelectCard
                                    selected={state.propertyType === 'apartment'}
                                    onClick={() => setState({ ...state, propertyType: 'apartment' })}
                                    label={t('options.apartment')}
                                    icon={Building}
                                />
                                <SelectCard
                                    selected={state.propertyType === 'villa'}
                                    onClick={() => setState({ ...state, propertyType: 'villa' })}
                                    label={t('options.villa')}
                                    icon={Home}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 space-y-2">
                                <select
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-nolla-blue"
                                    value={state.location}
                                    onChange={(e) => setState({ ...state, location: e.target.value as any })}
                                >
                                    <option value="city">{t('options.loc_city')}</option>
                                    <option value="inland">{t('options.loc_inland')}</option>
                                    <option value="coastal">{t('options.loc_coastal')}</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 2. Dimensions */}
                    <Card className="border-0 shadow-sm bg-white">
                        <CardContent className="p-6 space-y-6">
                            {/* House Surface */}
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <label className="text-sm font-bold text-slate-700">{t('labels.surface')}</label>
                                    <span className="text-sm font-bold text-nolla-blue bg-blue-50 px-2 py-0.5 rounded">{state.surface} m²</span>
                                </div>
                                <input
                                    type="range" min="30" max="400" step="5"
                                    value={state.surface}
                                    onChange={(e) => setState({ ...state, surface: Number(e.target.value) })}
                                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-nolla-blue"
                                />
                            </div>

                            {/* Plot Surface (Villa Only) */}
                            {state.propertyType === 'villa' && (
                                <div className="space-y-3 pt-4 border-t border-slate-50 animate-in fade-in slide-in-from-top-2">
                                    <div className="flex justify-between">
                                        <label className="text-sm font-bold text-slate-700">{t('toggles.garden')}</label>
                                        <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">{state.plotSurface} m²</span>
                                    </div>
                                    <input
                                        type="range" min="100" max="2000" step="50"
                                        value={state.plotSurface}
                                        onChange={(e) => setState({ ...state, plotSurface: Number(e.target.value) })}
                                        className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-green-600"
                                    />
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* 3. Specs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Column 1: Config */}
                        <div className="space-y-6">
                            {/* Bathrooms */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-3 block">{t('labels.bathrooms')}</label>
                                <div className="flex items-center gap-3">
                                    <Button variant="outline" size="icon" onClick={() => setState(s => ({ ...s, bathrooms: Math.max(1, s.bathrooms - 1) }))}><Minus size={16} /></Button>
                                    <span className="flex-1 text-center font-bold text-xl">{state.bathrooms}</span>
                                    <Button variant="outline" size="icon" onClick={() => setState(s => ({ ...s, bathrooms: Math.min(6, s.bathrooms + 1) }))}><Plus size={16} /></Button>
                                </div>
                            </div>

                            {/* Kitchen */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-3 block">{t('labels.kitchen')}</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['none', 'refresh', 'total'].map((k) => (
                                        <button
                                            key={k}
                                            onClick={() => setState({ ...state, kitchen: k as any })}
                                            className={`py-2 px-1 rounded-lg text-xs font-semibold transition-all ${state.kitchen === k ? 'bg-slate-800 text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                        >
                                            {k === 'none' ? t('options.kitchen_none') : k === 'refresh' ? t('options.kitchen_refresh') : t('options.kitchen_new')}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quality */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-full">
                            <label className="text-xs font-bold uppercase text-slate-400 mb-3 block">{t('labels.quality')}</label>
                            <div className="space-y-3">
                                <div
                                    onClick={() => setState({ ...state, quality: 'standard' })}
                                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${state.quality === 'standard' ? 'border-nolla-blue bg-blue-50/30' : 'border-transparent hover:bg-slate-50'}`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-sm text-slate-800">{t('options.quality_standard')}</span>
                                        {state.quality === 'standard' && <div className="w-2 h-2 rounded-full bg-nolla-blue" />}
                                    </div>
                                    <div className="text-xs text-slate-500">Essential investor flip.</div>
                                </div>
                                <div
                                    onClick={() => setState({ ...state, quality: 'high_end' })}
                                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${state.quality === 'high_end' ? 'border-nolla-blue bg-blue-50/30' : 'border-transparent hover:bg-slate-50'}`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-sm text-slate-800">{t('options.quality_high')}</span>
                                        {state.quality === 'high_end' && <div className="w-2 h-2 rounded-full bg-nolla-blue" />}
                                    </div>
                                    <div className="text-xs text-slate-500">Premium living standards.</div>
                                </div>
                                <div
                                    onClick={() => setState({ ...state, quality: 'luxury' })}
                                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${state.quality === 'luxury' ? 'border-nolla-gold bg-amber-50/30' : 'border-transparent hover:bg-slate-50'}`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-sm text-nolla-gold">{t('options.quality_luxury')}</span>
                                        {state.quality === 'luxury' && <div className="w-2 h-2 rounded-full bg-nolla-gold" />}
                                    </div>
                                    <div className="text-xs text-slate-500">Top-tier materials & finishes.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Systems Modules */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase text-slate-500 ml-1">{t('ticket.installations')}</label>
                        <div className="grid grid-cols-2 gap-3">
                            <CustomSwitch checked={state.extras.newWindows} onChange={() => setState(s => ({ ...s, extras: { ...s.extras, newWindows: !s.extras.newWindows } }))} label={t('toggles.windows')} icon={Wind} />
                            <CustomSwitch checked={state.extras.rewiring} onChange={() => setState(s => ({ ...s, extras: { ...s.extras, rewiring: !s.extras.rewiring } }))} label={t('toggles.rewiring')} icon={Zap} />
                            <CustomSwitch checked={state.extras.acSystem} onChange={() => setState(s => ({ ...s, extras: { ...s.extras, acSystem: !s.extras.acSystem } }))} label={t('toggles.ac')} icon={Wind} />
                            <CustomSwitch checked={state.extras.underfloor} onChange={() => setState(s => ({ ...s, extras: { ...s.extras, underfloor: !s.extras.underfloor } }))} label={t('toggles.underfloor')} icon={Thermometer} />
                        </div>
                    </div>

                    {/* VILLA EXTRAS (Conditional) */}
                    {state.propertyType === 'villa' && (
                        <div className="space-y-3 animate-in fade-in slide-in-from-left-4">
                            <div className="flex items-center gap-2 p-2 bg-amber-50 text-amber-800 rounded-lg mb-2">
                                <Home size={16} />
                                <span className="text-xs font-bold uppercase tracking-wider">{t('ticket.exterior')}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <CustomSwitch checked={state.villaExtras.roof} onChange={() => setState(s => ({ ...s, villaExtras: { ...s.villaExtras, roof: !s.villaExtras.roof } }))} label={t('toggles.roof')} icon={Home} />
                                <CustomSwitch checked={state.villaExtras.facade} onChange={() => setState(s => ({ ...s, villaExtras: { ...s.villaExtras, facade: !s.villaExtras.facade } }))} label={t('toggles.facade')} icon={Building} />
                                <CustomSwitch checked={state.villaExtras.septic} onChange={() => setState(s => ({ ...s, villaExtras: { ...s.villaExtras, septic: !s.villaExtras.septic } }))} label={t('toggles.septic')} icon={Droplets} />

                                {/* Garden Select */}
                                <div onClick={() => setState(s => ({ ...s, villaExtras: { ...s.villaExtras, garden: s.villaExtras.garden === 'none' ? 'basic' : s.villaExtras.garden === 'basic' ? 'landscaping' : 'none' } }))} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${state.villaExtras.garden !== 'none' ? 'border-green-600 bg-green-50' : 'border-slate-100 bg-white'}`}>
                                    <Trees size={18} className={state.villaExtras.garden !== 'none' ? 'text-green-700' : 'text-slate-400'} />
                                    <div className="flex-1">
                                        <span className="font-semibold text-sm">{state.villaExtras.garden === 'none' ? 'No Garden' : state.villaExtras.garden === 'basic' ? 'Basic Garden' : 'Landscaping'}</span>
                                    </div>
                                </div>

                                {/* Pool Select */}
                                <div onClick={() => setState(s => ({ ...s, villaExtras: { ...s.villaExtras, pool: s.villaExtras.pool === 'none' ? 'refurb' : s.villaExtras.pool === 'refurb' ? 'new' : 'none' } }))} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${state.villaExtras.pool !== 'none' ? 'border-cyan-500 bg-cyan-50' : 'border-slate-100 bg-white'}`}>
                                    <Waves size={18} className={state.villaExtras.pool !== 'none' ? 'text-cyan-600' : 'text-slate-400'} />
                                    <div className="flex-1">
                                        <span className="font-semibold text-sm">{state.villaExtras.pool === 'none' ? 'No Pool' : state.villaExtras.pool === 'refurb' ? 'New filter' : 'New Pool'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* --- RIGHT COLUMN: RECEIPT --- */}
                <div className="xl:col-span-5 relative">
                    <div className="sticky top-24">
                        <div className="bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-slate-800">
                            {/* Header */}
                            <div className="bg-slate-800 p-6 border-b border-slate-700 flex justify-between items-center">
                                <div>
                                    <span className="font-serif text-lg tracking-wide text-nolla-cream block">{t('title')}</span>
                                    <span className="text-xs text-slate-400 font-mono uppercase">REF: {new Date().getFullYear()}-V2</span>
                                </div>
                                <Calculator className="text-nolla-gold" />
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-4">
                                {/* Base Lines */}
                                <ReceiptLine label={t('ticket.interior')} amount={totals.interior} />
                                <ReceiptLine label={t('ticket.installations')} amount={totals.systems} />
                                {totals.exterior > 0 && <ReceiptLine label={t('ticket.exterior')} amount={totals.exterior} highlight />}

                                {/* Surcharge Line (Conditional) */}
                                {totals.locationSurcharge > 0 && (
                                    <div className="flex justify-between items-center text-amber-400 text-sm py-1">
                                        <span>{t('labels.location')}</span>
                                        <span className="font-mono">+{formatMoney(totals.locationSurcharge)}</span>
                                    </div>
                                )}

                                <div className="h-px bg-slate-700 my-2 opacity-50" />

                                {/* Technical Fees */}
                                <div className="flex justify-between items-center text-slate-400 text-sm italic">
                                    <span>{t('ticket.fees')}</span>
                                    <span className="font-mono">{formatMoney(totals.fees)}</span>
                                </div>

                                {/* Safety Buffer */}
                                <div className="flex justify-between items-center text-nolla-gold/90 text-[11px] uppercase tracking-wider font-bold bg-nolla-gold/10 p-2 rounded">
                                    <span>{t('ticket.buffer')}</span>
                                    <span className="flex items-center gap-1"><ShieldCheckIcon /> {t('ticket.included')}</span>
                                </div>
                            </div>

                            {/* Total Area */}
                            <div className="bg-slate-950 p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-nolla-blue/20 rounded-full blur-3xl -mr-10 -mt-10" />

                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 relative z-10">{t('ticket.total')}</p>
                                <div className="text-3xl lg:text-4xl font-bold font-serif text-white relative z-10">
                                    {formatMoney(totals.min)}
                                </div>
                                <div className="text-sm text-slate-400 mt-1 relative z-10">
                                    Max: {formatMoney(totals.max)}
                                </div>

                                <Button className="w-full mt-6 bg-nolla-gold hover:bg-nolla-gold/90 text-slate-900 font-bold h-12 text-md shadow-lg" asChild>
                                    <Link href={`/${locale}/services/audit`}>
                                        {t('ticket.cta')}
                                    </Link>
                                </Button>

                                <p className="text-[9px] text-slate-600 text-center mt-3 leading-tight opacity-70">
                                    {t('ticket.disclaimer')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ReceiptLine({ label, amount, highlight = false }: any) {
    if (amount === 0) return null
    return (
        <div className={`flex justify-between items-center ${highlight ? 'text-white font-medium' : 'text-slate-300 text-sm'}`}>
            <span>{label}</span>
            <span className="font-mono">{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount)}</span>
        </div>
    )
}

function ShieldCheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
