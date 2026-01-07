// Supported Locales
export const locales = ['en', 'es', 'de', 'nl', 'sv', 'no', 'da', 'pl', 'fr', 'it', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const dictionaries: Record<Locale, any> = {
    en: {
        audit_cta: "Audit this property",
        trust_signal: "Report in English/Spanish. We support German/Nordic clients.",
        keywords: "Property Audit, Real Estate Due Diligence",
    },
    es: {
        audit_cta: "Auditar esta vivienda",
        trust_signal: "Informe en Inglés/Español. Soporte para clientes Alemanes/Nórdicos.",
        keywords: "Auditoría Inmobiliaria, Revisión Técnica",
    },
    de: {
        audit_cta: "Immobilie prüfen",
        trust_signal: "Bericht auf Englisch/Spanisch. Wir unterstützen deutsche Kunden.",
        keywords: "Immobiliencheck, Baugutachter, Hauskauf Beratung",
    },
    nl: {
        audit_cta: "Woning inspecteren",
        trust_signal: "Rapport in Engels/Spaans. Wij ondersteunen Nederlandse klanten.",
        keywords: "Bouwkundige keuring, Aankoopmakelaar Spanje",
    },
    sv: {
        audit_cta: "Besiktiga bostaden",
        trust_signal: "Rapport på engelska/spanska. Vi stöder nordiska kunder.",
        keywords: "Husbesiktning, Köparmäklare Spanien, Lägenhetsbesiktning",
    },
    no: {
        audit_cta: "Inspiser eiendommen",
        trust_signal: "Rapport på engelsk/spansk. Vi støtter nordiske kunder.",
        keywords: "Tilstandsrapport, Boligkjøpsrådgivning",
    },
    da: {
        audit_cta: "Inspicér boligen",
        trust_signal: "Rapport på engelsk/spansk. Vi støtter nordiske kunder.",
        keywords: "Tilstandsrapport, Boligrådgivning Spanien",
    },
    pl: {
        audit_cta: "Audyt nieruchomości",
        trust_signal: "Raport w języku angielskim/hiszpańskim.",
        keywords: "Audyt nieruchomości, Due Diligence",
    },
    fr: {
        audit_cta: "Auditer la propriété",
        trust_signal: "Rapport en anglais/espagnol.",
        keywords: "Audit immobilier, Due Diligence",
    },
    it: {
        audit_cta: "Visionare la proprietà",
        trust_signal: "Rapporto in inglese/spagnolo.",
        keywords: "Revisione immobiliare, Due Diligence",
    },
    ru: {
        audit_cta: "Аудит недвижимости",
        trust_signal: "Отчет на английском/испанском языках.",
        keywords: "Аудит недвижимости, Проверка",
    }
};

export interface LocationData {
    slug: string;
    locales: {
        [key in Locale]?: {
            title: string;
            seo_title: string;
            description: string;
            content_h1: string;
            glossary_term?: {
                term: string;
                definition: string;
            };
        }
    };
}

export const locations: LocationData[] = [
    {
        slug: 'alicante',
        locales: {
            en: {
                title: "Property Audit in Alicante",
                seo_title: "Buying Property in Alicante? Safe Investment Audit",
                description: "Avoid scams and hidden debts in Alicante. Express property due diligence in 24h.",
                content_h1: "Invest securely in Alicante",
            },
            de: {
                title: "Immobiliencheck in Alicante",
                seo_title: "Haus kaufen in Alicante? Sicherheit für 49€",
                description: "Vermeiden Sie Risiken beim Immobilienkauf in Alicante. Professioneller Immobiliencheck in 24h.",
                content_h1: "Sicher investieren in Alicante",
                glossary_term: {
                    term: "Licencia de Primera Ocupación",
                    definition: "In Deutschland vergleichbar mit der 'Bezugsgenehmigung'. Ohne dieses Dokument dürfen Sie legal nicht in der Immobilie wohnen oder Strom/Wasser anmelden."
                }
            },
            sv: {
                title: "Husbesiktning i Alicante",
                seo_title: "Köpa hus i Alicante? Undvik risker med vår besiktning",
                description: "Vi kontrollerar bostaden i Alicante på 24 timmar. Undvik dolda fel och skulder.",
                content_h1: "Investera säkert i Alicante",
                glossary_term: {
                    term: "Licencia de Primera Ocupación",
                    definition: "Motsvarar ett 'slutbesked' i Sverige. Det bekräftar att bostaden är laglig att bo i och uppfyller byggnormerna."
                }
            },
            nl: {
                title: "Bouwkundige keuring Alicante",
                seo_title: "Huis kopen in Alicante? Voorkom problemen",
                description: "Wij controleren de woning in Alicante op schulden en illegaliteit. Rapport binnen 24 uur.",
                content_h1: "Veilig investeren in Alicante",
            },
            no: {
                title: "Tilstandsrapport Alicante",
                seo_title: "Kjøpe bolig i Alicante? Sjekk eiendommen først",
                description: "Unngå feller i det spanske boligmarkedet. Vi sjekker eiendommen i Alicante for deg.",
                content_h1: "Trygg investering i Alicante",
            },
            da: {
                title: "Tilstandsrapport Alicante",
                seo_title: "Køb af bolig i Alicante? Få sikkerhed for 49€",
                description: "Vi tjekker boligen for gæld og ulovligheder. Få ro i maven inden du skriver under.",
                content_h1: "Sikker investering i Alicante",
                glossary_term: {
                    term: "Licencia de Primera Ocupación",
                    definition: "Ibrugtagningstilladelse. Uden denne er boligen ulovlig at bebo, og du kan ikke få vand eller el."
                }
            },
            es: {
                title: "Auditoría Inmobiliaria en Alicante",
                seo_title: "Comprar piso en Alicante? Revisa cargas y licencias",
                description: "Evita estafas en Alicante. Revisamos la Nota Simple, deudas y licencias en 24 horas por 49€.",
                content_h1: "Compra segura en Alicante",
            },
            pl: { title: "Audyt nieruchomości w Alicante", seo_title: "Alicante Audit", description: "Unikaj oszustw w Alicante. Sprawdzamy księgę wieczystą, zadłużenie i licencje...", content_h1: "Bezpieczny zakup w Alicante" },
            fr: { title: "Audit immobilier à Alicante", seo_title: "Alicante Audit", description: "Évitez les escroqueries à Alicante. Nous vérifions le registre foncier, les dettes...", content_h1: "Investir en toute sécurité à Alicante" },
            it: { title: "Revisione immobiliare a Alicante", seo_title: "Alicante Audit", description: "Evita truffe a Alicante. Controlliamo il registro fondiario, i debiti...", content_h1: "Investire in sicurezza a Alicante" },
            ru: { title: "Аудит недвижимости в Аликанте", seo_title: "Alicante Audit", description: "Избегайте мошенничества в Аликанте. Мы проверяем земельный кадастр, долги...", content_h1: "Безопасные инвестиции в Аликанте" }
        }
    },
    {
        slug: 'malaga',
        locales: {
            en: {
                title: "Property Check Malaga",
                seo_title: "Buying in Costa del Sol? Due Diligence Audit",
                description: "Don't buy a holiday home in Malaga without checking the Tourist License status. We verify legal compliance.",
                content_h1: "Safely buy in Costa del Sol",
            },
            de: {
                title: "Immobilie Malaga prüfen",
                seo_title: "Haus kaufen Costa del Sol? Immobiliencheck",
                description: "Vorsicht bei Ferienwohnungen in Malaga. Wir prüfen die touristische Lizenz und Legalität für Sie.",
                content_h1: "Sicher investieren in Malaga",
                glossary_term: {
                    term: "Licencia Turística",
                    definition: "Nicht jede Wohnung in Malaga darf an Touristen vermietet werden. Wir prüfen, ob eine legale Lizenz vorliegt oder möglich ist."
                }
            },
            nl: {
                title: "Aankoopkeuring Malaga",
                seo_title: "Vakantiehuis in Malaga? Check de vergunningen",
                description: "Wij controleren of uw investering in Malaga legaal verhuurd mag worden. Voorkom boetes.",
                content_h1: "Veilig kopen aan de Costa del Sol",
            },
            sv: {
                title: "Köpa hus Malaga",
                seo_title: "Investera i Costa del Sol? Gör en besiktning",
                description: "Vi kontrollerar ägarskap och turistlicenser i Malaga. Köp inte grisen i säcken.",
                content_h1: "Trygg affär i Malaga",
            },
            no: {
                title: "Boligsjekk Malaga",
                seo_title: "Feriebolig på Costa del Sol? Unngå feller",
                description: "Mange boliger i Malaga mangler utleielisens. Vi sjekker dette før du kjøper.",
                content_h1: "Sikkerhet i Malaga",
            },
            da: {
                title: "Boligadvokat Malaga",
                seo_title: "Køb i Costa del Sol? Tjek papirerne",
                description: "Vi sikrer, at din feriebolig i Malaga er lovlig og gældfri. Hurtig rapport.",
                content_h1: "Invester sikkert i Malaga",
            },
            es: {
                title: "Revisión Piso Malaga",
                seo_title: "Inversión en Costa del Sol? Auditoría Legal",
                description: "Comprueba la licencia turística y cargas antes de comprar en Málaga.",
                content_h1: "Inversión segura en Málaga",
            },
            pl: { title: "Audyt nieruchomości w Maladze", seo_title: "Malaga Audit", description: "Sprawdź licencję turystyczną i obciążenia przed zakupem w Maladze.", content_h1: "Bezpieczna inwestycja w Maladze" },
            fr: { title: "Audit immobilier à Malaga", seo_title: "Malaga Audit", description: "Vérifiez la licence touristique et les charges avant d'acheter à Malaga.", content_h1: "Investissement sûr à Malaga" },
            it: { title: "Revisione immobiliare a Malaga", seo_title: "Malaga Audit", description: "Controlla la licenza turistica e gli oneri prima di acquistare a Malaga.", content_h1: "Investimento sicuro a Malaga" },
            ru: { title: "Аудит недвижимости в Малаге", seo_title: "Malaga Audit", description: "Проверьте туристическую лицензию и обременения перед покупкой в Малаге.", content_h1: "Безопасные инвестиции в Малаге" }
        }
    },
    {
        slug: 'marbella',
        locales: {
            en: {
                title: "Luxury Villa Audit Marbella",
                seo_title: "Buying in Marbella? Check Urban Legality",
                description: "High-value investments require high-level due diligence. We detect urban infractions in Marbella villas.",
                content_h1: "Secure your Villa in Marbella",
            },
            de: {
                title: "Luxusvilla Check Marbella",
                seo_title: "Villa in Marbella kaufen? Baurecht prüfen",
                description: "Marbella hat viele illegale Bauten. Wir prüfen die 'Infracción Urbanística' bevor Sie Millionen investieren.",
                content_h1: "Sicher investieren in Marbella",
                glossary_term: {
                    term: "Infracción Urbanística",
                    definition: "Ein Bauverstoß. In Marbella wurden viele Villen größer gebaut als erlaubt. Das kann zu Abrissverfügungen führen."
                }
            },
            nl: {
                title: "Villa Keuring Marbella",
                seo_title: "Huis kopen Marbella? Let op illegaliteit",
                description: "Voorkom dat u een illegale villa koopt. Wij controleren het bestemmingsplan in Marbella.",
                content_h1: "Zekerheid in Marbella",
            },
            sv: {
                title: "Husbesiktning Marbella",
                seo_title: "Köpa lyxvilla i Marbella? Kontrollera lagligheten",
                description: "Många villor i Marbella har svartbyggen. Vi kontrollerar stadsplanen åt dig.",
                content_h1: "Tryggt köp i Marbella",
            },
            no: {
                title: "Boligsjekk Marbella",
                seo_title: "Villa i Marbella? Unngå ulovlige bygg",
                description: "Vi sjekker om eiendommen har ulovlige påbygg som kan gi deg problemer senere.",
                content_h1: "Sikker luksus i Marbella",
            },
            da: {
                title: "Boligrådgivning Marbella",
                seo_title: "Køb af villa i Marbella? Tjek lovligheden",
                description: "Undgå nedrivningspåbud. Vi tjekker byggetilladelserne i Marbella.",
                content_h1: "Sikker investering i Marbella",
            },
            es: {
                title: "Auditoría Villa Marbella",
                seo_title: "Comprar en Marbella? Revisa Infracciones",
                description: "Detectamos infracciones urbanísticas y excesos de edificabilidad en Marbella.",
                content_h1: "Compra segura en Marbella",
            },
            pl: { title: "Audyt nieruchomości w Marbelli", seo_title: "Marbella Audit", description: "Wykrywamy naruszenia urbanistyczne i samowole budowlane w Marbelli.", content_h1: "Bezpieczny zakup w Marbelli" },
            fr: { title: "Audit immobilier à Marbella", seo_title: "Marbella Audit", description: "Nous détectons les infractions urbanistiques et les excès de construction à Marbella.", content_h1: "Achat sécurisé à Marbella" },
            it: { title: "Revisione immobiliare a Marbella", seo_title: "Marbella Audit", description: "Rileviamo infrazioni urbanistiche ed eccessi edificatori a Marbella.", content_h1: "Acquisto sicuro a Marbella" },
            ru: { title: "Аудит недвижимости в Марбелье", seo_title: "Marbella Audit", description: "Мы выявляем градостроительные нарушения и превышение объемов строительства в Марбелье.", content_h1: "Безопасная покупка в Марбелье" }
        }
    },
    {
        slug: 'valencia',
        locales: {
            en: {
                title: "Property Audit in Valencia",
                seo_title: "Buying Property in Valencia? Safe Investment Audit",
                description: "Avoid scams and hidden debts in Valencia. Express property due diligence in 24h.",
                content_h1: "Invest securely in Valencia",
            },
            de: {
                title: "Immobiliencheck in Valencia",
                seo_title: "Wohnung kaufen in Valencia? Baugutachter Service",
                description: "Unabhängige Prüfung von Immobilien in Valencia. Keine versteckten Mängel oder Schulden.",
                content_h1: "Sicher investieren in Valencia",
                glossary_term: {
                    term: "Cédula de Habitabilidad",
                    definition: "Die 'Bewohnbarkeitsbescheinigung'. Essenziell, um die Immobilie touristisch zu vermieten oder als Hauptwohnsitz zu nutzen."
                }
            },
            nl: {
                title: "Aankoopkeuring Valencia",
                seo_title: "Appartement Valencia kopen? Check vergunningen",
                description: "Wij controleren de Cédula de Habitabilidad en VVE schulden in Valencia.",
                content_h1: "Veilig kopen in Valencia",
            },
            sv: {
                title: "Lägenhetsbesiktning Valencia",
                seo_title: "Köpa lägenhet i Valencia? Undvik problem",
                description: "Vi ser till att lägenheten i Valencia har alla licenser för uthyrning.",
                content_h1: "Investera i Valencia",
            },
            no: {
                title: "Boligsjekk Valencia",
                seo_title: "Leilighet i Valencia? Sjekk lisenser",
                description: "Skal du leie ut? Vi sjekker turistlisensmuligheter i Valencia.",
                content_h1: "Trygghet i Valencia",
            },
            da: {
                title: "Boligadvokat Valencia",
                seo_title: "Investering i Valencia? Få styr på papirerne",
                description: "Vi tjekker ejerforeningsgæld og licenser i Valencia.",
                content_h1: "Sikker boligjagt i Valencia",
            },
            es: {
                title: "Auditoría Piso Valencia",
                seo_title: "Comprar en Valencia? Evita Vicios Ocultos",
                description: "Revisamos estatutos de comunidad y licencias turísticas en Valencia.",
                content_h1: "Inversión segura en Valencia",
            },
            pl: { title: "Audyt nieruchomości w Walencji", seo_title: "Valencia Audit", description: "Sprawdzamy statut wspólnoty i licencje turystyczne w Walencji.", content_h1: "Bezpieczna inwestycja w Walencji" },
            fr: { title: "Audit immobilier à Valence", seo_title: "Valencia Audit", description: "Nous vérifions les statuts de la copropriété et les licences touristiques à Valence.", content_h1: "Investissement sûr à Valence" },
            it: { title: "Revisione immobiliare a Valencia", seo_title: "Valencia Audit", description: "Controlliamo gli statuti condominiali e le licenze turistiche a Valencia.", content_h1: "Investimento sicuro a Valencia" },
            ru: { title: "Аудит недвижимости в Валенсии", seo_title: "Valencia Audit", description: "Мы проверяем устав сообщества и туристические лицензии в Валенсии.", content_h1: "Безопасные инвестиции в Валенсии" }
        }
    },
    {
        slug: 'palma',
        locales: {
            en: {
                title: "Property Check Palma de Mallorca",
                seo_title: "Buying in Mallorca? Verify Legal Status",
                description: "Mallorca has strict zoning laws. We check for rural land violations.",
                content_h1: "Safe Buying in Palma",
            },
            de: {
                title: "Immobiliencheck Mallorca",
                seo_title: "Finca auf Mallorca kaufen? Legalitätsprüfung",
                description: "Viele Fincas auf Mallorca sind illegal erweitert. Wir prüfen das 'Suelo Rústico' Gesetz.",
                content_h1: "Sicher zur Finca auf Mallorca",
                glossary_term: {
                    term: "Suelo Rústico",
                    definition: "Ländlicher Boden. Bauen ist hier streng reglementiert. Illegale Pools oder Anbauten sind auf Mallorca häufig und riskant."
                }
            },
            nl: {
                title: "Huis kopen Mallorca",
                seo_title: "Finca op Mallorca? Check de legaliteit",
                description: "Pas op voor illegale bouw op het platteland van Mallorca. Wij doen de check.",
                content_h1: "Zekerheid op Mallorca",
            },
            sv: {
                title: "Husbesiktning Mallorca",
                seo_title: "Köpa hus på Mallorca? Undvik svartbygge",
                description: "Vi kontrollerar att poolen och huset på Mallorca är lagligt byggda.",
                content_h1: "Tryggt köp på Mallorca",
            },
            no: {
                title: "Boligsjekk Mallorca",
                seo_title: "Feriehus på Mallorca? Unngå rivingsordre",
                description: "Vi sjekker om eiendommen på Mallorca bryter med byggeforbudet i grønne soner.",
                content_h1: "Sikkerhet på Mallorca",
            },
            da: {
                title: "Boligrådgivning Mallorca",
                seo_title: "Køb på Mallorca? Tjek landzonetilladelse",
                description: "Mange landsteder på Mallorca er ulovlige. Vi tjekker papirerne.",
                content_h1: "Invester sikkert på Mallorca",
            },
            es: {
                title: "Auditoría Finca Mallorca",
                seo_title: "Comprar en Mallorca? Cuidado con Suelo Rústico",
                description: "Verificamos la legalidad de construcciones en suelo rústico en Mallorca.",
                content_h1: "Compra segura en Mallorca",
            },
            pl: { title: "Audyt nieruchomości na Majorce", seo_title: "Mallorca Audit", description: "Weryfikujemy legalność budynków na terenach wiejskich na Majorce.", content_h1: "Bezpieczny zakup na Majorce" },
            fr: { title: "Audit immobilier à Majorque", seo_title: "Mallorca Audit", description: "Nous vérifions la légalité des constructions en zone rurale à Majorque.", content_h1: "Achat sécurisé à Majorque" },
            it: { title: "Revisione immobiliare a Maiorca", seo_title: "Mallorca Audit", description: "Verifichiamo la legalità delle costruzioni in aree rurali a Maiorca.", content_h1: "Acquisto sicuro a Maiorca" },
            ru: { title: "Аудит недвижимости на Майорке", seo_title: "Mallorca Audit", description: "Мы проверяем законность построек на сельских землях Майорки.", content_h1: "Безопасная покупка на Майорке" }
        }
    },
    {
        slug: 'torrevieja',
        locales: {
            en: {
                title: "Audit Torrevieja Property",
                seo_title: "Buying in Torrevieja? Check for Debts",
                description: "Torrevieja properties often carry community debts. We verify everything in 24h.",
                content_h1: "Safe purchase in Torrevieja",
            },
            de: {
                title: "Immobiliencheck Torrevieja",
                seo_title: "Wohnung in Torrevieja? Schulden prüfen",
                description: "Vorsicht bei Community-Schulden in Torrevieja. Wir prüfen die 'Comunidad de Propietarios'.",
                content_h1: "Sicher kaufen in Torrevieja",
            },
            nl: {
                title: "Aankoopkeuring Torrevieja",
                seo_title: "Huis Torrevieja? Pas op voor schulden",
                description: "Wij controleren of er achterstallige betalingen zijn bij de VVE in Torrevieja.",
                content_h1: "Veilig wonen in Torrevieja",
            },
            sv: {
                title: "Husbesiktning Torrevieja",
                seo_title: "Köpa i Torrevieja? Kolla skulderna",
                description: "Många svenskar köper i Torrevieja. Vi ser till att du inte ärver säljarens skulder.",
                content_h1: "Tryggt i Torrevieja",
                glossary_term: {
                    term: "Comunidad de Propietarios",
                    definition: "Ägarföreningen. Om säljaren har skulder till föreningen kan du bli betalningsskyldig. Vi kontrollerar detta."
                }
            },
            no: {
                title: "Boligsjekk Torrevieja",
                seo_title: "Leilighet i Torrevieja? Unngå gjeld",
                description: "Sjekk om det hefter gjeld på leiligheten i Torrevieja før du signerer.",
                content_h1: "Sikkerhet i Torrevieja",
            },
            da: {
                title: "Boligrådgivning Torrevieja",
                seo_title: "Køb i Torrevieja? Tjek fællesudgifter",
                description: "Vi tjekker restancer til ejerforeningen i Torrevieja.",
                content_h1: "Sikker handel i Torrevieja",
            },
            es: {
                title: "Auditoría Torrevieja",
                seo_title: "Comprar en Torrevieja? Revisa deudas comunidad",
                description: "Evita heredar deudas de comunidad en Torrevieja. Informe en 24h.",
                content_h1: "Compra segura en Torrevieja",
            },
            pl: { title: "Audyt nieruchomości w Torrevieja", seo_title: "Torrevieja Audit", description: "Unikaj dziedziczenia długów wspólnotowych w Torrevieja.", content_h1: "Bezpieczny zakup w Torrevieja" },
            fr: { title: "Audit immobilier à Torrevieja", seo_title: "Torrevieja Audit", description: "Évitez d'hériter des dettes de copropriété à Torrevieja.", content_h1: "Achat sécurisé à Torrevieja" },
            it: { title: "Revisione immobiliare a Torrevieja", seo_title: "Torrevieja Audit", description: "Evita di ereditare debiti condominiali a Torrevieja.", content_h1: "Acquisto sicuro a Torrevieja" },
            ru: { title: "Аудит недвижимости в Торревьеха", seo_title: "Torrevieja Audit", description: "Избегайте наследования долгов сообщества в Торревьехе.", content_h1: "Безопасная покупка в Торревьехе" }
        }
    },
    {
        slug: 'estepona',
        locales: {
            en: {
                title: "Property Audit Estepona",
                seo_title: "New Build in Estepona? Contract Review",
                description: "Estepona is booming with new builds. We check the developer's bank guarantees.",
                content_h1: "Secure New Build in Estepona",
            },
            de: {
                title: "Immobiliencheck Estepona",
                seo_title: "Neubau in Estepona? Bauträger prüfen",
                description: "Wir prüfen die Bankgarantien des Bauträgers in Estepona. Kaufen Sie keinen Plan ohne Sicherheit.",
                content_h1: "Sicherer Neubau in Estepona",
            },
            nl: {
                title: "Nieuwbouw Estepona check",
                seo_title: "Huis kopen Estepona? Controleer garantie",
                description: "Wij checken de bankgaranties bij nieuwbouwprojecten in Estepona.",
                content_h1: "Zekerheid in Estepona",
            },
            sv: {
                title: "Nyproduktion Estepona",
                seo_title: "Köpa nytt i Estepona? Kolla garantin",
                description: "Vi kontrollerar att byggherren i Estepona har de lagstadgade bankgarantierna.",
                content_h1: "Trygg nyproduktion Estepona",
            },
            no: {
                title: "Nybygg Estepona",
                seo_title: "Kjøpe prosjekt i Estepona? Sjekk utbygger",
                description: "Vi sjekker utbyggers økonomi og garantier i Estepona.",
                content_h1: "Sikkerhet i Estepona",
            },
            da: {
                title: "Nybyggeri Estepona",
                seo_title: "Projektkøb Estepona? Tjek garantien",
                description: "Køb ikke projektsalg i Estepona uden at tjekke bankgarantien.",
                content_h1: "Sikker handel i Estepona",
            },
            es: {
                title: "Auditoría Obra Nueva Estepona",
                seo_title: "Comprar sobre plano Estepona? Avales",
                description: "Revisamos los avales bancarios y el contrato de compraventa en Estepona.",
                content_h1: "Compra segura en Estepona",
            },
            pl: { title: "Audyt deweloperski w Esteponie", seo_title: "Estepona Audit", description: "Sprawdzamy gwarancje bankowe i umowy deweloperskie w Esteponie.", content_h1: "Bezpieczny zakup w Esteponie" },
            fr: { title: "Audit immobilier à Estepona", seo_title: "Estepona Audit", description: "Nous examinons les garanties bancaires et les contrats de vente à Estepona.", content_h1: "Achat sécurisé à Estepona" },
            it: { title: "Revisione immobiliare a Estepona", seo_title: "Estepona Audit", description: "Controlliamo le garanzie bancarie e i contratti di vendita a Estepona.", content_h1: "Acquisto sicuro a Estepona" },
            ru: { title: "Аудит недвижимости в Эстепоне", seo_title: "Estepona Audit", description: "Мы проверяем банковские гарантии и договоры купли-продажи в Эстепоне.", content_h1: "Безопасная покупка в Эстепоне" }
        }
    },
    {
        slug: 'barcelona',
        locales: {
            en: {
                title: "Property Audit Barcelona",
                seo_title: "Buying in BCN? Check Tourist License Cap",
                description: "Barcelona has a ban on new tourist licenses. We verify if the existing license is valid.",
                content_h1: "Invest securely in Barcelona",
            },
            de: {
                title: "Immobiliencheck Barcelona",
                seo_title: "Wohnung in Barcelona? Lizenz prüfen",
                description: "Barcelona vergibt keine neuen touristischen Lizenzen. Wir prüfen, ob die 'Licencia' echt ist.",
                content_h1: "Sicher investieren in Barcelona",
                glossary_term: {
                    term: "PEUAT",
                    definition: "Der spezielle Stadtplan von Barcelona, der touristische Vermietung regelt. In den meisten Zonen sind keine neuen Lizenzen mehr möglich."
                }
            },
            nl: {
                title: "Aankoopkeuring Barcelona",
                seo_title: "Appartement Barcelona? Check verhuur",
                description: "Verhuurlicenties in Barcelona zijn goud waard. Wij controleren de geldigheid.",
                content_h1: "Veilig kopen in Barcelona",
            },
            sv: {
                title: "Lägenhetsbesiktning Barcelona",
                seo_title: "Köpa i Barcelona? Kolla licensen",
                description: "Vi kontrollerar att lägenheten i Barcelona har rätt tillstånd för uthyrning.",
                content_h1: "Investera i Barcelona",
            },
            no: {
                title: "Boligsjekk Barcelona",
                seo_title: "Leilighet i Barcelona? Sjekk utleie",
                description: "Barcelona har strenge regler. Vi sjekker at utleielisensen er gyldig.",
                content_h1: "Trygghet i Barcelona",
            },
            da: {
                title: "Boligrådgivning Barcelona",
                seo_title: "Køb i Barcelona? Tjek reglerne",
                description: "Vi sikrer, at du ikke køber en 'ulovlig' feriebolig i Barcelona.",
                content_h1: "Sikker boligjagt i Barcelona",
            },
            es: {
                title: "Auditoría Piso Barcelona",
                seo_title: "Inversión en Barcelona? Revisa PEUAT",
                description: "Verificamos la vigencia de la licencia turística según el PEUAT en Barcelona.",
                content_h1: "Inversión segura en Barcelona",
            },
            pl: { title: "Audyt nieruchomości w Barcelonie", seo_title: "Barcelona Audit", description: "Weryfikujemy ważność licencji turystycznej zgodnie z PEUAT w Barcelonie.", content_h1: "Bezpieczna inwestycja w Barcelonie" },
            fr: { title: "Audit immobilier à Barcelone", seo_title: "Barcelona Audit", description: "Nous vérifions la validité de la licence touristique selon le PEUAT à Barcelone.", content_h1: "Investissement sûr à Barcelone" },
            it: { title: "Revisione immobiliare a Barcellona", seo_title: "Barcelona Audit", description: "Verifichiamo la validità della licenza turistica secondo il PEUAT a Barcellona.", content_h1: "Investimento sicuro a Barcellona" },
            ru: { title: "Аудит недвижимости в Барселоне", seo_title: "Barcelona Audit", description: "Мы проверяем действительность туристической лицензии согласно PEUAT в Барселоне.", content_h1: "Безопасные инвестиции в Барселоне" }
        }
    },
    {
        slug: 'tenerife',
        locales: {
            en: {
                title: "Property Audit Tenerife",
                seo_title: "Buying in Tenerife? Coastal Law Check",
                description: "Watch out for the 'Ley de Costas' in Tenerife. We verify the property line distance to the sea.",
                content_h1: "Safe Buying in Tenerife",
            },
            de: {
                title: "Immobiliencheck Teneriffa",
                seo_title: "Haus auf Teneriffa? Küstengesetz prüfen",
                description: "Das 'Ley de Costas' (Küstengesetz) kann Enteignung bedeuten. Wir messen den Abstand zum Meer.",
                content_h1: "Sicher zur Immobilie auf Teneriffa",
                glossary_term: {
                    term: "Ley de Costas",
                    definition: "Das spanische Küstengesetz. Immobilien zu nah am Meer können Staatseigentum sein, auch wenn Sie dafür bezahlen. Risiko der Enteignung."
                }
            },
            nl: {
                title: "Huis kopen Tenerife",
                seo_title: "Huis Tenerife? Pas op voor de kustwet",
                description: "Wij controleren of uw huis op Tenerife niet in de beschermde kustzone ligt.",
                content_h1: "Zekerheid op Tenerife",
            },
            sv: {
                title: "Husbesiktning Teneriffa",
                seo_title: "Köpa på Teneriffa? Kolla kustlagen",
                description: "Vi kontrollerar att huset inte bryter mot den spanska kustlagen på Teneriffa.",
                content_h1: "Tryggt köp på Teneriffa",
            },
            no: {
                title: "Boligsjekk Tenerife",
                seo_title: "Bolig på Tenerife? Strandsonen",
                description: "Sjekk at eiendommen ikke ligger i den forbudte strandsonen på Tenerife.",
                content_h1: "Sikkerhet på Tenerife",
            },
            da: {
                title: "Boligrådgivning Tenerife",
                seo_title: "Køb på Tenerife? Tjek kystlinjen",
                description: "Vi sikrer dig mod ekspropriering pga. kystloven på Tenerife.",
                content_h1: "Sikker investering på Tenerife",
            },
            es: {
                title: "Auditoría Tenerife",
                seo_title: "Comprar en Tenerife? Ley de Costas",
                description: "Analizamos la afectación por la Ley de Costas en primera línea de playa en Tenerife.",
                content_h1: "Compra segura en Tenerife",
            },
            pl: { title: "Audyt nieruchomości na Teneryfie", seo_title: "Tenerife Audit", description: "Analizujemy wpływ ustawy o wybrzeżach na nieruchomości przy plaży.", content_h1: "Bezpieczny zakup na Teneryfie" },
            fr: { title: "Audit immobilier à Tenerife", seo_title: "Tenerife Audit", description: "Nous analysons l'impact de la loi littorale sur les propriétés en bord de mer.", content_h1: "Achat sécurisé à Tenerife" },
            it: { title: "Revisione immobiliare a Tenerife", seo_title: "Tenerife Audit", description: "Analizziamo l'impatto della legge sulle coste sulle proprietà fronte mare.", content_h1: "Acquisto sicuro a Tenerife" },
            ru: { title: "Аудит недвижимости на Тенерифе", seo_title: "Tenerife Audit", description: "Мы анализируем влияние закона о побережьях на недвижимость на первой линии.", content_h1: "Безопасная покупка на Тенерифе" }
        }
    },
    {
        slug: 'ibiza',
        locales: {
            en: {
                title: "Luxury Audit Ibiza",
                seo_title: "Buying Villa in Ibiza? Protected Land Check",
                description: "Ibiza has strict protected land areas (ANEI). We ensure your villa is not on protected nature land.",
                content_h1: "Secure Luxury in Ibiza",
            },
            de: {
                title: "Immobiliencheck Ibiza",
                seo_title: "Villa auf Ibiza? Naturschutz prüfen",
                description: "Viele Villen auf Ibiza stehen illegal im Naturschutzgebiet (ANEI). Wir prüfen das Kataster.",
                content_h1: "Sicher investieren auf Ibiza",
                glossary_term: {
                    term: "ANEI",
                    definition: "Área Natural de Especial Interés. Naturschutzgebiet auf den Balearen. Bauen ist hier streng verboten. Abrissgefahr für illegale Villen."
                }
            },
            nl: {
                title: "Villa Keuring Ibiza",
                seo_title: "Huis kopen Ibiza? Check natuurgebied",
                description: "Wij controleren of uw droomvilla op Ibiza niet in een beschermd natuurgebied ligt.",
                content_h1: "Zekerheid op Ibiza",
            },
            sv: {
                title: "Husbesiktning Ibiza",
                seo_title: "Köpa på Ibiza? Undvik naturskyddsområde",
                description: "Vi kontrollerar att villan på Ibiza inte ligger på skyddad mark (ANEI).",
                content_h1: "Tryggt köp på Ibiza",
            },
            no: {
                title: "Boligsjekk Ibiza",
                seo_title: "Villa på Ibiza? Unngå naturreservat",
                description: "Vi sjekker at eiendommen på Ibiza er lovlig oppført og ikke i vernet sone.",
                content_h1: "Sikkerhet på Ibiza",
            },
            da: {
                title: "Boligrådgivning Ibiza",
                seo_title: "Køb på Ibiza? Tjek fredninger",
                description: "Undgå ulovlige boliger i naturzoner på Ibiza. Vi tjekker papirerne.",
                content_h1: "Invester sikkert på Ibiza",
            },
            es: {
                title: "Auditoría Villa Ibiza",
                seo_title: "Comprar en Ibiza? Revisa ANEI",
                description: "Verificamos que la propiedad no invada Áreas Naturales de Especial Interés en Ibiza.",
                content_h1: "Inversión segura en Ibiza",
            },
            pl: { title: "Audyt willi na Ibizie", seo_title: "Ibiza Audit", description: "Sprawdzamy, czy nieruchomość nie narusza Obszarów Naturalnych o Szczególnym Znaczeniu.", content_h1: "Bezpieczna inwestycja na Ibizie" },
            fr: { title: "Audit immobilier à Ibiza", seo_title: "Ibiza Audit", description: "Nous vérifions que la propriété n'empiète pas sur les zones naturelles protégées.", content_h1: "Investissement sûr à Ibiza" },
            it: { title: "Revisione immobiliare a Ibiza", seo_title: "Ibiza Audit", description: "Verifichiamo che la proprietà non invada le Aree Naturali di Speciale Interesse.", content_h1: "Investimento sicuro a Ibiza" },
            ru: { title: "Аудит недвижимости на Ибице", seo_title: "Ibiza Audit", description: "Мы проверяем, не вторгается ли недвижимость в Особые природные зоны.", content_h1: "Безопасные инвестиции на Ибице" }
        }
    }
];
