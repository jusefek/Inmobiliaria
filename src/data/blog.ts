
export interface BlogPost {
    slug: string;
    image: string; // URL to specific or generic image
    date: string;
    author: string;
    category: 'Legal' | 'Technical' | 'Scam Prevention' | 'General';
    locales: {
        [key: string]: {
            title: string;
            summary: string;
            content: string; // HTML string for simplicity
        }
    }
}

export const blogPosts: BlogPost[] = [
    {
        slug: "nota-simple-explained",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
        date: "2023-10-15",
        author: "Tesela Legal Team",
        category: "Legal",
        locales: {
            en: {
                title: "The 'Nota Simple' Explained: How to detect hidden debts",
                summary: "The Nota Simple is the most important document when buying property in Spain. Learn how to read it and avoid inheriting the seller's mortgage or embargoes.",
                content: `
                    <h2>What is a Nota Simple?</h2>
                    <p>The <strong>Nota Simple Informativa</strong> is an official report from the Spanish Land Registry (Registro de la Propiedad) that provides comprehensive details about the legal status of a property.</p>
                    
                    <h3>Why is it Critical?</h3>
                    <p>Unlike in some other countries where debts stay with the person, in Spain, <strong>debts can engage the property itself</strong>. If you buy a house with an outstanding mortgage, tax lien, or community debt, you could become liable for it.</p>
                    
                    <h3>Key Warning Signs to Look For</h3>
                    <ul>
                        <li><strong>Cargas (Charges):</strong> This section lists mortgages (hipotecas), embargoes (seizures), or easements (servidumbres). It should ideally be empty or "libre de cargas".</li>
                        <li><strong>Titularidad (Ownership):</strong> Verify that the person selling you the property is actually the registered owner.</li>
                        <li><strong>Descripción (Description):</strong> Does the square footage match reality? Illegal extensions often don't appear here.</li>
                    </ul>
                    
                    <p>Never sign a deposit contract (arras) without reviewing an up-to-date Nota Simple.</p>
                `
            },
            es: {
                title: "La 'Nota Simple' Explicada: Cómo detectar deudas ocultas",
                summary: "La Nota Simple es el documento más importante al comprar una propiedad en España. Aprende a leerla y evita heredar la hipoteca o embargos del vendedor.",
                content: `
                    <h2>¿Qué es una Nota Simple?</h2>
                    <p>La <strong>Nota Simple Informativa</strong> es un informe oficial del Registro de la Propiedad que proporciona detalles completos sobre el estado legal de una propiedad.</p>
                    
                    <h3>¿Por qué es fundamental?</h3>
                    <p>A diferencia de otros países donde las deudas siguen a la persona, en España, <strong>las deudas pueden gravar la propiedad</strong>. Si compras una casa con una hipoteca pendiente, embargo fiscal o deuda comunitaria, podrías ser responsable de ella.</p>
                    
                    <h3>Señales de Alerta Clave</h3>
                    <ul>
                        <li><strong>Cargas:</strong> Esta sección enumera hipotecas, embargos o servidumbres. Idealmente debería estar "libre de cargas".</li>
                        <li><strong>Titularidad:</strong> Verifica que la persona que te vende la propiedad sea realmente el propietario registrado.</li>
                        <li><strong>Descripción:</strong> ¿Coinciden los metros cuadrados con la realidad? Las ampliaciones ilegales a menudo no aparecen aquí.</li>
                    </ul>
                    
                    <p>Nunca firmes un contrato de arras sin revisar una Nota Simple actualizada.</p>
                `
            },
            de: {
                title: "Die 'Nota Simple' erklärt: Wie man versteckte Schulden entdeckt",
                summary: "Die Nota Simple ist das wichtigste Dokument beim Immobilienkauf in Spanien. Lernen Sie, es zu lesen und vermeiden Sie es, die Hypothek oder Pfändungen des Verkäufers zu erben.",
                content: `
                    <h2>Was ist eine Nota Simple?</h2>
                    <p>Die <strong>Nota Simple Informativa</strong> ist ein offizieller Bericht des spanischen Grundbuchamtes (Registro de la Propiedad), der umfassende Details über den rechtlichen Status einer Immobilie liefert.</p>
                    
                    <h3>Warum ist es kritisch?</h3>
                    <p>Anders als in manchen anderen Ländern, wo Schulden bei der Person bleiben, <strong>können in Spanien Schulden die Immobilie selbst belasten</strong>. Wenn Sie ein Haus mit einer ausstehenden Hypothek, einem Steuerpfandrecht oder Gemeinschaftsschulden kaufen, könnten Sie dafür haftbar gemacht werden.</p>
                    
                    <h3>Wichtige Warnzeichen</h3>
                    <ul>
                        <li><strong>Cargas (Lasten):</strong> Dieser Abschnitt listet Hypotheken (hipotecas), Pfändungen (embargos) oder Dienstbarkeiten (servidumbres) auf. Er sollte idealerweise leer oder 'libre de cargas' sein.</li>
                        <li><strong>Titularidad (Eigentum):</strong> Überprüfen Sie, ob die Person, die Ihnen die Immobilie verkauft, tatsächlich der eingetragene Eigentümer ist.</li>
                        <li><strong>Descripción (Beschreibung):</strong> Stimmt die Quadratmeterzahl mit der Realität überein? Illegale Erweiterungen erscheinen hier oft nicht.</li>
                    </ul>
                    
                    <p>Unterschreiben Sie niemals einen Anzahlungsvertrag (arras), ohne eine aktuelle Nota Simple geprüft zu haben.</p>
                `
            },
            nl: {
                title: "De 'Nota Simple' uitgelegd: Hoe verborgen schulden te detecteren",
                summary: "De Nota Simple is het belangrijkste document bij het kopen van vastgoed in Spanje. Leer hoe u het moet lezen en voorkom dat u de hypotheek of beslagen van de verkoper erft.",
                content: `
                    <h2>Wat is een Nota Simple?</h2>
                    <p>De <strong>Nota Simple Informativa</strong> is een officieel rapport van het Spaanse Eigendomsregister (Registro de la Propiedad) dat uitgebreide details geeft over de juridische status van een woning.</p>
                    
                    <h3>Waarom is het cruciaal?</h3>
                    <p>In tegenstelling tot sommige andere landen waar schulden bij de persoon blijven, <strong>kunnen in Spanje schulden vastzitten aan de woning zelf</strong>. Als u een huis koopt met een openstaande hypotheek, belastingclaim of VvE-schuld, kunt u daarvoor aansprakelijk worden gesteld.</p>
                    
                    <h3>Belangrijkste Waarschuwingssignalen</h3>
                    <ul>
                        <li><strong>Cargas (Lasten):</strong> Deze sectie somt hypotheken (hipotecas), beslagen (embargos) of erfdienstbaarheden (servidumbres) op. Het zou idealiter leeg moeten zijn of 'libre de cargas'.</li>
                        <li><strong>Titularidad (Eigendom):</strong> Verifieer dat de persoon die u de woning verkoopt daadwerkelijk de geregistreerde eigenaar is.</li>
                        <li><strong>Descripción (Beschrijving):</strong> Komt het aantal vierkante meters overeen met de werkelijkheid? Illegale uitbreidingen staan hier vaak niet in.</li>
                    </ul>
                    
                    <p>Teken nooit een aanbetalingscontract (arras) zonder een recente Nota Simple te hebben bekeken.</p>
                `
            },
            sv: {
                title: "'Nota Simple' förklarad: Hur man upptäcker dolda skulder",
                summary: "Nota Simple är det viktigaste dokumentet vid köp av fastighet i Spanien. Lär dig hur man läser det och undvik att ärva säljarens bolån eller beslag.",
                content: `
                    <h2>Vad är en Nota Simple?</h2>
                    <p><strong>Nota Simple Informativa</strong> är en officiell rapport från det spanska fastighetsregistret (Registro de la Propiedad) som ger omfattande information om en fastighets juridiska status.</p>
                    
                    <h3>Varför är det kritiskt?</h3>
                    <p>Till skillnad från vissa andra länder där skulder stannar hos personen, <strong>kan skulder i Spanien belasta själva fastigheten</strong>. Om du köper ett hus med ett utestående bolån, skattepant eller gemensamma skulder, kan du bli ansvarig för det.</p>
                    
                    <h3>Viktiga Varningstecken</h3>
                    <ul>
                        <li><strong>Cargas (Belastningar):</strong> Detta avsnitt listar hypotek (hipotecas), beslag (embargos) eller servitut (servidumbres). Det bör idealiskt vara tomt eller 'libre de cargas'.</li>
                        <li><strong>Titularidad (Ägande):</strong> Verifiera att personen som säljer fastigheten till dig faktiskt är den registrerade ägaren.</li>
                        <li><strong>Descripción (Beskrivning):</strong> Stämmer kvadratmetrarna överens med verkligheten? Olagliga tillbyggnader syns ofta inte här.</li>
                    </ul>
                    
                    <p>Skriv aldrig under ett depositionsavtal (arras) utan att ha granskat en uppdaterad Nota Simple.</p>
                `
            },
            no: {
                title: "'Nota Simple' forklart: Hvordan oppdage skjult gjeld",
                summary: "Nota Simple er det viktigste dokumentet når du kjøper eiendom i Spania. Lær hvordan du leser det og unngå å arve selgers boliglån eller heftelser.",
                content: `
                    <h2>Hva er en Nota Simple?</h2>
                    <p><strong>Nota Simple Informativa</strong> er en offisiell rapport fra det spanske eiendomsregisteret (Registro de la Propiedad) som gir omfattende detaljer om en eiendoms juridiske status.</p>
                    
                    <h3>Hvorfor er det kritisk?</h3>
                    <p>I motsetning til i noen andre land der gjeld følger personen, <strong>kan gjeld i Spania hefte ved selve eiendommen</strong>. Hvis du kjøper et hus med utestående boliglån, skattekrav eller fellesgjeld, kan du bli ansvarlig for det.</p>
                    
                    <h3>Viktige varseltegn å se etter</h3>
                    <ul>
                        <li><strong>Cargas (Heftelser):</strong> Denne delen lister opp boliglån (hipotecas), beslag (embargos) eller servitutter (servidumbres). Det bør ideelt sett være tomt eller "libre de cargas".</li>
                        <li><strong>Titularidad (Eierskap):</strong> Bekreft at personen som selger deg eiendommen faktisk er den registrerte eieren.</li>
                        <li><strong>Descripción (Beskrivelse):</strong> Stemmer kvadratmeterne med virkeligheten? Ulovlige utvidelser vises ofte ikke her.</li>
                    </ul>
                    
                    <p>Signer aldri en reservasjonskontrakt (arras) uten å gjennomgå en oppdatert Nota Simple.</p>
                `
            },
            da: {
                title: "'Nota Simple' forklaret: Sådan opdager du skjult gæld",
                summary: "Nota Simple er det vigtigste dokument ved køb af ejendom i Spanien. Lær at læse det og undgå at arve sælgers lån eller udlæg.",
                content: `
                    <h2>Hvad er en Nota Simple?</h2>
                    <p><strong>Nota Simple Informativa</strong> er en officiel rapport fra det spanske ejendomsregister (Registro de la Propiedad), der giver omfattende oplysninger om en ejendoms juridiske status.</p>
                    
                    <h3>Hvorfor er det kritisk?</h3>
                    <p>I modsætning til nogle andre lande, hvor gæld følger personen, <strong>kan gæld i Spanien hæfte på selve ejendommen</strong>. Hvis du køber et hus med et udestående lån, skatteudlæg eller fællesgæld, kan du blive ansvarlig for det.</p>
                    
                    <h3>Vigtige advarselstegn</h3>
                    <ul>
                        <li><strong>Cargas (Hæftelser):</strong> Dette afsnit viser lån (hipotecas), udlæg (embargos) eller servitutter (servidumbres). Det bør ideelt set være tomt eller "libre de cargas".</li>
                        <li><strong>Titularidad (Ejerskab):</strong> Bekræft, at den person, der sælger dig ejendommen, faktisk er den registrerede ejer.</li>
                        <li><strong>Descripción (Beskrivelse):</strong> Stemmer kvadratmeterne overens med virkeligheden? Ulovlige udvidelser vises ofte ikke her.</li>
                    </ul>
                    
                    <p>Underskriv aldrig en depositumskontrakt (arras) uden at gennemgå en opdateret Nota Simple.</p>
                `
            }
        }
    },
    {
        slug: "tourist-licenses-valencia",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
        date: "2023-11-02",
        author: "Tesela Urban Planning",
        category: "Technical",
        locales: {
            en: {
                title: "Tourist Licenses in Valencia: What you can and cannot do",
                summary: "Planning to buy an apartment for Airbnb? Reforms in Valencia's urban regulations have made it harder than ever. Here is the reality check.",
                content: `
                    <h2>The New Reality of Tourist Rentals</h2>
                    <p>Valencia has become a hotspot for tourism, leading to strict regulations to protect long-term residents. Obtaining a new <strong>Vivienda de Uso Turístico (VUT)</strong> license is no longer a formality.</p>
                    
                    <h3>Ground Floor Requirement</h3>
                    <p>In most neighborhoods, new tourist apartments are restricted to the <strong>ground floor (bajo)</strong> or first floor if it has independent access. Upper-floor apartments in residential buildings rarely qualify anymore.</p>
                    
                    <h3>Community Approval</h3>
                    <p>Even if the city hall allows it, the <strong>Community of Owners</strong> can ban tourist rentals in the building statutes. You must check the community statutes before making an offer.</p>
                    
                    <h3>The Risk of Buying Without a License</h3>
                    <p>Buying a property specifically for short-term rental without securing the license first (or verifying it's transferable) is a high-risk strategy. Fines for operating illegally are severe.</p>
                `
            },
            es: {
                title: "Licencias Turísticas en Valencia: Lo que puedes y no puedes hacer",
                summary: "¿Planeas comprar un apartamento para Airbnb? Las reformas en la normativa urbanística de Valencia lo han hecho más difícil que nunca. Aquí tienes la realidad.",
                content: `
                    <h2>La Nueva Realidad de los Alquileres Turísticos</h2>
                    <p>Valencia se ha convertido en un punto caliente para el turismo, lo que ha llevado a regulaciones estrictas para proteger a los residentes a largo plazo. Obtener una nueva licencia de <strong>Vivienda de Uso Turístico (VUT)</strong> ya no es un trámite sencillo.</p>
                    
                    <h3>Requisito de Planta Baja</h3>
                    <p>En la mayoría de los barrios, los nuevos apartamentos turísticos están restringidos a la <strong>planta baja (bajo)</strong> o primera planta si tiene acceso independiente. Los pisos altos en edificios residenciales rara vez califican ya.</p>
                    
                    <h3>Aprobación de la Comunidad</h3>
                    <p>Incluso si el ayuntamiento lo permite, la <strong>Comunidad de Propietarios</strong> puede prohibir los alquileres turísticos en los estatutos del edificio. Debes verificar los estatutos antes de hacer una oferta.</p>
                    
                    <h3>El Riesgo de Comprar Sin Licencia</h3>
                    <p>Comprar una propiedad específicamente para alquiler a corto plazo sin asegurar la licencia primero (o verificar que es transferible) es una estrategia de alto riesgo. Las multas por operar ilegalmente son severas.</p>
                `
            },
            de: {
                title: "Touristenlizenzen in Valencia: Was geht und was nicht",
                summary: "Planen Sie, eine Wohnung für Airbnb zu kaufen? Reformen in Valencias Stadtplanung haben es schwieriger denn je gemacht. Hier ist der Realitätscheck.",
                content: `
                    <h2>Die neue Realität der touristischen Vermietung</h2>
                    <p>Valencia ist zu einem Hotspot für Tourismus geworden, was zu strengen Vorschriften zum Schutz der langfristigen Bewohner geführt hat. Der Erhalt einer neuen <strong>Vivienda de Uso Turístico (VUT)</strong> Lizenz ist keine Formsache mehr.</p>
                    
                    <h3>Erdgeschoss-Anforderung</h3>
                    <p>In den meisten Vierteln sind neue touristische Apartments auf das <strong>Erdgeschoss (bajo)</strong> oder den ersten Stock beschränkt, wenn dieser einen unabhängigen Zugang hat. Obere Etagen in Wohngebäuden qualifizieren sich selten noch.</p>
                    
                    <h3>Zustimmung der Gemeinschaft</h3>
                    <p>Selbst wenn das Rathaus es erlaubt, kann die <strong>Eigentümergemeinschaft</strong> touristische Vermietungen in der Gebäudesatzung verbieten. Sie müssen die Satzung prüfen, bevor Sie ein Angebot machen.</p>
                    
                    <h3>Das Risiko, ohne Lizenz zu kaufen</h3>
                    <p>Eine Immobilie speziell für kurzfristige Vermietung zu kaufen, ohne vorher die Lizenz zu sichern (oder zu prüfen, ob sie übertragbar ist), ist eine hochriskante Strategie. Bußgelder für illegalen Betrieb sind streng.</p>
                `
            },
            nl: {
                title: "Toeristenvergunningen in Valencia: Wat wel en niet mag",
                summary: "Van plan om een appartement voor Airbnb te kopen? Hervormingen in de stedenbouwkundige regelgeving van Valencia hebben het moeilijker dan ooit gemaakt.",
                content: `
                    <h2>De Nieuwe Realiteit van Toeristische Verhuur</h2>
                    <p>Valencia is een hotspot voor toerisme geworden, wat heeft geleid tot strenge regels om vaste bewoners te beschermen. Het verkrijgen van een nieuwe <strong>Vivienda de Uso Turístico (VUT)</strong> vergunning is geen formaliteit meer.</p>
                    
                    <h3>Begane Grond Vereiste</h3>
                    <p>In de meeste wijken zijn nieuwe toeristische appartementen beperkt tot de <strong>begane grond (bajo)</strong> of eerste verdieping als deze een eigen toegang heeft. Bovenwoningen in residentiële gebouwen komen zelden nog in aanmerking.</p>
                    
                    <h3>Goedkeuring van de Gemeenschap</h3>
                    <p>Zelfs als het gemeentehuis het toestaat, kan de <strong>Vereniging van Eigenaren</strong> toeristische verhuur in de statuten verbieden. U moet de statuten controleren voordat u een bod doet.</p>
                    
                    <h3>Het Risico van Kopen Zonder Vergunning</h3>
                    <p>Een woning kopen specifiek voor korte termijn verhuur zonder eerst de vergunning veilig te stellen (of te verifiëren dat deze overdraagbaar is) is een risicovolle strategie. Boetes voor illegaal opereren zijn streng.</p>
                `
            },
            sv: {
                title: "Turistlicenser i Valencia: Vad som är tillåtet och inte",
                summary: "Planerar du att köpa en lägenhet för Airbnb? Reformer i Valencias stadsplanering har gjort det svårare än någonsin. Här är verklighetskollen.",
                content: `
                    <h2>Den Nya Verkligheten för Turistuthyrning</h2>
                    <p>Valencia har blivit en hotspot för turism, vilket lett till strikta regler för att skydda långsiktiga invånare. Att få en ny <strong>Vivienda de Uso Turístico (VUT)</strong> licens är inte längre en formalitet.</p>
                    
                    <h3>Krav på Bottenvåning</h3>
                    <p>I de flesta områden är nya turistlägenheter begränsade till <strong>bottenvåningen (bajo)</strong> eller första våningen om den har egen ingång. Lägenheter högre upp i bostadshus kvalificerar sig sällan längre.</p>
                    
                    <h3>Föreningens Godkännande</h3>
                    <p>Även om kommunen tillåter det, kan <strong>Bostadsrättsföreningen</strong> förbjuda turistuthyrning i sina stadgar. Du måste kontrollera stadgarna innan du lägger ett bud.</p>
                    
                    <h3>Risken att Köpa Utan Licens</h3>
                    <p>Att köpa en fastighet specifikt för korttidsuthyrning utan att säkra licensen först (eller verifiera att den är överförbar) är en högriskstrategi. Böter för olaglig verksamhet är stränga.</p>
                `
            },
            no: {
                title: "Turistlisenser i Valencia: Hva du kan og ikke kan gjøre",
                summary: "Planlegger du å kjøpe en leilighet for Airbnb? Reformer i Valencias byplanlegging har gjort det vanskeligere enn noen gang. Her er realitetssjekken.",
                content: `
                    <h2>Den nye virkeligheten for turistutleie</h2>
                    <p>Valencia har blitt et hotspot for turisme, noe som har ført til strenge regler for å beskytte fastboende. Å få en ny <strong>Vivienda de Uso Turístico (VUT)</strong> lisens er ikke lenger en formalitet.</p>
                    
                    <h3>Krav om første etasje</h3>
                    <p>I de fleste nabolag er nye turist leiligheter begrenset til <strong>første etasje (bajo)</strong> eller andre etasje hvis den har egen inngang. Leiligheter høyere opp i boligblokker kvalifiserer sjelden lenger.</p>
                    
                    <h3>Sameiets godkjenning</h3>
                    <p>Selv om rådhuset tillater det, kan <strong>Sameiet</strong> forby turistutleie i vedtektene. Du må sjekke vedtektene før du legger inn et bud.</p>
                    
                    <h3>Risikoen ved å kjøpe uten lisens</h3>
                    <p>Å kjøpe en eiendom spesifikt for korttidsutleie uten å sikre lisensen først (eller verifisere at den kan overføres) er en høyrisikostrategi. Bøtene for ulovlig drift er strenge.</p>
                `
            },
            da: {
                title: "Turistlicenser i Valencia: Hvad du må og ikke må",
                summary: "Planlægger du at købe en lejlighed til Airbnb? Reformer i Valencias byplanlægning har gjort det sværere end nogensinde. Her er realitetstjekket.",
                content: `
                    <h2>Den nye virkelighed for turistudlejning</h2>
                    <p>Valencia er blevet et hotspot for turisme, hvilket har ført til strenge regler for at beskytte de faste beboere. At få en ny <strong>Vivienda de Uso Turístico (VUT)</strong> licens er ikke længere en formalitet.</p>
                    
                    <h3>Krav om stueetage</h3>
                    <p>I de fleste kvarterer er nye turistlejligheder begrænset til <strong>stueetagen (bajo)</strong> eller første sal, hvis den har egen indgang. Lejligheder højere oppe i beboelsesejendomme kvalificerer sig sjældent længere.</p>
                    
                    <h3>Ejerforeningens godkendelse</h3>
                    <p>Selvom rådhuset tillader det, kan <strong>Ejerforeningen</strong> forbyde turistudlejning i vedtægterne. Du skal tjekke vedtægterne, før du afgiver et bud.</p>
                    
                    <h3>Risikoen ved at købe uden licens</h3>
                    <p>At købe en ejendom specifikt til korttidsudlejning uden at sikre licensen først (eller verificere, at den kan overdrages) er en højrisikostrategi. Bøderne for ulovlig drift er alvorlige.</p>
                `
            }
        }
    },
    {
        slug: "illegal-property-red-flags",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1000",
        date: "2023-11-20",
        author: "Tesela Audit Team",
        category: "Scam Prevention",
        locales: {
            en: {
                title: "Red Flags: 5 signs a property might be illegal",
                summary: "From 'rustic land' traps to phantom swimming pools. Learn to spot the irregularities that real estate agents might 'forget' to mention.",
                content: `
                    <h2>Don't Get Caught Out</h2>
                    <p>International buyers are often targets for properties that are hard to sell to locals due to legal irregularities. Here are 5 common red flags:</p>
                    
                    <ol>
                        <li><strong>"Rustic Land" (Suelo Rústico):</strong> If a house is built on rustic land, it might be "out of planning" (fuera de ordenación). You can likely live there, but you might never be allowed to renovate or extend it.</li>
                        <li><strong>The Phantom Pool:</strong> You see a pool, but it's not on the Cadastral map. This is likely an illegal build and could face a demolition order.</li>
                        <li><strong>Cash Payments:</strong> If a seller asks for a large portion of the price in cash "under the table" (en B), run. It's tax evasion and leaves you legally vulnerable.</li>
                        <li><strong>No Energy Certificate:</strong> It's mandatory for selling. If they don't have it, what else are they hiding?</li>
                        <li><strong>Too Good To Be True:</strong> A luxury villa for half the market price usually has a massive legal or structural defect.</li>
                    </ol>
                `
            },
            es: {
                title: "Banderas Rojas: 5 señales de que una propiedad podría ser ilegal",
                summary: "Desde trampas de 'suelo rústico' hasta piscinas fantasma. Aprende a detectar las irregularidades que los agentes inmobiliarios podrían 'olvidar' mencionar.",
                content: `
                    <h2>No Te Dejes Engañar</h2>
                    <p>Los compradores internacionales son a menudo el objetivo de propiedades que son difíciles de vender a los locales debido a irregularidades legales. Aquí hay 5 señales de alerta comunes:</p>
                    
                    <ol>
                        <li><strong>"Suelo Rústico":</strong> Si una casa está construida en suelo rústico, podría estar "fuera de ordenación". Probablemente puedas vivir allí, pero es posible que nunca se te permita renovarla o ampliarla.</li>
                        <li><strong>La Piscina Fantasma:</strong> Ves una piscina, pero no está en el mapa Catastral. Probablemente sea una construcción ilegal y podría enfrentar una orden de demolición.</li>
                        <li><strong>Pagos en Efectivo:</strong> Si un vendedor pide una gran parte del precio en efectivo "bajo la mesa" (en B), huye. Es evasión de impuestos y te deja legalmente vulnerable.</li>
                        <li><strong>Sin Certificado Energético:</strong> Es obligatorio para vender. Si no lo tienen, ¿qué más están ocultando?</li>
                        <li><strong>Demasiado Bueno Para Ser Verdad:</strong> Una villa de lujo por la mitad del precio de mercado generalmente tiene un defecto legal o estructural masivo.</li>
                    </ol>
                `
            },
            de: {
                title: "Rote Flaggen: 5 Anzeichen, dass eine Immobilie illegal sein könnte",
                summary: "Von 'rustikalem Land' bis zu Phantom-Pools. Lernen Sie, die Unregelmäßigkeiten zu erkennen, die Immobilienmakler 'vergessen' könnten zu erwähnen.",
                content: `
                    <h2>Lassen Sie sich nicht täuschen</h2>
                    <p>Internationale Käufer sind oft Ziel für Immobilien, die aufgrund rechtlicher Unregelmäßigkeiten schwer an Einheimische zu verkaufen sind. Hier sind 5 häufige Warnsignale:</p>
                    
                    <ol>
                        <li><strong>"Suelo Rústico" (Ländlicher Boden):</strong> Wenn ein Haus auf ländlichem Boden gebaut ist, könnte es "außerhalb der Planung" (fuera de ordenación) sein. Sie können wahrscheinlich dort leben, aber Renovierungen oder Erweiterungen könnten verboten sein.</li>
                        <li><strong>Der Phantom-Pool:</strong> Sie sehen einen Pool, aber er ist nicht auf der Katasterkarte. Dies ist wahrscheinlich ein illegaler Bau und könnte eine Abrissverfügung erhalten.</li>
                        <li><strong>Barzahlungen:</strong> Wenn ein Verkäufer einen großen Teil des Preises in bar "unter dem Tisch" (en B) verlangt, rennen Sie weg. Es ist Steuerhinterziehung und macht Sie rechtlich angreifbar.</li>
                        <li><strong>Kein Energieausweis:</strong> Er ist für den Verkauf obligatorisch. Wenn sie ihn nicht haben, was verbergen sie sonst noch?</li>
                        <li><strong>Zu gut, um wahr zu sein:</strong> Eine Luxusvilla zum halben Marktpreis hat normalerweise einen massiven rechtlichen oder strukturellen Mangel.</li>
                    </ol>
                `
            },
            nl: {
                title: "Rode Vlaggen: 5 tekenen dat een woning illegaal kan zijn",
                summary: "Van 'rustiek land' vallen tot spookzwembaden. Leer de onregelmatigheden te herkennen die makelaars misschien 'vergeten' te vermelden.",
                content: `
                    <h2>Laat U Niet Verrassen</h2>
                    <p>Internationale kopers zijn vaak doelwit voor woningen die moeilijk aan lokalen te verkopen zijn vanwege juridische onregelmatigheden. Hier zijn 5 veelvoorkomende rode vlaggen:</p>
                    
                    <ol>
                        <li><strong>"Suelo Rústico" (Rustiek Land):</strong> Als een huis op rustiek land is gebouwd, kan het "buiten de planning" (fuera de ordenación) vallen. U kunt er waarschijnlijk wonen, maar mag het misschien nooit renoveren of uitbreiden.</li>
                        <li><strong>Het Spookzwembad:</strong> U ziet een zwembad, maar het staat niet op de Kadastrale kaart. Dit is waarschijnlijk illegale bouw en kan een sloopbevel krijgen.</li>
                        <li><strong>Contante Betalingen:</strong> Als een verkoper een groot deel van de prijs contant "onder de tafel" (en B) vraagt, ren dan weg. Het is belastingontduiking en maakt u juridisch kwetsbaar.</li>
                        <li><strong>Geen Energiecertificaat:</strong> Dit is verplicht voor verkoop. Als ze het niet hebben, wat verbergen ze dan nog meer?</li>
                        <li><strong>Te Mooi Om Waar Te Zijn:</strong> Een luxe villa voor de helft van de marktprijs heeft meestal een enorm juridisch of structureel gebrek.</li>
                    </ol>
                `
            },
            sv: {
                title: "Röda Flaggor: 5 tecken på att en fastighet kan vara olaglig",
                summary: "Från 'rustik mark'-fällor till spökpooler. Lär dig att upptäcka oegentligheter som fastighetsmäklare kanske 'glömmer' att nämna.",
                content: `
                    <h2>Bli Inte Lurad</h2>
                    <p>Internationella köpare är ofta måltavlor för fastigheter som är svåra att sälja till lokalbefolkningen på grund av juridiska oegentligheter. Här är 5 vanliga varningssignaler:</p>
                    
                    <ol>
                        <li><strong>"Suelo Rústico" (Rustik Mark):</strong> Om ett hus är byggt på rustik mark kan det vara "utanför planeringen" (fuera de ordenación). Du kan troligen bo där, men du kanske aldrig får renovera eller bygga ut det.</li>
                        <li><strong>Spökpoolen:</strong> Du ser en pool, men den finns inte på Fastighetskartan. Detta är sannolikt ett olagligt bygge och kan möta ett rivningsbeslut.</li>
                        <li><strong>Kontantbetalningar:</strong> Om en säljare ber om en stor del av priset i kontanter "under bordet" (en B), spring. Det är skatteflykt och gör dig juridiskt sårbar.</li>
                        <li><strong>Inget Energicertifikat:</strong> Det är obligatoriskt för försäljning. Om de inte har det, vad mer döljer de?</li>
                        <li><strong>För Bra För Att Vara Sant:</strong> En lyxvilla för halva marknadspriset har vanligtvis ett massivt juridiskt eller strukturellt fel.</li>
                    </ol>
                `
            },
            no: {
                title: "Røde Flagg: 5 tegn på at en eiendom kan være ulovlig",
                summary: "Fra 'rustico land' feller til fantomsvømmebassenger. Lær å oppdage uregelmessighetene som eiendomsmeglere kanskje 'glemmer' å nevne.",
                content: `
                    <h2>Ikke bli lurt</h2>
                    <p>Internasjonale kjøpere er ofte mål for eiendommer som er vanskelige å selge til lokalbefolkningen på grunn av juridiske uregelmessigheter. Her er 5 vanlige røde flagg:</p>
                    
                    <ol>
                        <li><strong>"Suelo Rústico" (Rustikt land):</strong> Hvis et hus er bygget på rustikt land, kan det være "utenfor regulering" (fuera de ordenación). Du kan sannsynligvis bo der, men du får kanskje aldri lov til å renovere eller utvide det.</li>
                        <li><strong>Fantomsvømmebassenget:</strong> Du ser et basseng, men det er ikke på Matrikkelkartet. Dette er sannsynligvis ulovlig bygget og kan få rivningsordre.</li>
                        <li><strong>Kontantbetalinger:</strong> Hvis en selger ber om en stor del av prisen i kontanter "under bordet" (en B), løp. Det er skatteunndragelse og gjør deg juridisk sårbar.</li>
                        <li><strong>Ingen Energiattest:</strong> Det er obligatorisk for salg. Hvis de ikke har det, hva annet skjuler de?</li>
                        <li><strong>For godt til å være sant:</strong> En luksusvilla til halv markedspris har vanligvis en massiv juridisk eller strukturell feil.</li>
                    </ol>
                `
            },
            da: {
                title: "Røde Flag: 5 tegn på, at en ejendom kan være ulovlig",
                summary: "Fra 'rustik jord' fælder til fantompools. Lær at opdage de uregelmæssigheder, som ejendomsmæglere måske 'glemmer' at nævne.",
                content: `
                    <h2>Bliv ikke snydt</h2>
                    <p>Internationale købere er ofte mål for ejendomme, der er svære at sælge til lokale på grund af juridiske uregelmæssigheder. Her er 5 almindelige røde flag:</p>
                    
                    <ol>
                        <li><strong>"Suelo Rústico" (Rustik jord):</strong> Hvis et hus er bygget på rustik jord, kan det være "uden for planlægning" (fuera de ordenación). Du kan sandsynligvis bo der, men du får måske aldrig lov til at renovere eller udvide det.</li>
                        <li><strong>Fantompoolen:</strong> Du ser en pool, men den er ikke på matrikelkortet. Dette er sandsynligvis ulovligt byggeri og kan risikere nedrivning.</li>
                        <li><strong>Kontantbetalinger:</strong> Hvis en sælger beder om en stor del af prisen i kontanter "under bordet" (en B), så løb væk. Det er skatteunddragelse og gør dig juridisk sårbar.</li>
                        <li><strong>Intet Energimærke:</strong> Det er obligatorisk for salg. Hvis de ikke har det, hvad skjuler de så ellers?</li>
                        <li><strong>For godt til at være sandt:</strong> En luksusvilla til halv markedspris har normalt en massiv juridisk eller strukturel fejl.</li>
                    </ol>
                `
            }
        }
    }
];
