
export interface BlogPost {
    slug: string;
    date: string;
    author: string;
    image: string; // Added image field to match existing UI needs
    category: 'Legal' | 'Technical' | 'Scam Prevention' | 'General'; // Added category to match existing UI
    content: {
        en: { title: string; excerpt: string; body: string; tags: string[] };
        es: { title: string; excerpt: string; body: string; tags: string[] };
        de: { title: string; excerpt: string; body: string; tags: string[] };
        nl: { title: string; excerpt: string; body: string; tags: string[] };
        sv: { title: string; excerpt: string; body: string; tags: string[] };
        no: { title: string; excerpt: string; body: string; tags: string[] };
        da: { title: string; excerpt: string; body: string; tags: string[] };
        pl: { title: string; excerpt: string; body: string; tags: string[] };
        fr: { title: string; excerpt: string; body: string; tags: string[] };
        it: { title: string; excerpt: string; body: string; tags: string[] };
        ru: { title: string; excerpt: string; body: string; tags: string[] };
    }
}

export const blogPosts: BlogPost[] = [
    // ARTICLE 1: THE AFO TRAP (FULL CONTENT)
    {
        slug: "afo-trap-legal-limbo",
        date: "2024-01-15",
        author: "Tesela Legal Team",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
        category: "Legal",
        content: {
            // ENGLISH: Focus on "Legal Limbo" and Resale issues
            en: {
                title: "The 'AFO' Trap: Buying a Country House in Legal Limbo",
                excerpt: "Real estate agents call it 'rustic charm'. Lawyers call it a nightmare. Why buying an 'AFO' property might be the worst investment mistake in Spain.",
                tags: ["Legal", "Rustic Land", "AFO", "Property Law"],
                body: `
## What does "AFO" actually mean?

You’ve found the perfect country house (*finca*). It has a pool, a guest house, and amazing views. The agent tells you it is "regularized via AFO". It sounds like it's legal, right? **Wrong.**

**AFO (Asimilado a Fuera de Ordenación)** translates to "Assimilated to Out of Regulation". 

In plain English: **The property is illegal**, but the administration has admitted they are too late to demolish it. They tolerate its existence, but they do not recognize it as legal housing.

### The "Legal Limbo" Consequences

Buying an AFO property puts you in a permanent state of stagnation:
1.  **Zero Expansion:** You cannot add a single square meter. No new garage, no guest house extension, nothing.
2.  **Maintenance Only:** You are strictly limited to hygiene and safety repairs. Want to change the roof to a modern style? **Denied.** Want to build a new pool? **Illegal.**
3.  **No License of First Occupation:** You will likely never get an LPO, which means you cannot legally rent it out to tourists.

### The Resale Nightmare

The biggest risk isn't living there; it's selling it. 
> "AFO properties depreciate over time because they cannot adapt to modern standards."

When you try to sell in 5-10 years, buyers will demand full legality. Banks often refuse mortgages for AFO transaction, cutting off 70% of your potential buyer pool.

**Our Advice:** If the price isn't 40% below market value, walk away.
                `
            },
            // SPANISH: Technical approach, limitations on works
            es: {
                title: "La Trampa del AFO: Viviendas en el Limbo Urbanístico",
                excerpt: "Muchos agentes lo venden como 'regularizado', pero el AFO no es una legalización plena. Descubre las severas limitaciones de obras que sufrirás.",
                tags: ["Legal", "Suelo Rústico", "Urbanismo", "AFO"],
                body: `
## ¿Qué es realmente un AFO?

El régimen de **Asimilado a Fuera de Ordenación (AFO)** es el reconocimiento administrativo de una irregularidad que ya no puede ser restablecida (no se puede demoler por prescripción), pero que **sigue siendo ilegal** a efectos urbanísticos.

No has comprado una casa legal; has comprado una casa "tolerada".

### Las Limitaciones de Obras (La Letra Pequeña)

La Ley del Suelo es tajante con los inmuebles en AFO. El propietario ve sus derechos de propiedad severamente mermados:

1.  **Prohibición Total de Consolidación:** No se permiten obras que aumenten el valor de expropiación.
2.  **Solo Mantenimiento Estricto:** Únicamente se autorizan obras de *higiene, salubridad y seguridad*.
    *   *Ejemplo:* Puedes reparar una gotera, pero no puedes cambiar la estructura del tejado para hacerlo más alto.
    *   *Ejemplo:* Puedes arreglar el filtro de la piscina, pero no puedes ampliarla ni un centímetro.
3.  **Suministros Precarios:** Las compañías de suministros pueden denegar la conexión definitiva si no hay Cédula de Habitabilidad, imposible de obtener en AFO pleno.

### El Impacto en la Cartera

Un inmueble en AFO **no vale lo mismo** que uno legal. A efectos de tasación bancaria, su valor se reduce drásticamente, y financiar la compra suele ser inviable para el comprador promedio.
                `
            },
            // GERMAN: Bestandsschutz concept & Wertminderung (Depreciation)
            de: {
                title: "Die AFO-Falle: Immobilienkauf im rechtlichen Niemandsland",
                excerpt: "Makler nennen es 'rustikalen Charme', Anwälte nennen es 'Wertvernichtung'. Warum der 'Bestandsschutz' (AFO) in Spanien nicht dasselbe ist wie zu Hause.",
                tags: ["Recht", "Rustikales Land", "Investitionsschutz", "AFO"],
                body: `
## Bestandsschutz auf Spanisch: Ein Trugschluss

Viele deutsche Käufer hören "AFO" und denken an den deutschen **Bestandsschutz**. Das ist ein gefährlicher Irrtum. 

**AFO (Asimilado a Fuera de Ordenación)** bedeutet, dass das Haus illegal gebaut wurde. Die Behörden reißen es nicht ab, weil die Verjährungsfrist abgelaufen ist, aber der rechtliche Makel bleibt für immer bestehen.

### Das Problem der Wertminderung (*Wertminderung*)

Eine AFO-Immobilie ist eine "sterbende" Investition:
1.  **Keine Modernisierung:** Sie dürfen das Haus erhalten, aber nicht verbessern. Eine Wertsteigerung durch Umbau ist rechtlich unmöglich.
2.  **Wiederaufbauverbot:** Wenn das Haus (z.B. durch ein Feuer) zerstört wird, **dürfen Sie es nicht wieder aufbauen**. Sie verlieren das Haus für immer. In Deutschland erlaubt der Bestandsschutz oft den Wiederaufbau; in Spanien beim AFO in der Regel nicht.
3.  **Finanzierungshürden:** Deutsche und spanische Banken finanzieren AFO-Immobilien oft nicht oder nur mit sehr geringem Beleihungswert.

### Fazit für Investoren

Wenn Sie eine Finca als AFO kaufen, kaufen Sie ein Objekt mit eingebautem Wertverlust. Akzeptieren Sie dies nur, wenn der Kaufpreis diesen massiven rechtlichen Nachteil bereits widerspiegelt.
                `
            },
            // DUTCH: Renovation ban (Verbouwingsverbod)
            nl: {
                title: "De AFO-Val: De Droomfinca die een Nachtmerrie werd",
                excerpt: "Het 'Verbouwingsverbod'. Waarom een AFO-status betekent dat u uw droomhuis in Spanje misschien nooit mag moderniseren.",
                tags: ["Juridisch", "Rustiek Land", "Verbouwing", "AFO"],
                body: `
## AFO betekent eigenlijk: Verbouwingsverbod

U wordt verliefd op een oude finca. De makelaar zegt: "Het is AFO, dus het is geregulariseerd, geen zorgen." **Pas op.**

In Nederland kunt u een gedoogd pand vaak nog opknappen. In Spanje betekent **AFO (Asimilado a Fuera de Ordenación)** dat u in een juridisch dwangbuis zit.

### Het Strikte Verbouwingsverbod

De gemeente 'tolereert' dat het huis er staat, maar wil eigenlijk dat het verdwijnt. Daarom zijn de regels extreem streng:
*   **Geen Zwembad:** Heeft het huis geen zwembad? Dan mag u er *nooit* een bouwen. Zelfs geen tijdelijke constructie.
*   **Geen Uitbreiding:** U mag het volume van het huis niet vergroten. Geen extra slaapkamer, geen serre, geen terrasoverkapping.
*   **Esthetische Beperkingen:** Zelfs het wijzigen van de gevel kan worden geweigerd als het wordt gezien als een 'waardevermeerdering'.

### Waarom dit uw Investering doodt

Nederlanders kopen vaak om te klussen en waarde toe te voegen. Bij een AFO-pand is dit onmogelijk.
> "U koopt een huis dat bevroren is in de tijd. U kunt erin wonen, maar u kunt er niet in investeren."

Zonder de mogelijkheid om te moderniseren, zal de doorverkoopwaarde stagneren of dalen.
                `
            },
            // SWEDISH: Investment safety & "Svartbygge" (Black building) concept
            sv: {
                title: "AFO-fällan: Att köpa ett 'Svartbygge' med papper",
                excerpt: "Mäklaren säger att det är legaliserat. Sanningen är att det är ett tolererat svartbygge. Så påverkar AFO din långsiktiga investering.",
                tags: ["Lag", "Landsbygd", "Investering", "AFO"],
                body: `
## Legalisering eller bara tolerans?

Många svenska köpare tror att AFO är samma sak som att huset har blivit "legaliserat" (*legalisering*). Detta är felaktigt. 

Ett hus i **AFO (Asimilado a Fuera de Ordenación)** är ett hus som byggdes olagligt (*svartbygge*) och som aldrig kommer att bli helt lagligt. Kommunen har bara gett upp rätten att riva det just nu.

### Investeringsrisken

Varför är detta farligt för din plånbok?
1.  **Osäljbarhet:** När du vill sälja om 5 år kommer köparna vara mer noggranna. Ett AFO-hus är svårt att sälja till någon som behöver bolån.
2.  **Ingen Uthyrningslicens:** Du vill hyra ut via Airbnb när du inte är där? Glöm det. AFO-fastigheter får nästan aldrig turistlicens. Din inkomstkalkyl faller samman.
3.  **Försäkringsproblem:** Om huset brinner ner eller skadas, kan försäkringsbolaget vägra betala fullt belopp för återuppbyggnad eftersom huset juridiskt sett inte borde vara där.

**Vårt råd:** Köp aldrig en AFO-fastighet till fullt marknadspris. Det är en riskfylld tillgång.
                `
            },
            // NORWEGIAN: Long term safety & Legalization myth
            no: {
                title: "AFO-fellen: Myten om legalisering i Spania",
                excerpt: "Eiendomsmeglere selger ofte AFO-boliger som 'problefrie'. Lær hvorfor dette 'juridiske ingenmannslandet' kan knuse hyttedrømmen.",
                tags: ["Juridisk", "Fritidsbolig", "Investering", "AFO"],
                body: `
## Hva betyr egentlig AFO?

Du finner en idyllisk "Finca" i fjellene. Megleren sier den har AFO-papirer. Det høres trygt ut, ikke sant? 

Realiteten er at **AFO (Asimilado a Fuera de Ordenación)** betyr "assimilert til utenfor regulering". På godt norsk: **Boligen er ulovlig oppført**, men myndighetene har gitt opp å kreve den revet på grunn av foreldelse.

### Konsekvensene for din Trygghet

Å eie en AFO-bolig er ikke som å eie en lovlig bolig:
*   **Du eier, men bestemmer ikke:** Du kan ikke bygge på, ikke bygge garasje, og ofte ikke engang legge fliser på en gruslagt terrasse uten risiko for bøter.
*   **Ingen Utleiemulighet:** Uten ferdigattest (LPO) får du ikke turistlisens. Drømmen om å finansiere kjøpet via utleie vil ikke la seg realisere.
*   **Videresalg er vanskelig:** Skandinaver er kresne. Når du skal selge, vil de fleste styre unna når advokaten deres ser "AFO" i papirene.

> "Du kjøper i praksis en bruksrett til et bygg som myndighetene helst så at ikke eksisterte."
                `
            },
            // DANISH: Investment safety & Impossibility of legalization
            da: {
                title: "AFO-fælden: Når drømmehuset er ulovligt opført",
                excerpt: "Hvad betyder 'AFO'? Forstå hvorfor denne status kan gøre din spanske bolig umulig at renovere eller videresælge med fortjeneste.",
                tags: ["Jura", "Landhus", "Sikkerhed", "AFO"],
                body: `
## Det juridiske tomrum

Du har fundet et hus på landet. Mægleren forsikrer dig om, at "alt er i orden med AFO". Men AFO er ikke en legalisering. Det er en **tålt ulovlighed**.

**AFO (Asimilado a Fuera de Ordenación)** betyder, at huset overtræder byplanlægningen, men at kommunen ikke længere kan kræve det revet ned.

### Hvorfor er det en dårlig investering?

For den danske investor er AFO en alvorlig begrænsning:
1.  **Renoveringsstop:** Du må kun vedligeholde det absolut nødvendige. Vil du lave nyt køkken eller bad? Det kan være en gråzone. Vil du bygge til? **Strengt forbudt.**
2.  **Ingen LPO (Ibrugtagningstilladelse):** Uden denne kan du ikke få lovligt vand og el (hvis det ikke allerede er der), og du kan slet ikke få turistlicens.
3.  **Værditab:** En AFO-ejendom stiger sjældent i værdi på samme måde som en lovlig ejendom, fordi den ikke kan forbedres.

**Advarsel:** Lad dig ikke forblænde af udsigten. Hvis papirerne siger AFO, skal prisen være derefter.
                `
            },
            pl: {
                title: "Pułapka AFO: Kupno wiejskiego domu w prawnej próżni",
                excerpt: "Agencje nieruchomości nazywają to 'rustykalnym urokiem'. Prawnicy koszmarem. Dlaczego zakup nieruchomości 'AFO' może być najgorszą inwestycją w Hiszpanii.",
                tags: ["Prawo", "Wiejskie Nieruchomości", "AFO", "Inwestycje"],
                body: `
## Co właściwie oznacza "AFO"?

Znalazłeś idealny wiejski dom (*finca*). Ma basen, domek dla gości i niesamowite widoki. Agent mówi, że jest "uregulowany przez AFO". Brzmi legalnie, prawda? **Błąd.**

**AFO (Asimilado a Fuera de Ordenación)** oznacza w wolnym tłumaczeniu "Zrównany z Stanem Poza Planem". 
W prostym języku: **Nieruchomość jest nielegalna**, ale urząd przyznał, że jest za późno na jej wyburzenie. Tolerują jej istnienie, ale nie uznają jej za legalne mieszkanie.

### Konsekwencje "Prawnego Limbo"

Kupno nieruchomości AFO stawia cię w stanie permanentnej stagnacji:
1.  **Zakaz Rozbudowy:** Nie możesz dodać ani metra kwadratowego. 
2.  **Tylko Konserwacja:** Jesteś ograniczony do napraw higienicznych i bezpieczeństwa. Chcesz zmienić dach? **Odmowa.** Nowy basen? **Nielegalne.**
3.  **Brak Licencji Pierwszego Zasiedlenia (LPO):** Prawdopodobnie nigdy nie otrzymasz LPO, co oznacza brak legalnego wynajmu turystycznego.

**Nasza rada:** Jeśli cena nie jest o 40% niższa od rynkowej, odejdź.
                `
            },
            fr: {
                title: "Le Piège de l'AFO : Acheter une maison de campagne dans le flou juridique",
                excerpt: "Les agents immobiliers appellent ça 'charme rustique'. Les avocats un cauchemar. Pourquoi acheter une propriété 'AFO' peut être votre pire erreur.",
                tags: ["Droit", "Finca", "AFO", "Investissement"],
                body: `
## Que signifie vraiment "AFO" ?

Vous avez trouvé la maison de campagne parfaite (*finca*). L'agent vous dit qu'elle est "régularisée via AFO". Ça sonne légal, non ? **Faux.**

**AFO (Asimilado a Fuera de Ordenación)** signifie "Assimilé à Hors Ordonnance".
En clair : **La propriété est illégale**, mais l'administration tolère son existence car il est trop tard pour la démolir.

### Les Conséquences

1.  **Zéro Extension :** Impossible d'agrandir.
2.  **Maintenance Uniquement :** Vous ne pouvez faire que des réparations d'hygiène et de sécurité. Piscine ? **Illégal.**
3.  **Pas de LPO :** Pas de location touristique légale possible.

**Notre conseil :** Si le prix n'est pas 40% sous le marché, fuyez.
                `
            },
            it: {
                title: "La Trappola AFO: Comprare casa in un limbo legale",
                excerpt: "Gli agenti lo chiamano 'fascino rustico'. Gli avvocati un incubo. Perché una proprietà 'AFO' può essere il peggior investimento.",
                tags: ["Legale", "Rustico", "AFO", "Investimenti"],
                body: `
## Cosa significa "AFO"?

Hai trovato la casa perfetta. L'agente dice che è "regolarizzata via AFO". Sembra legale? **Sbagliato.**

**AFO** significa che **la proprietà è illegale**, ma è troppo tardi per demolirla. È "tollerata", non legale.

### Le Conseguenze

1.  **Niente Espansioni:** Non puoi aggiungere un metro quadro.
2.  **Solo Manutenzione:** Vietato fare piscine nuove o grandi ristrutturazioni.
3.  **Niente LPO:** Niente licenza turistica.

**Consiglio:** Se non costa il 40% in meno, lascia perdere.
                `
            },
            ru: {
                title: "Ловушка AFO: Покупка дома в правовом вакууме",
                excerpt: "Агенты называют это 'деревенским шармом', юристы — кошмаром. Почему дом со статусом 'AFO' — плохая инвестиция.",
                tags: ["Закон", "Глубинка", "AFO", "Инвестиции"],
                body: `
## Что такое "AFO"?

Вы нашли идеальный дом. Агент говорит: "Он с AFO". Это законно? **Нет.**

**AFO** означает, что **дом построен незаконно**, но сносить его поздно. Власти его терпят, но не признают жильем.

### Последствия

1.  **Нельзя расширять:** Никаких пристроек.
2.  **Только ремонт:** Нельзя строить бассейн или менять крышу.
3.  **Нет LPO:** Нельзя сдавать туристам.

**Совет:** Если цена не ниже рынка на 40%, не покупайте.
                `
            }
        }
    },

    // SKELETONS FOR ARTICLES 2-5

    // ARTICLE 2: TOURIST LICENSE VETO
    {
        slug: "tourist-license-veto",
        date: "2024-01-22",
        author: "Tesela Urban Planning",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
        category: "Technical",
        content: {
            en: {
                title: "The Tourist License Veto: A White Paper for Investors",
                excerpt: "The Supreme Court has fundamentally changed the landscape. It is no longer about 'if' a community can ban you, but 'has' it? We analyze the legal nuances of the 3/5 majority and how to audit a building like a forensic accountant.",
                tags: ["Airbnb", "Community Laws", "Investment Safety"],
                body: `
## Executive Summary: The Rules Have Changed
For a decade, the "Horizontal Property Act" (LPH) was ambiguous. Investors operated on the principle that "what is not forbidden is allowed."
Two Supreme Court rulings regarding the interpretation of Article 17.12 of the LPH have ended this era. **Communities of Owners now have the explicit power to prohibit holiday rentals with a double majority of 3/5.**

## 1. The Mechanics of the 3/5 Vote
It is not just 3/5 of the people raising their hands. It is a **"Double Majority"**:
1.  **Headcount:** 3/5 of the total owners.
2.  **Quotas:** Owners representing 3/5 of the participation quotas (*cuotas de participación*).

**The "Absentee Vote" Danger:**
Crucially, owners who do not attend the meeting are counted as **"YES"** votes (supporting the majority) if they do not formally object within 30 days of receiving the minutes. This mechanism makes it surprisingly easy for a proactive President to pass a ban even with low attendance.

## 2. Statutes vs. Internal Rules: The Critical Distinction
Most investors confuse *Estatutos* (Statutes) with *Normas de Régimen Interno* (Internal Bylaws).
*   **Statutes:** Define the constitution of the building. Changing them usually requires **unanimity**. However, the newbie mistake is assuming you are safe because the statutes don't mention Airbnb. The 3/5 rule is a special exception that allows the community to *amend the statutes* specifically to ban economic activities without unanimity.
*   **Internal Rules:** Regulate coexistence (pool hours, noise, elevator use). They only require a **simple majority (1/2)**.
    *   *The Risk:* A community might not ban you (needs 3/5), but they can restrict *how* you rent (e.g., "no check-ins after 10 PM", "no luggage in the elevator"). This can make your business operationally unviable without a technical ban.

## 3. The "Silent Veto": Why the Registry is Not Enough
A common tragedy in Valencia: An investor buys a flat, checks the Property Registry (*Registro de la Propiedad*), sees no prohibitions, and signs.
Two weeks later, the President informs them: "We voted to ban rentals 4 months ago."

**Why wasn't it in the Registry?**
Because registering a statute change costs money and takes time (Notary + Registrar fees). The agreement is valid and binding from the moment the vote is recorded in the Minutes (*Actas*), even if not yet registered. **You inherit this prohibition as the new owner.**

## 4. The "Tesela Forensic Audit"
We do not rely on verbal assurances or a clean Registry note. Our Due Diligence is forensic:
1.  **The "Certificate of Non-Agreement":** We demand a signed certificate from the Administrator stating that *no agreements limiting the use of private properties have been approved in the last 5 years.*
2.  **The "Hostility Index":** We analyze 3 years of AGM minutes. Are there complaints about "suitcases banging"? Police calls? A hostile building will eventually ban you, even if they haven't yet.
3.  **The Municipal Layer:** Valencia, Alicante, Barcelona, and Madrid have "Saturated Zones" (ZAS). A community "Yes" is useless if the City Council says "No" due to urban planning zoning.

> **Conclusion:** In 2024, acquiring a tourist property is a legal minefield. If you don't audit the Community Minutes and the Municipal Zoning, you are gambling, not investing.
                `
            },
            es: {
                title: "El Veto a la Licencia Turística: White Paper para Inversores",
                excerpt: "El Tribunal Supremo ha cambiado las reglas del juego. Analizamos jurídicamente la mayoría de 3/5, la diferencia entre Estatutos y Normas Internas, y cómo auditar una comunidad para evitar la ruina.",
                tags: ["Alquiler Turístico", "Ley Propiedad Horizontal", "Inversión"],
                body: `
## Resumen Ejecutivo: Cambio de Paradigma
Durante una década, la *Ley de Propiedad Horizontal* (LPH) fue ambigua. Los inversores operaban bajo el principio de "lo que no está prohibido, está permitido".
Dos sentencias del Tribunal Supremo sobre el artículo 17.12 de la LPH han cerrado esa era. **Las Comunidades de Propietarios tienen ahora el poder explícito de prohibir el alquiler vacacional con una doble mayoría de 3/5.**

## 1. La Mecánica del Voto de 3/5
No basta con levantar la mano. Se requiere una **"Doble Mayoría"**:
1.  **Propietarios:** 3/5 del número total de propietarios.
2.  **Cuotas:** Propietarios que representen 3/5 de las cuotas de participación.

**El Peligro del "Voto Ausente":**
Crucialmente, los propietarios que no asisten a la Junta se contabilizan como votos **"A FAVOR"** de la mayoría si no manifiestan su discrepancia en los 30 días siguientes a la notificación del acta. Esto facilita enormemente que una comunidad organizada prohíba la actividad aunque la asistencia a la reunión sea baja.

## 2. Estatutos vs. Normas de Régimen Interno
Muchos inversores confunden estos dos conceptos legales.
*   **Estatutos:** Definen la constitución del edificio. Cambiarlos suele requerir **unanimidad**. Sin embargo, la regla de 3/5 es una excepción legal que permite *modificar los estatutos* específicamente para prohibir actividades económicas sin necesidad del voto de todos.
*   **Normas de Régimen Interno:** Regulan la convivencia (horarios de piscina, ruidos). Solo requieren **mayoría simple (1/2)**.
    *   *El Riesgo:* Una comunidad puede no lograr los 3/5 para prohibirte, pero puede usar la mayoría simple para *asfixiarte* (ej: "prohibido usar el ascensor con maletas", "prohibido check-in a partir de las 22:00").

## 3. El "Veto Silencioso": Por qué el Registro Miente
Una tragedia común en Valencia: Un inversor compra un piso, pide la Nota Simple, ve que está limpia, y firma.
Dos semanas después, el Presidente le informa: "Votamos prohibir los pisos turísticos hace 4 meses".

**¿Por qué no salía en la Nota Simple?**
Porque elevar a público e inscribir un cambio estatutario cuesta dinero y tiempo. El acuerdo es **válido y vinculante** desde el momento en que se cierra el Acta, aunque no esté en el Registro. Tú, como nuevo propietario, **heredas esa prohibición.**

## 4. La "Auditoría Forense" de Tesela
No nos fiamos de la palabra del vendedor. Nuestro Due Diligence es exhaustivo:
1.  **El Certificado de No-Acuerdo:** Exigimos un certificado firmado por el Administrador indicando que *no se han aprobado acuerdos limitativos del uso privativo en los últimos 5 años.*
2.  **El Índice de Hostilidad:** Analizamos las Actas de los últimos 3 años. ¿Hay quejas recurrentes? ¿Llamadas a la policía? Un edificio hostil te acabará prohibiendo o denunciando.
3.  **La Capa Municipal:** Valencia y Alicante tienen Zonas Saturadas (ZAS). Un "Sí" de la comunidad no sirve de nada si el Ayuntamiento tiene suspendidas las licencias en esa manzana.

> **Conclusión:** En 2024, comprar para explotar en turístico requiere ingeniería legal. Si no auditas las Actas y la normativa municipal, estás apostando, no invirtiendo.
                `
            },
            de: {
                title: "Das Airbnb-Veto: Ein White Paper für Investoren",
                excerpt: "Der Oberste Gerichtshof hat die Landschaft verändert. Wir analysieren die rechtlichen Feinheiten der 3/5-Mehrheit und wie man eine Eigentümergemeinschaft forensisch prüft.",
                tags: ["Ferienvermietung", "Recht", "Investitionssicherheit"],
                body: `
## Zusammenfassung: Die Regeln haben sich geändert
Jahrelang war das Gesetz (LPH) zweideutig. Investoren dachten: "Was nicht verboten ist, ist erlaubt."
Das ist vorbei. Das Oberste Gericht hat bestätigt: **Eigentümergemeinschaften können Ferienvermietung mit einer doppelten Mehrheit von 3/5 verbieten.**

## 1. Die Mechanik der 3/5-Abstimmung
Es ist eine **"Doppelte Mehrheit"**:
1.  **Köpfe:** 3/5 der Eigentümer.
2.  **Quoten:** Eigentümer, die 3/5 der Miteigentumsanteile (*cuotas*) repräsentieren.

**Die Gefahr der "Abwesenden":**
Eigentümer, die nicht zur Versammlung kommen, werden automatisch als **"JA"-Stimmen** (für die Mehrheit) gezählt, wenn sie nicht innerhalb von 30 Tagen nach Erhalt des Protokolls widersprechen. Das macht Verbote sehr einfach durchsetzbar.

## 2. Satzung vs. Hausordnung (Internes Reglement)
Der kritische Unterschied:
*   **Satzung (*Estatutos*):** Änderungen erfordern normalerweise **Einstimmigkeit**. Die 3/5-Regel ist eine spezielle Ausnahme, um wirtschaftliche Aktivitäten zu verbieten.
*   **Hausordnung (*Normas de Régimen Interno*):** Regelt das Zusammenleben (Poolzeiten, Lärm). Erfordert nur eine **einfache Mehrheit (1/2)**.
    *   *Das Risiko:* Die Gemeinschaft kann die Vermietung vielleicht nicht verbieten (3/5 fehlen), aber sie kann sie über die Hausordnung *unattraktiv machen* (z.B. "Keine Koffer im Aufzug", "Kein Check-in nach 22 Uhr").

## 3. Das "Stille Veto": Warum das Grundbuch lügt
Ein häufiger Fehler: Man prüft das Grundbuch (*Registro*), sieht kein Verbot, und kauft.
Später erfahren Sie: "Wir haben das vor 4 Monaten verboten."

**Warum stand es nicht im Register?**
Die Eintragung kostet Zeit und Geld. Der Beschluss ist aber **ab dem Moment der Abstimmung gültig**. Sie erben dieses Verbot, auch wenn es nirgendwo offiziell eingetragen ist.

## 4. Die "Forensische Prüfung" von Tesela
Wir vertrauen keinen mündlichen Zusagen:
1.  **Das Negativ-Zertifikat:** Wir verlangen eine Bescheinigung des Verwalters, dass es *keine beschlossenen Einschränkungen* gibt.
2.  **Der Feindseligkeits-Index:** Wir lesen die Protokolle der letzten 3 Jahre. Gibt es Lärmbeschwerden? Polizeieinsätze? Ein feindseliges Gebäude ist ein schlechtes Investment.
3.  **Die kommunale Ebene:** In Valencia gibt es "Gesättigte Zonen" (ZAS). Selbst wenn die Nachbarn "Ja" sagen, kann die Stadt "Nein" sagen.

> **Fazit:** Eine Touristenwohnung zu kaufen ist heute ein rechtliches Minenfeld. Ohne Prüfung der Protokolle ist es Glücksspiel.
                `
            },
            nl: {
                title: "Het Airbnb-Veto: White Paper voor Investeerders",
                excerpt: "Het Hooggerechtshof heeft de regels veranderd. Wij analyseren de juridische nuances van de 3/5 meerderheid en hoe u een gebouw forensisch audit.",
                tags: ["Vakantieverhuur", "Wetgeving", "Investeren"],
                body: `
## Executive Summary: De regels zijn veranderd
Jarenlang was de wet (*Ley de Propiedad Horizontal*) vaag. Investeerders dachten: "Wat niet verboden is, mag."
Dat is voorbij. De Hoge Raad heeft bevestigd: **Verenigingen van Eigenaren (VvE) kunnen vakantieverhuur verbieden met een dubbele meerderheid van 3/5.**

## 1. De mechaniek van de 3/5 stemming
Het vereist een **"Dubbele Meerderheid"**:
1.  **Aantal:** 3/5 van de eigenaars.
2.  **Quota:** Eigenaars die 3/5 van de aandelen (*cuotas*) vertegenwoordigen.

**Het gevaar van de "Afwezige Stem":**
Eigenaars die niet op de vergadering zijn, worden geteld als **"JA"-stemmen** (steunend voor de meerderheid) als ze niet binnen 30 dagen bezwaar maken. Dit maakt het makkelijk om een verbod erdoor te drukken.

## 2. Statuten vs. Huishoudelijk Reglement
Het kritieke onderscheid:
*   **Statuten (*Estatutos*):** Wijziging vereist normaal **unanimiteit**. De 3/5 regel is een uitzondering om economische activiteiten te verbieden.
*   **Huishoudelijk Reglement (*Normas Internas*):** Regelt leefregels. Vereist slechts een **simpele meerderheid (1/2)**.
    *   *Het Risico:* De VvE kan u misschien niet verbieden (geen 3/5), maar kan via het reglement uw bedrijf *wurgen* (bijv. "Geen koffers in de lift", "Zwembad dicht voor gasten").

## 3. Het "Stille Veto": Waarom het Register niet genoeg is
Een veelgemaakte fout in Valencia: U checkt het Eigendomsregister, ziet geen verbod, en koopt.
Later hoort u: "We hebben verhuur 4 maanden geleden verboden."

**Waarom stond het niet in het register?**
Registratie kost geld en tijd. Het besluit is **rechtsgeldig vanaf het moment van stemmen**. U erft dit verbod als koper, ook al staat het nog nergens geregistreerd.

## 4. De "Tesela Forensische Audit"
Wij vertrouwen geen makelaarspraatjes:
1.  **Het "Geen-Bezwaar" Certificaat:** Wij eisen een stuk van de administrator dat er *geen beperkende besluiten* zijn genomen.
2.  **De Vijandigheids-Index:** Wij lezen de notulen van de laatste 3 jaar. Zijn er klachten? Politiebezoek? Een vijandig gebouw is een slechte investering.
3.  **De Gemeentelijke Laag:** Valencia heeft "Verzadigde Zones" (ZAS). Een "Ja" van de buren is waardeloos als de gemeente "Nee" zegt.

> **Conclusie:** In 2024 is een toeristisch pand kopen een juridisch mijnenveld. Zonder grondige audit gokt u met uw geld.
                `
            },
            sv: {
                title: "Airbnb-vetot: Ett White Paper för Investerare",
                excerpt: "Högsta domstolen har ändrat spelplanen. Vi analyserar de juridiska nyanserna av 3/5-majoriteten och hur du granskar en förening som en rättsmedicinsk revisor.",
                tags: ["Uthyrning", "Föreningsrätt", "Investering"],
                body: `
## Sammanfattning: Reglerna har ändrats
I ett decennium var lagen oklar. Investerare trodde att "det som inte är förbjudet är tillåtet".
Detta är över. Högsta domstolen har bekräftat: **Bostadsrättsföreningar kan förbjuda semesteruthyrning med en dubbel majoritet på 3/5.**

## 1. Mekaniken bakom 3/5-röstningen
Det krävs en **"Dubbel Majoritet"**:
1.  **Antal:** 3/5 av ägarna.
2.  **Andelar:** Ägare som representerar 3/5 av andelstalen (*cuotas*).

**Faran med "Frånvarande Röst":**
Ägare som inte går på mötet räknas som **"JA"-röster** (stödjer majoritetsbeslutet) om de inte formellt protesterar inom 30 dagar. Detta gör det enkelt för en aktiv styrelse att driva igenom ett förbud.

## 2. Stadgar vs. Ordningsregler
Många blandar ihop dessa:
*   **Stadgar (*Estatutos*):** Kräver normalt **enhällighet** för att ändras. 3/5-regeln är ett undantag specifikt för att stoppa ekonomisk verksamhet.
*   **Ordningsregler (*Normas Internas*):** Reglerar trivseln. Kräver bara **enkel majoritet (1/2)**.
    *   *Risken:* Föreningen kanske inte kan förbjuda dig (saknar 3/5), men de kan via ordningsreglerna göra det *omöjligt* att driva verksamheten (t.ex. "Inga incheckningar efter 22:00", "Förbud mot väskor i hissen").

## 3. Det "Tysta Vetot": Varför Fastighetsregistret inte räcker
Ett vanligt misstag: Du kollar Fastighetsregistret, ser inget förbud, och köper.
Två veckor senare säger ordföranden: "Vi röstade för förbud för 4 månader sedan."

**Varför syntes det inte?**
Att registrera stadgeändringar tar tid och kostar pengar. Beslutet är **bindande från mötesdagen**, även om det inte registrerats än. Du "ärver" detta förbud.

## 4. "Tesela Forensisk Audit"
Vi litar inte på säljaren. Vi gör en djupanalys:
1.  **Intyg om Inga Beslut:** Vi kräver ett intyg från administratören att *inga begränsande beslut fattats*.
2.  **Fientlighets-index:** Vi läser protokoll från 3 år tillbaka. Finns det klagomål? Polisutryckningar? Ett fientligt hus kommer förr eller senare att stoppa dig.
3.  **Kommunala Zoner:** Valencia har "Mättade Zoner" (ZAS). Ett "Ja" från grannarna hjälper inte om kommunen säger "Nej".

> **Slutsats:** Att köpa en Airbnb-lägenhet 2024 är ett juridiskt minfält. Utan att granska protokollen spelar du rysk roulette med din investering.
                `
            },
            no: {
                title: "Airbnb-vetoet: Et White Paper for Investorer",
                excerpt: "Høyesterett har endret landskapet fundamentalt. Vi analyserer de juridiske nyansene i 3/5-flertallet og hvordan du reviderer et bygg som en etterforsker.",
                tags: ["Utleie", "Sameierett", "Investering"],
                body: `
## Sammendrag: Spillereglene er endret
I ti år var loven (LPH) tvetydig.
Nå er det slutt på tvilen. Høyesterett har slått fast: **Sameier kan forby ferieutleie med et dobbelt flertall på 3/5.**

## 1. Mekanikken bak 3/5-avstemningen
Det kreves et **"Dobbelt Flertall"**:
1.  **Antall:** 3/5 av eierne.
2.  **Andeler:** Eiere som representerer 3/5 av eierbrøken (*cuotas*).

**Faren ved "Fraværende Stemmer":**
Eiere som ikke møter på generalforsamlingen telles som **"JA"-stemmer** (støtter flertallet) hvis de ikke protesterer innen 30 dager. Dette gjør det lett å vedta forbud.

## 2. Vedtekter vs. Husordensregler
Det kritiske skillet:
*   **Vedtekter (*Estatutos*):** Krever normalt **enstemmighet**. 3/5-regelen er et unntak for å kunne forby næringsvirksomhet.
*   **Husordensregler (*Normas Internas*):** Regler for sameiet. Krever kun **simpelt flertall (1/2)**.
    *   *Risikoen:* Sameiet kan kanskje ikke forby utleie (mangler 3/5), men de kan bruke husordensreglene til å lage *kvalme* (f.eks. "Ingen bruk av heis med kofferter", "Stilletid fra kl 20:00").

## 3. Det "Stille Vetoet": Hvorfor Grunnboken lyver
En klassisk feil: Du sjekker Grunnboken, ser ingen forbud, og kjøper.
Så får du beskjeden: "Vi vedtok forbud for 4 måneder siden."

**Hvorfor sto det ikke i boken?**
Tinglysing tar tid. Vedtaket er **gyldig fra møtetidspunktet**. Du arver dette forbudet som ny eier.

## 4. "Tesela Forenisk Revisjon"
Vi stoler ikke på muntlige løfter:
1.  **Sertifikat på Ingen Vedtak:** Vi krever bekreftelse fra forretningsfører på at ingen begrensninger er vedtatt.
2.  **Fiendtlighets-indeks:** Vi leser referater for 3 år tilbake. Er det mye bråk? Politi? Et fiendtlig bygg er en dårlig investering.
3.  **Kommunal Sone:** Valencia har "Mettede Soner" (ZAS). Det hjelper ikke at naboene sier ja, hvis kommunen sier nei.

> **Konklusjon:** Å kjøpe utleiebolig i 2024 er risikosport uten juridisk bistand. Sjekk alltid protokollene.
                `
            },
            da: {
                title: "Airbnb-vetoet: Et White Paper for Investorer",
                excerpt: "Højesteret har ændret landskabet. Vi analyserer de juridiske nuancer i 3/5-flertallet, og hvordan du reviderer en bygning som en retsmediciner.",
                tags: ["Udlejning", "Ejerforeningslov", "Investering"],
                body: `
## Resumé: Reglerne er ændret
I et årti var loven uklar.
Nu har Højesteret talt: **Ejerforeninger kan forbyde ferieudlejning med et dobbelt flertal på 3/5.**

## 1. Mekanikken bag 3/5-afstemningen
Det kræver et **"Dobbelt Flertal"**:
1.  **Antal:** 3/5 af ejerne.
2.  **Kvoter:** Ejere, der repræsenterer 3/5 af fællesudgifterne (*cuotas*).

**Faren ved "Fraværende Stemmer":**
Ejere, der bliver væk fra generalforsamlingen, tælles som **"JA"-stemmer** (støtter flertallet), hvis de ikke gør indsigelse inden 30 dage. Det gør det nemt at få et forbud igennem.

## 2. Vedtægter vs. Husorden
Den vigtige forskel:
*   **Vedtægter (*Estatutos*):** Kræver normalt **enstemmighed**. 3/5-reglen er en særlig undtagelse for at forbyde erhverv.
*   **Husorden (*Normas Internas*):** Regler for dagligdagen. Kræver kun **simpelt flertal (1/2)**.
    *   *Risikoen:* Foreningen kan måske ikke forbyde dig (mangler 3/5), men de kan via husordenen gøre livet *surt* (fx "Ingen check-in sent", "Ingen bagage i elevatoren").

## 3. Det "Stille Veto": Hvorfor Tinglysningen ikke er nok
En klassisk fejl: Du tjekker Tinglysningen (*Registro*), ser intet forbud, og køber.
Senere siger formanden: "Vi stemte for et forbud for 4 måneder siden."

**Hvorfor stod det ikke i registret?**
Fordi det tager tid og koster penge at registrere. Aftalen er **juridisk bindende fra mødedatoen**. Du arver forbuddet.

## 4. "Tesela Forensisk Audit"
Vi stoler ikke på sælger:
1.  **Certifikat:** Vi kræver dokumentation fra administrator om, at ingen begrænsninger er vedtaget.
2.  **Fjendtligheds-indeks:** Vi læser 3 års referater. Er der klager? Politi? Et fjendtligt hus vil før eller siden stoppe dig.
3.  **Kommuneplan:** Valencia har "Mættede Zoner" (ZAS).

> **Konklusion:** I 2024 er køb af feriebolig et juridisk miniefelt. Uden en audit af referaterne spiller du hasard.
                `
            },
            pl: {
                title: "Weto Airbnb: Biała Księga dla Inwestorów",
                excerpt: "Sąd Najwyższy zmienił zasady gry. Analizujemy niuanse prawne większości 3/5 i różnicę między Statutem a Regulaminem.",
                tags: ["Airbnb", "Prawo Wspólnot", "Inwestycje"],
                body: `
## Podsumowanie: Zmiana Zasad
Przez dekadę prawo było niejasne.
Dwa wyroki Sądu Najwyższego zakończyły tę erę. **Wspólnoty Mieszkaniowe mają teraz wyraźne prawo zakazać wynajmu wakacyjnego większością 3/5.**

## 1. Mechanika Głosu 3/5
Wymagana jest **"Podwójna Większość"**:
1.  **Liczba:** 3/5 ogółu właścicieli.
2.  **Udziały:** Właściciele reprezentujący 3/5 udziałów w nieruchomości (*cuotas*).

**Niebezpieczeństwo "Głosu Nieobecnego":**
Co kluczowe, właściciele nieobecni na zebraniu są liczeni jako głosy **"ZA"** (popierające większość), jeśli nie zgłoszą sprzeciwu w ciągu 30 dni. To sprawia, że bardzo łatwo jest przegłosować zakaz.

## 2. Statut a Regulamin Domowy
Większość inwestorów myli te pojęcia:
*   **Statut (*Estatutos*):** Zmiana wymaga zwykle **jednomyślności**. Reguła 3/5 to wyjątek pozwalający zablokować działalność gospodarczą.
*   **Regulamin (*Normas Internas*):** Reguluje życie codzienne (basen, hałas). Wymaga tylko **zwykłej większości (1/2)**.
    *   *Ryzyko:* Wspólnota może nie być w stanie Cię zablokować (brak 3/5), ale może uchwalić regulamin, który *utrudni życie* (np. "zakaz walizek w windzie", "cisza nocna od 20:00").

## 3. "Ciche Weto": Dlaczego Księgi Wieczyste Kłamią
Częsta tragedia: Inwestor sprawdza Księgi (*Registro*), widzi brak zakazów i kupuje.
Dwa tygodnie później dowiaduje się: "Głosowaliśmy za zakazem 4 miesiące temu".

**Dlaczego nie było tego w Księgach?**
Rejestracja kosztuje i trwa. Uchwała jest **wązna od momentu głosowania**. Jako nowy właściciel dziedziczysz ten zakaz.

## 4. "Audyt Śledczy Tesela"
Nie ufamy zapewnieniom ustnym:
1.  **Certyfikat Braku Uchwał:** Żądamy pisma od Administratora, że nie przyjęto uchwał ograniczających.
2.  **Indeks Wrogości:** Analizujemy protokoły z 3 lat. Czy są skargi na hałas? Wezwania policji? Wrogi budynek to zła inwestycja.
3.  **Warstwa Miejska:** Walencja ma "Strefy Nasycone" (ZAS). Zgoda sąsiadów nic nie da, jeśli miasto zablokowało licencje na danej ulicy.

> **Wniosek:** W 2024 roku zakup mieszkania pod wynajem to pole minowe. Bez audytu protokołów ryzykujesz utratę kapitału.
                `
            },
            fr: {
                title: "Le Veto Airbnb : Livre Blanc pour Investisseurs",
                excerpt: "La Cour Suprême a changé le paysage. Nous analysons les nuances juridiques de la majorité des 3/5 et comment auditer une copropriété.",
                tags: ["Airbnb", "Droit Immobilier", "Investissement"],
                body: `
## Résumé Exécutif : Les Règles ont Changé
Pendant une décennie, la loi était ambiguë.
La Cour Suprême a tranché : **Les Copropriétés ont désormais le pouvoir explicite d'interdire la location saisonnière avec une double majorité de 3/5.**

## 1. La Mécanique du Vote de 3/5
Il ne suffit pas de lever la main. Il faut une **"Double Majorité"** :
1.  **Propriétaires :** 3/5 du nombre total.
2.  **Quotes-parts :** Propriétaires représentant 3/5 des quotes-parts (*cuotas*).

**Le Danger du "Vote Absent" :**
Crucial : Les propriétaires absents sont comptés comme des votes **"POUR"** la majorité s'ils ne s'opposent pas formellement dans les 30 jours. Cela facilite grandement l'adoption d'interdictions.

## 2. Statuts vs Règlement Intérieur
La distinction critique :
*   **Statuts (*Estatutos*) :** Les changer exige normalement l'**unanimité**. La règle des 3/5 est une exception pour interdire les activités économiques.
*   **Règlement Intérieur (*Normas Internas*) :** Régule la vie commune (piscine, bruit). Ne nécessite qu'une **majorité simple (1/2)**.
    *   *Le Risque :* La copropriété peut ne pas vous interdire (pas de 3/5), mais elle peut utiliser le règlement pour vous *asphyxier* (ex: "pas de valises dans l'ascenseur", "couvre-feu à 22h").

## 3. Le "Veto Silencieux" : Pourquoi le Registre Ment
Une tragédie courante : L'investisseur vérifie le Registre, ne voit aucune interdiction, et achète.
Plus tard, on lui dit : "Nous avons voté l'interdiction il y a 4 mois."

**Pourquoi n'était-ce pas inscrit ?**
L'inscription prend du temps et coûte de l'argent. L'accord est **valable dès le vote**. Vous héritez de cette interdiction.

## 4. "L'Audit Judiciaire Tesela"
Nous ne croyons pas sur parole :
1.  **Certificat de Non-Accord :** Nous exigeons un document de l'Administrateur attestant l'absence de restrictions votées.
2.  **Indice d'Hostilité :** Nous lisons 3 ans de PV. Y a-t-il des plaintes ? La police ? Un immeuble hostile est un mauvais investissement.
3.  **La Mairie :** Valence a des "Zones Saturées" (ZAS). Un "Oui" des voisins ne sert à rien si la Mairie dit "Non".

> **Conclusion :** En 2024, acheter pour louer est un champ de mines. Sans audit des PV, vous jouez à la roulette russe.
                `
            },
            it: {
                title: "Il Veto Airbnb: Un White Paper per Investitori",
                excerpt: "La Corte Suprema ha cambiato le regole. Analizziamo la maggioranza dei 3/5 e come auditare un condominio come un esperto forense.",
                tags: ["Airbnb", "Diritto Condominiale", "Investimenti"],
                body: `
## Sintesi: Le Regole sono Cambiate
Per un decennio la legge è stata ambigua.
Ora la Corte Suprema ha confermato: **I condomini possono vietare gli affitti turistici con una doppia maggioranza dei 3/5.**

## 1. La Meccanica del Voto dei 3/5
Serve una **"Doppia Maggioranza"**:
1.  **Teste:** 3/5 dei proprietari totali.
2.  **Quote:** Proprietari che rappresentano i 3/5 dei millesimi (*cuotas*).

**Il Pericolo del "Voto Assente":**
I proprietari che non vanno in assemblea sono contati come voti **"A FAVORE"** della maggioranza se non si oppongono entro 30 giorni. Questo rende facile approvare divieti.

## 2. Statuto vs. Regolamento Interno
La distinzione critica:
*   **Statuto (*Estatutos*):** Modificarlo richiede l'**unanimità**. La regola dei 3/5 è un'eccezione speciale.
*   **Regolamento Interno (*Normas Internas*):** Regola la convivenza. Richiede solo la **maggioranza semplice (1/2)**.
    *   *Rischio:* Il condominio può usare il regolamento per *soffocare* la tua attività (es. "vietato l'ascensore con valigie", "check-in vietati dopo le 22").

## 3. Il "Veto Silenzioso": Perché il Registro Mente
Un errore comune: Controlli il Registro, è pulito, compri.
Poi scopri: "Abbiamo vietato gli affitti 4 mesi fa."

**Perché non c'era?**
Registrare costa tempo e denaro. La delibera è **valida dal momento del voto**. Tu erediti il divieto.

## 4. "Audit Forense Tesela"
Non ci fidiamo delle parole:
1.  **Certificato dell'Amministratore:** Esigiamo un documento che attesti l'assenza di delibere restrittive.
2.  **Indice di Ostilità:** Leggiamo i verbali degli ultimi 3 anni. Ci sono liti? Polizia? Un condominio ostile ti bloccherà.
3.  **Il Comune:** Valencia ha "Zone sature" (ZAS). Il "Sì" dei vicini è inutile se il Comune dice "No".

> **Conclusione:** Nel 2024, comprare per affittare è pericoloso senza un audit legale dei verbali.
                `
            },
            ru: {
                title: "Вето Airbnb: Белая книга инвестора",
                excerpt: "Верховный суд изменил правила. Мы анализируем нюансы большинства 3/5 и то, как проводить аудит здания.",
                tags: ["Airbnb", "Законы о собственности", "Инвестиции"],
                body: `
## Введение: Правила изменились
Десятилетие закон был двусмысленным.
Но Верховный суд постановил: **Сообщества собственников могут запретить туристическую аренду двойным большинством в 3/5.**

## 1. Механика голосования 3/5
Требуется **"Двойное большинство"**:
1.  **Головы:** 3/5 от общего числа собственников.
2.  **Квоты:** Собственники, представляющие 3/5 долей участия (*cuotas*).

**Опасность "Отсутствующего голоса":**
Собственники, не пришедшие на собрание, считаются голосовавшими **"ЗА"** большинство, если они не подадут официальный протест в течение 30 дней. Это позволяет легко принимать запреты.

## 2. Устав против Внутренних правил
Важное различие:
*   **Устав (*Estatutos*):** Изменение требует **единогласия**. Правило 3/5 — это исключение для запрета бизнеса.
*   **Внутренние правила (*Normas Internas*):** Регулируют быт (бассейн, шум). Требуют лишь **простого большинства (1/2)**.
    *   *Риск:* Соседи могут не запретить бизнес (нет 3/5), но могут *задушить* его правилами (например, "запрет на лифт с чемоданами", "тишина с 22:00").

## 3. "Тихое вето": Почему Реестр врет
Частая трагедия: Инвестор проверяет Реестр (*Registro*), там чисто, он покупает.
Потом узнает: "Мы проголосовали за запрет 4 месяца назад".

**Почему этого не было в Реестре?**
Регистрация стоит денег и времени. Решение **законно с момента голосования**. Вы наследуете этот запрет.

## 4. "Судебный Аудит Tesela"
Мы не верим на слово:
1.  **Сертификат:** Требуем справку от Администратора, что запретов не принималось.
2.  **Индекс враждебности:** Читаем протоколы за 3 года. Есть жалобы? Полиция? Враждебный дом — плохая инвестиция.
3.  **Муниципалитет:** В Валенсии есть "Насыщенные зоны" (ZAS). "Да" от соседей бесполезно, если Мэрия говорит "Нет".

> **Вывод:** В 2024 году покупка под Airbnb — это юридическое минное поле. Без аудита протоколов вы рискуете всем.
                `
            }
        }
    },

    // ARTICLE 3: COSMETIC FLIP
    {
        slug: "cosmetic-flip-scam",
        date: "2024-02-05",
        author: "Tesela Audit Team",
        image: "/images/blog/cosmetic-flip-v3.jpg",
        category: "Scam Prevention",
        content: {
            en: {
                title: "Lipstick on a Pig: The White Paper on 'Cosmetic Flips'",
                excerpt: "Fresh paint over mold, cheap laminate over broken tiles. Don't pay premium prices for a superficial renovation. We provide a tactical guide to auditing a flipped apartment, including repair cost estimates.",
                tags: ["Scam Prevention", "Renovation Quality", "Technical Audit"],
                body: `
## The Economics of a "Quick Flip"
In the current Valencia market, "flippers" aim for a €40,000 margin.
To achieve this arithmetic, they spend €15,000 on things you **see** (IKEA kitchen, painting, laminate) and €0 on things you **don't** (electricity, plumbing, insulation).
You are paying a "New Build" price for a 50-year-old infrastructure in a mask.

## 1. The "Cost of Ignorance" Table
If you buy a cosmetic flip, you inherit the hidden debts of the building. Here is what it costs to fix what they hid:

| Hidden Defect | The Telltale Sign | Real Repair Cost |
| :--- | :--- | :--- |
| **Old Wiring** | Panel with only 2-3 fuses; no yellow/green ground wires in plugs. | **€4,500 - €6,000** |
| **Old Plumbing** | Pressure drops when flushing toilet; water takes >30s to get hot. | **€3,500 - €5,000** |
| **Fake Flooring** | Floor sounds "hollow" or sinks when stepped on (no leveling compound). | **€2,500 + Material** |
| **Zero Insulation** | Walls feel cold to touch; condensation on windows in winter. | **€3,000 - €5,000** |

## 2. Infrastructure: The "Pressure Stress Test"
Visuals lie. Physics doesn't.
*   **The Test:** Go to the furthest bathroom. Turn on the shower to max heat and pressure. Simultaneously, flush the toilet and turn on the sink tap.
*   **The Result:** If the flow reduces to a trickle or the temperature shocks you, the "renovated" flat still has 12mm copper (or iron) pipes. A proper renovation uses PEX manifolds (*colectores*) that guarantee constant pressure.

## 3. The "Lighter Test" for Windows
Double glazing (*Climalit*) is not enough. Aluminum transmits cold.
*   **The Test:** Hold a lighter flame near the glass reflection at night.
    *   **Bad:** If you see 4 reflections of the same color.
    *   **Good:** If one reflection is reddish/violet. This indicates a "Low-E" (Low Emissivity) coating.
*   **The Frame:** Touch the aluminum frame. If it is very cold, it lacks "Thermal Bridge Rupture" (RPT). You will have condensation and mold issues.

## 4. The Psychology of "Home Staging"
Flippers use psychological tricks to distract you:
1.  **Miniature Furniture:** That bed looks double, but it's 135cm wide (too small for couples). The sofa is "loveseat" size.
2.  **Sensory Masking:** They turn on the AC/Heating 2 hours before you arrive so you don't feel the drafts. They play "Cafe del Mar" music to hide street noise/neighbors.
3.  **The "Golden Hour":** They only schedule viewings when the sun hits the balcony, hiding the fact it's dark 20 hours a day.

> **Tesela Protocol:** We turn off the music. We open the windows. We look under the sink. We audit the reality, not the dream.
                `
            },
            es: {
                title: "El 'Lavado de Cara': White Paper sobre Reformas Superficiales",
                excerpt: "¿Pintura fresca o saneamiento real? No pagues precio de obra nueva por una reforma cosmética. Incluimos tabla de costes ocultos y pruebas técnicas forenses.",
                tags: ["Estafa", "Calidad Reforma", "Auditoría Técnica"],
                body: `
## La Economía del "Pase" (Flip)
En el mercado actual de Valencia, un "flipper" busca un margen de 40.000€.
Para que los números cuadren, gastan 15.000€ en lo que **ves** (cocina IKEA, pintura, suelo) y 0€ en lo que **no ves** (electricidad, fontanería, aislamiento).
Estás pagando precio de "Obra Nueva" por una infraestructura de 1970 maquillada.

## 1. La Tabla del "Coste de la Ignorancia"
Si compras un lavado de cara, heredas las deudas técnicas. Esto es lo que cuesta arreglar lo que escondieron:

| Defecto Oculto | La Señal de Alarma | Coste Real Reparación |
| :--- | :--- | :--- |
| **Electricidad Vieja** | Cuadro con solo 2-3 térmicos; enchufes sin toma de tierra (patillas metálicas). | **4.500€ - 6.000€** |
| **Fontanería Vieja** | Caída de presión al tirar de la cadena; agua tarda >30s en salir caliente. | **3.500€ - 5.000€** |
| **Suelo Flotante Mal Puesto** | Suena a "hueco" al pisar; se hunde (falta pasta niveladora). | **2.500€ + Material** |
| **Cero Aislamiento** | Paredes frías al tacto; condensación en ventanas por la mañana. | **3.000€ - 5.000€** |

## 2. Infraestructura: Prueba de Estrés
La estética engaña. La física no.
*   **El Test:** Ve al baño más lejano. Abre la ducha al máximo (caliente). A la vez, tira de la cadena y abre el grifo del lavabo.
*   **El Resultado:** Si el chorro se convierte en un hilo o te quemas/hielas, el piso "reformado" sigue teniendo tuberías de cobre de 12mm (o hierro). Una reforma real usa colectores PEX que garantizan presión constante.

## 3. La "Prueba del Mechero" (Ventanas)
El doble cristal (*Climalit*) no es suficiente. El aluminio transmite el frío.
*   **El Test:** Acerca la llama de un mechero al cristal de noche.
    *   **Malo:** Ves 4 reflejos del mismo color.
    *   **Bueno:** Un reflejo es rojizo/violeta. Indica tratamiento "Bajo Emisivo" (Low-E).
*   **El Marco:** Toca el aluminio. Si está muy frío, no tiene "Rotura de Puente Térmico" (RPT). Tendrás "lloros" (condensación) y moho.

## 4. Psicología del "Home Staging"
Los flippers usan trucos para distraerte:
1.  **Muebles Miniatura:** Esa cama parece doble pero es de 135cm. El sofá es de dos plazas escasas.
2.  **Enmascaramiento Sensorial:** Ponen la calefacción a tope 2 horas antes de que llegues. Ponen música suave para tapar los gritos de los vecinos.
3.  **La "Hora Dorada":** Solo enseñan el piso cuando entra el rayo de sol, ocultando que es oscuro el resto del día.

> **Protocolo Tesela:** Apagamos la música. Abrimos las ventanas. Miramos debajo del fregadero. Auditamos la realidad, no el sueño.
                `
            },
            de: {
                title: "Der 'Kosmetische Flip': Ein White Paper",
                excerpt: "Frische Farbe über Schimmel. Zahlen Sie keinen Neupreis für eine oberflächliche Renovierung. Unser technischer Leitfaden mit Kostenschätzungen.",
                tags: ["Betrugsprävention", "Bauqualität", "Technik-Audit"],
                body: `
## Die Ökonomie des schnellen Geldes
Flipper in Valencia wollen 40.000€ Gewinn machen.
Dafür geben sie 15.000€ für das **Sichtbare** aus und 0€ für das **Unsichtbare** (Elektrik, Rohre).

## 1. Was Sie später zahlen (Tabelle)
Wenn Sie blind kaufen, zahlen Sie später doppelt:

| Versteckter Mangel | Das Warnsignal | Reparaturkosten |
| :--- | :--- | :--- |
| **Alte Elektrik** | Sicherungskasten mit nur 2-3 Schaltern; keine Erdung. | **4.500€ - 6.000€** |
| **Alte Rohre** | Druckabfall beim Spülen; Wasser braucht lange bis es warm ist. | **3.500€ - 5.000€** |
| **Schlechter Boden** | Klingt hohl; gibt beim Gehen nach (keine Ausgleichsmasse). | **2.500€ + Material** |
| **Keine Dämmung** | Kalte Wände; Kondenswasser am Fenster. | **3.000€ - 5.000€** |

## 2. Der Stress-Test
*   **Der Test:** Dusche voll aufdrehen. Gleichzeitig Klospülung betätigen.
*   **Das Ergebnis:** Wenn der Druck weg ist, sind die Rohre alt. Eine echte Sanierung nutzt moderne Verteiler.

## 3. Der Feuerzeug-Test (Fenster)
Doppelverglasung reicht nicht.
*   **Der Test:** Halten Sie ein Feuerzeug an das Glas.
    *   **Schlecht:** 4 Reflexionen gleicher Farbe.
    *   **Gut:** Eine Reflexion ist rötlich (Low-E Beschichtung).
*   **Der Rahmen:** Fühlen Sie das Aluminium. Ist es eiskalt? Dann fehlt die thermische Trennung. Schimmelgefahr!

## 4. Home Staging Psychologie
1.  **Zwergenmöbel:** Das Bett ist nur 135cm breit, nicht 160cm.
2.  **Klimatisierung:** Die Heizung läuft seit Stunden, um die fehlende Dämmung zu kaschieren.
3.  **Musik:** Übertüncht den Straßenlärm.

> **Tesela Protokoll:** Wir schalten die Musik aus. Wir öffnen die Fenster. Wir schauen unter die Spüle.
                `
            },
            nl: {
                title: "De 'Cosmetische Flip': Een White Paper",
                excerpt: "Verse verf over schimmel. Betaal geen premium prijs voor prutswerk. Hier is onze technische audit gids inclusief herstelkosten.",
                tags: ["Oplichting", "Renovatie", "Inspectie"],
                body: `
## De Economie van de Snelle Winst
Flippers in Valencia willen €40.000 marge.
Ze besteden €15.000 aan wat u **ziet** en €0 aan wat u **niet ziet** (leidingen, elektra).

## 1. De Kosten van Onwetendheid
Wat kost het om hun prutswerk te herstellen?

| Verborgen Gebrek | Het Signaal | Kosten Herstel |
| :--- | :--- | :--- |
| **Oude Elektra** | Groepenkast met maar 2-3 knoppen; geen aarding. | **€4.500 - €6.000** |
| **Oude Leidingen** | Drukverlies bij doortrekken wc; water wordt traag warm. | **€3.500 - €5.000** |
| **Slechte Vloer** | Klinkt hol; veert mee (geen egalisatie). | **€2.500 + Materiaal** |
| **Geen Isolatie** | Koude muren; condens op ramen. | **€3.000 - €5.000** |

## 2. De Druk-Stress-Test
*   **De Test:** Douche vol aan. Trek wc door.
*   **Het Resultaat:** Valt de straal weg? Dan liggen er nog dunne koperen leidingen. Een echte renovatie heeft constante druk.

## 3. De Aansteker-Test (Ramen)
Dubbel glas is niet genoeg.
*   **De Test:** Houd een vlammetje bij het glas.
    *   **Slecht:** 4 reflecties van dezelfde kleur.
    *   **Goed:** Eén reflectie is paars/rood (HR++ coating).
*   **Het Kozijn:** Voel aan het aluminium. IJskoud? Geen thermische onderbreking. Kans op schimmel.

## 4. Home Staging Psychologie
1.  **Mini-meubels:** Dat bed is 135cm, te klein voor twee Nederlanders.
2.  **Klimaat:** De verwarming staat al uren aan om de tocht te maskeren.
3.  **Muziek:** Maskeert de luidruchtige buren.

> **Tesela Protocol:** Wij zetten de muziek uit. Wij openen de ramen. Wij checken de realiteit.
                `
            },
            sv: {
                title: "Sminkad Gris: Ett White Paper om Fuskrenoveringar",
                excerpt: "Nymålat över mögel. Betala inte nypris för yta. Här är vår tekniska revisionsguide med kostnadskalkyler för dolda fel.",
                tags: ["Bedrägeri", "Renovering", "Besiktning"],
                body: `
## Ekonomin bakom en "Quick Flip"
Flippers i Valencia vill tjäna 40 000 €.
De lägger pengar på IKEA-kök och färg, men noll på el och rör. Du betalar nypris för 50 år gammal teknik.

## 1. Kostnaden för Okunskap
Vad kostar det att fixa det de gömde?

| Dolt Fel | Varningssignalen | Reparationskostnad |
| :--- | :--- | :--- |
| **Gammal El** | Elskåp med få säkringar; ojordade uttag. | **4 500 € - 6 000 €** |
| **Gamla Rör** | Trycket faller när man spolar; långsam varmvatten. | **3 500 € - 5 000 €** |
| **Dåligt Golv** | Låter ihåligt; sviktar under foten. | **2 500 € + Material** |
| **Ingen Isolering** | Kalla väggar; kondens på fönster. | **3 000 € - 5 000 €** |

## 2. Stress-testet av Vatten
*   **Testet:** Sätt på duschen fullt. Spola toaletten.
*   **Resultatet:** Försvinner trycket? Då har du gamla, trånga rör. En riktig renovering garanterar jämnt tryck.

## 3. Tändare-testet (Fönster)
Dubbelglas räcker inte.
*   **Testet:** Håll en tändare mot glaset.
    *   **Dåligt:** 4 reflektioner i samma färg.
    *   **Bra:** En reflektion är rödaktig (Low-E glas).
*   **Karmen:** Känn på aluminiumet. Är det jättekallt? Då saknas bruten köldbrygga.

## 4. Home Staging Psykologi
1.  **Minimöbler:** Sängen är 135cm, inte en dubbelsäng.
2.  **Värme:** De värmer upp lägenheten i förväg för att dölja drag.
3.  **Musik:** Döljer ljudet från gatan.

> **Tesela Protokoll:** Vi stänger av musiken. Vi öppnar fönstren. Vi synar bluffen.
                `
            },
            no: {
                title: "Kosmetisk Oppussing: Et White Paper",
                excerpt: "Frisk maling over mugg. Ikke betal for overfladisk juks. Her er vår tekniske sjekkliste med kostnadsoverslag.",
                tags: ["Svindel", "Oppussing", "Teknisk Sjekk"],
                body: `
## Økonomien i en "Flip"
Investorer vil tjene 40.000€ raskt.
De bruker penger på det du **ser**, men ignorerer strøm og rør.

## 1. Hva koster det å fikse?
Hvis du kjøper katta i sekken:

| Skjult Feil | Tegnet | Kostnad |
| :--- | :--- | :--- |
| **Gammel Strøm** | Sikringsskap med 2-3 brytere; ingen jording. | **4.500€ - 6.000€** |
| **Gamle Rør** | Trykkfall ved spyling; tregt varmtvann. | **3.500€ - 5.000€** |
| **Dårlig Gulv** | Hul lyd; svikter når du går. | **2.500€ + Materialer** |
| **Ingen Isolasjon** | Kalde vegger; kondens. | **3.000€ - 5.000€** |

## 2. Vanntrykk-testen
*   **Testen:** Dusj på, trekk ned i do.
*   **Resultatet:** Mister du trykket? Gamle rør. Styr unna.

## 3. Lighter-testen (Vinduer)
*   **Testen:** Hold en lighter mot glasset.
    *   **Dårlig:** Alle refleksjoner er gule.
    *   **Bra:** En refleksjon er rød/lilla (Energiglass).
*   **Karmen:** Er rammen iskald? Da leder den kulde rett inn.

## 4. Staging-triks
1.  **Små møbler:** Senger og sofaer er mindre enn normalt for å få rommet til å virke større.
2.  **Temperatur:** Oppvarmet leilighet skjuler dårlig isolasjon.
3.  **Musikk:** Skjuler støy.

> **Tesela Protokoll:** Vi skrur av musikken og sjekker det tekniske.
                `
            },
            da: {
                title: "Kosmetisk Renovering: Et White Paper",
                excerpt: "Frisk maling over skimmel. Betal ikke overpris. Her er vores tekniske guide inklusiv omkostninger ved reparation.",
                tags: ["Svindel", "Renovering", "Inspektion"],
                body: `
## Økonomien i en "Flip"
Flippers sparer på det usynlige.

## 1. Prisen for uvidenhed
Hvad koster det at rette op?

| Skjult Fejl | Tegnet | Reparationspris |
| :--- | :--- | :--- |
| **Gammel El** | Få sikringer; ingen jord. | **4.500€ - 6.000€** |
| **Gamle Rør** | Trykfald; langsomt varmt vand. | **3.500€ - 5.000€** |
| **Dårligt Gulv** | Hul lyd; giver efter. | **2.500€ + Materialer** |
| **Ingen Isolering** | Kolde vægge; kondens. | **3.000€ - 5.000€** |

## 2. Stress-testen
*   **Testen:** Tænd bruser, skyl ud.
*   **Resultat:** Falder trykket? Gamle rør.

## 3. Lighter-testen (Vinduer)
*   **Testen:** Hold en lighter mod ruden.
    *   **Godt:** En refleksion er rødlig (Energiglas).
*   **Rammen:** Er den iskold? Så mangler den kuldebro-afbrydelse.

## 4. Staging-tricks
1.  **Små møbler:** Får rummet til at se større ud.
2.  **Varme:** Skjuler træk.
3.  **Musik:** Skjuler støj.

> **Tesela Protokol:** Vi tjekker virkeligheden, ikke facaden.
                `
            },
            pl: {
                title: "Prowizorka: Biała Księga Remontów",
                excerpt: "Nie płać za makijaż. Oto nasz przewodnik techniczny z kosztorysem napraw ukrytych wad.",
                tags: ["Oszustwo", "Jakość Remontu", "Audyt"],
                body: `
## Ekonomia "Szybkiego Flipu"
Flipperzy oszczędzają na tym, czego nie widzisz.

## 1. Tabela Kosztów Ignorancji
Ile kosztuje naprawa ich zaniedbań?

| Ukryta Wada | Sygnał | Koszt Naprawy |
| :--- | :--- | :--- |
| **Stara Elektryka** | Mało bezpieczników; brak uziemienia. | **4 500 € - 6 000 €** |
| **Stara Hydraulika** | Spadek ciśnienia; brak ciepłej wody. | **3 500 € - 5 000 €** |
| **Zła Podłoga** | Pusty dźwięk; ugina się. | **2 500 € + Materiał** |
| **Brak Izolacji** | Zimne ściany; kondensacja. | **3 000 € - 5 000 €** |

## 2. Test Stresu Wodnego
*   **Test:** Prysznic na maksa + spłuczka.
*   **Wynik:** Spadek ciśnienia = stare rury.

## 3. Test Zapalniczki (Okna)
*   **Test:** Przyłóż płomień do szyby.
    *   **Dobrze:** Jedno odbicie jest fioletowe/czerwone (powłoka niskoemisyjna).
*   **Rama:** Czy aluminium jest lodowate? Brak przekładki termicznej.

## 4. Psychologia Home Stagingu
1.  **Małe meble:** Łóżko 135cm zamiast 160cm.
2.  **Ogrzewanie:** Włączone wcześniej, by ukryć brak izolacji.
3.  **Muzyka:** Maskuje hałas.

> **Protokół Tesela:** Wyłączamy muzykę, sprawdzamy instalacje.
                `
            },
            fr: {
                title: "Rénovation de Facade : Livre Blanc",
                excerpt: "Peinture fraîche sur moisissure. Ne payez pas le prix fort pour du maquillage. Voici notre guide technique avec estimation des coûts.",
                tags: ["Arnaque", "Rénovation", "Inspection Technique"],
                body: `
## L'Économie du Flip
Pour marger, ils ignorent l'invisible (électricité, plomberie).

## 1. Le Coût de l'Ignorance
Ce que vous paierez plus tard :

| Défaut Caché | Le Signe | Coût Réparation |
| :--- | :--- | :--- |
| **Vieille Électricité** | Tableau à 2-3 fusibles ; pas de terre. | **4 500 € - 6 000 €** |
| **Vieille Plomberie** | Chute de pression ; eau chaude lente. | **3 500 € - 5 000 €** |
| **Mauvais Sol** | Son creux ; s'enfonce. | **2 500 € + Matériaux** |
| **Pas d'Isolation** | Murs froids ; condensation. | **3 000 € - 5 000 €** |

## 2. Le Stress Test Hydraulique
*   **Le Test :** Douche à fond + chasse d'eau.
*   **Résultat :** Chute de pression = vieux tuyaux.

## 3. Le Test du Briquet (Fenêtres)
*   **Le Test :** Flamme près de la vitre.
    *   **Bon :** Un reflet est rouge/violet (Traitement Low-E).
*   **Le Cadre :** Aluminium froid ? Pas de rupture de pont thermique.

## 4. Psychologie du Staging
1.  **Meubles Miniatures :** Pour agrandir la pièce.
2.  **Chauffage :** Pour masquer les courants d'air.
3.  **Musique :** Pour masquer la rue.

> **Protocole Tesela :** Nous éteignons la musique et auditons la réalité.
                `
            },
            it: {
                title: "Ristrutturazione Cosmetica: White Paper",
                excerpt: "Vernice su muffa. Ecco quanto costa riparare i difetti nascosti dai 'flippers'. Guida tecnica.",
                tags: ["Truffa", "Ristrutturazione", "Ispezione"],
                body: `
## L'Economia del Flip
Risparmiano su ciò che non vedi.

## 1. Il Costo dell'Ignoranza
Cosa dovrai spendere dopo?

| Difetto Nascosto | Il Segnale | Costo Riparazione |
| :--- | :--- | :--- |
| **Elettricità Vecchia** | Quadro con pochi interruttori; no terra. | **4.500€ - 6.000€** |
| **Tubature Vecchie** | Calo di pressione; acqua fredda. | **3.500€ - 5.000€** |
| **Pavimento** | Suona vuoto; flette. | **2.500€ + Materiali** |
| **No Isolamento** | Pareti fredde; condensa. | **3.000€ - 5.000€** |

## 2. Stress Test Idraulico
*   **Test:** Doccia al massimo + sciacquone.
*   **Risultato:** Calo pressione = tubi vecchi.

## 3. Test dell'Accendino (Finestre)
*   **Test:** Fiamma vicino al vetro.
    *   **Bene:** Un riflesso è rosso/viola.
*   **Telaio:** Gelido? Manca il taglio termico.

## 4. Trucchi di Staging
1.  **Mobili Piccoli:** Per ingrandire le stanze.
2.  **Riscaldamento:** Maschera spifferi.
3.  **Musica:** Copre i rumori.

> **Protocolo Tesela:** Spegniamo la musica e controlliamo i tubi.
                `
            },
            ru: {
                title: "Косметический ремонт: Белая книга",
                excerpt: "Свежая краска поверх гнили. Не платите за обман. Наш технический гид с оценкой затрат.",
                tags: ["Обман", "Ремонт", "Аудит"],
                body: `
## Экономика перепродажи
Инвесторы экономят на невидимом.

## 1. Цена незнания
Сколько стоит исправить ошибки?

| Скрытый дефект | Признак | Цена ремонта |
| :--- | :--- | :--- |
| **Старая электрика** | Мало автоматов; нет заземления. | **4 500 € - 6 000 €** |
| **Старые трубы** | Падение давления; нет горячей воды. | **3 500 € - 5 000 €** |
| **Плохой пол** | Пустой звук; прогибается. | **2 500 € + Материалы** |
| **Нет изоляции** | Холодные стены; конденсат. | **3 000 € - 5 000 €** |

## 2. Стресс-тест воды
*   **Тест:** Душ на максимум + смыв.
*   **Результат:** Давление падает = старые трубы.

## 3. Тест зажигалкой (Окна)
*   **Тест:** Огонь у стекла.
    *   **Хорошо:** Одно отражение красное/фиолетовое (Low-E).
*   **Рама:** Холодная? Нет терморазрыва.

## 4. Психология
1.  **Мини-мебель:** Делает комнату больше.
2.  **Отопление:** Скрывает сквозняки.
3.  **Музыка:** Скрывает шум.

> **Протокол Tesela:** Мы выключаем музыку и проверяем реальность.
                `
            }
        }
    },

    // ARTICLE 4: HIDDEN DEBTS
    {
        slug: "hidden-debts-nota-simple",
        date: "2024-02-12",
        author: "Tesela Legal Team",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
        category: "Legal",
        content: {
            en: {
                title: "The Inheritance Trap: How to Audit Hidden Property Debts",
                excerpt: "In Spain, debt is like a shadow: it follows the property, not the person. Learn the concept of 'Afección Real' and how to check IBI, Community, and Utility debts before it's too late.",
                tags: ["Legal Audit", "Debt Prevention", "Due Diligence"],
                body: `
## The Concept of "Afección Real"
This is the most critical legal concept for buyers in Spain. It means the **property itself guarantees the payment of certain debts**. Even if the previous owner is a fraudster who fled the country, **the house owes the money**, and you (the new owner) must pay or face repossession.

## 1. The "Derramas" (Special Levies) Trap
Most buyers check the monthly community fee (€50/month). They forget to check the **"Derramas"** (Special Assessments).
*   **The Scenario:** One month before you buy, the Community votes to install a new elevator for €40,000.
*   **The Trap:** As the new owner, you inherit the obligation to pay this debt, even if you voted against it (or weren't there).
*   **The Audit:** You must request the **Meeting Minutes (*Actas*)** for the last 2 years to see if major works have been approved but not yet billed.

## 2. The "Nota Simple" Loads Audit
We analyze the *Nota Simple* for 3 key hidden loads:
*   **Afección Fiscal:** For 5 years, the property is liable for taxes underpaid by previous owners (Inheritance Tax or Property Transfer Tax).
*   **Hipoteca (Mortgage):** Sometimes a mortgage is "Economically Cancelled" (paid off) but not "Registrially Cancelled". It costs €600-€1,000 to clean this from the registry. The seller must pay this.
*   **Servidumbres (Easements):** Does the neighbor have a "right of light" over your terrace? Can the power company install cables on your façade?

## 3. The "Plusvalía" Clause
By law, the *Plusvalía Municipal* (Tax on the Increase in Value of Urban Land) is paid by the **SELLER**.
*   **The Trick:** Unscrupulous contracts include a clause: *"All taxes/expenses arising from this sale shall be paid by the buyer."*
*   **The Result:** You accidentally agree to pay the seller's taxes (potentially €2,000+).
*   **Advice:** Never sign a private contract (*Arras*) without a lawyer striking out this clause.

> **Tesela Protocol:** We obtain certificates from the Town Hall (IBI), the Administrator (Community + Derramas), and the Utility Companies to ensure a "Zero Debt" transfer.
                `
            },
            es: {
                title: "La Trampa de la Deuda: White Paper Legal",
                excerpt: "En España, la deuda persigue a la casa. Analizamos la 'Afección Real', las Derramas ocultas y las trampas de la Plusvalía en los contratos privados.",
                tags: ["Auditoría Legal", "Deudas", "Due Diligence"],
                body: `
## El Concepto de "Afección Real"
Significa que el inmueble responde de las deudas, independientemente de quién sea el dueño. Si el vendedor no paga, **la casa paga**.

## 1. El Peligro de las "Derramas"
La cuota mensual (50€) no importa tanto como las Derramas aprobadas.
*   **El Escenario:** Un mes antes de vender, la Comunidad vota arreglar la fachada (30.000€).
*   **La Trampa:** Como nuevo propietario, heredas esa obligación de pago íntegra.
*   **La Auditoría:** Pedimos las **Actas de las Juntas** de los últimos 2 años. Buscamos obras aprobadas "en el aire" o discusiones sobre la ITE (Inspección Técnica de Edificios).

## 2. Auditoría de la "Nota Simple"
Analizamos 3 cargas invisibles:
*   **Afección Fiscal:** Durante 5 años, la casa responde de los impuestos mal pagados por dueños anteriores (Sucesiones o ITP).
*   **Cancelación Registral:** A veces la hipoteca está pagada al banco (económicamente) pero sigue en el Registro. Borrarla cuesta 600€-1.000€. Debe pagarlo el vendedor.
*   **Servidumbres:** ¿Tiene el vecino derecho a abrir una ventana hacia tu patio?

## 3. La Cláusula de la "Plusvalía"
Por Ley, la *Plusvalía Municipal* (IIVTNU) la paga el **VENDEDOR**.
*   **El Truco:** En el contrato de Arras cuelan: *"Todos los gastos e impuestos generados serán a cargo del comprador"*.
*   **El Resultado:** Acabas pagando el impuesto del vendedor.
*   **Consejo:** Tachamos esa cláusula agresivamente antes de firmar nada.

> **Protocolo Tesela:** Obtenemos certificados de "Deuda Cero" del Ayuntamiento (IBI), Administrador (Comunidad/Derramas) y Suministros.
                `
            },
            de: {
                title: "Die Schulden-Falle: Ein Rechts-White Paper",
                excerpt: "In Spanien haftet das Haus. Wir analysieren 'Derramas' (Sonderumlagen) und versteckte Steuerklauseln im Kaufvertrag.",
                tags: ["Rechtsprüfung", "Schulden", "Sicherheit"],
                body: `
## Die "Afección Real" (Dingliche Haftung)
Das Haus garantiert die Schulden. Wenn der Vorbesitzer flieht, zahlen Sie.

## 1. Die "Derramas" (Sonderumlagen)
*   **Das Szenario:** Die Gemeinschaft hat beschlossen, den Aufzug zu erneuern (25.000€).
*   **Die Falle:** Sie erben diese Schuld, auch wenn der Beschluss vor Ihrem Kauf fiel.
*   **Die Prüfung:** Wir prüfen die Protokolle der letzten 2 Jahre auf geplante Großprojekte.

## 2. Nota Simple Audit
*   **Steuerhaftung (Afección Fiscal):** Das Haus haftet 5 Jahre lang für Steuerschulden der Vorbesitzer.
*   **Hypotheken-Löschung:** Eine bezahlte Hypothek muss auch aus dem Register gelöscht werden. Kosten (ca. 800€) trägt der Verkäufer.

## 3. Die "Plusvalía"-Klausel
Gesetzlich zahlt der **VERKÄUFER** die Wertzuwachssteuer.
*   **Der Trick:** Im Vorvertrag steht: *"Alle Steuern trägt der Käufer".* Damit zahlen Sie dessen Steuern.
*   **Unsere Lösung:** Wir streichen diese Klausel konsequent.

> **Tesela Protokoll:** Wir verlangen schriftliche Bescheinigungen über "Null Schulden" von allen Behörden vor dem Notartermin.
                `
            },
            nl: {
                title: "De Schuldenval: Juridisch White Paper",
                excerpt: "In Spanje kleeft de schuld aan de stenen. Wij analyseren 'Derramas', en de 'Plusvalía' clausule.",
                tags: ["Juridische Audit", "Schulden", "Due Diligence"],
                body: `
## "Afección Real"
Het huis staat garant. Punt.

## 1. De "Derramas" (Speciale Heffingen)
*   **Scenario:** De VvE heeft net gestemd voor gevelrenovatie (€30.000).
*   **De Val:** U koopt het huis en krijgt de rekening, ook al was u er niet bij.
*   **Audit:** Wij eisen de notulen (Actas) van de afgelopen 2 jaar.

## 2. De Nota Simple
*   **Fiscale Aansprakelijkheid:** Het huis is 5 jaar aansprakelijk voor belastingen van vorige eigenaars.
*   **Hypotheek Doorhaling:** Een afgeloste hypotheek moet ook uit het register. Dat kost geld en is voor rekening van de verkoper.

## 3. De "Plusvalía" Truc
Wettelijk betaalt de **VERKOPER** de gemeentelijke meerwaardebelasting.
*   **De Truc:** In het contract staat dat de *koper* "alle kosten" betaalt.
*   **Gevolg:** U betaalt zijn belasting.
*   **Advies:** Teken nooit zonder advocaat.

> **Tesela Protocol:** Wij zorgen voor een "Schuldenvrij" certificaat voor IBI, VvE en Nutsvoorzieningen.
                `
            },
            sv: {
                title: "Skuldfällan: Ett Juridiskt White Paper",
                excerpt: "I Spanien följer skulden huset. Vi analyserar 'Derramas' (extra avgifter) och Plusvalía-fällan.",
                tags: ["Juridisk Audit", "Skulder", "Säkerhet"],
                body: `
## "Afección Real"
Fastigheten är garant för skulden.

## 1. Fällan med "Derramas" (Extra uttaxering)
*   **Scenario:** Föreningen har röstat för stambyte månaden innan du köper.
*   **Fällan:** Du ärver betalningsansvaret för hela renoveringen.
*   **Revision:** Vi läser protokollen (Actas) för 2 år tillbaka för att hitta dolda kostnader.

## 2. Nota Simple-analys
*   **Skatteansvar:** Huset häftar för gamla ägares skatter i 5 år.
*   **Hypotek:** Säljaren måste betala för att döda pantbrevet i registret (ca 800€), även om lånet är betalt.

## 3. "Plusvalía"-klausulen
Enligt lag ska **SÄLJAREN** betala kommunal vinstskatt.
*   **Tricket:** Kontraktet säger att köparen betalar "alla skatter".
*   **Resultat:** Du betalar tusentals euro i onödan.

> **Tesela Protokoll:** Vi kräver skriftliga intyg på noll skulder från alla instanser.
                `
            },
            no: {
                title: "Gjeldsfellen: Et Juridisk White Paper",
                excerpt: "I Spania følger gjelden boligen. Vi ser på 'Derramas' og skjulte klausuler i kontrakten.",
                tags: ["Juridisk Sjekk", "Gjeld", "Due Diligence"],
                body: `
## "Afección Real"
Boligen garanterer for gjelden.

## 1. "Derramas" (Fellesutgifter)
*   **Scenario:** Sameiet har vedtatt fasadeoppussing.
*   **Fellen:** Du arver regningen.
*   **Sjekk:** Vi leser styrereferater for de to siste årene.

## 2. Nota Simple
*   **Skatteheftelse:** Boligen hefter for skatt i 5 år.
*   **Pant:** Selger må slette gamle pant i registeret for sin regning.

## 3. "Plusvalía"-trikset
Loven sier at **SELGER** betaler gevinstskatt til kommunen.
*   **Trikset:** Kontrakten velter regningen over på deg.
*   **Råd:** Stryk den klausulen.

> **Tesela Protokoll:** Vi sikrer at du overtar en gjeldfri bolig.
                `
            },
            da: {
                title: "Gældsfælden: Et Juridisk White Paper",
                excerpt: "I Spanien hæfter huset. Vi analyserer ekstraordinære udgifter og skjulte skatter.",
                tags: ["Juridisk Audit", "Gæld", "Sikkerhed"],
                body: `
## "Afección Real"
Ejendommen hæfter.

## 1. Ekstraordinære udgifter ("Derramas")
*   **Scenario:** Ejerforeningen har vedtaget nyt tag.
*   **Fælden:** Du arver regningen.
*   **Tjek:** Vi tjekker referater for de sidste 2 år.

## 2. Nota Simple
*   **Skattehæftelse:** Huset hæfter for skat i 5 år.
*   **Pantebreve:** Skal slettes af sælger i tingbogen.

## 3. "Plusvalía"-klausulen
**SÆLGER** skal betale denne skat.
*   **Tricket:** Kontrakten siger, du skal betale.
*   **Løsning:** Vi fjerner klausulen.

> **Tesela Protokol:** "Nul gæld" certifikater er et krav.
                `
            },
            pl: {
                title: "Pułapka Zadłużenia: Biała Księga Prawna",
                excerpt: "W Hiszpanii dług podąża za domem. Analizujemy 'Derramas' i ukryte klauzule podatkowe.",
                tags: ["Audyt Prawny", "Długi", "Due Diligence"],
                body: `
## "Afección Real"
Nieruchomość gwarantuje spłatę długu.

## 1. Pułapka "Derramas" (Zrzutki)
*   **Scenariusz:** Wspólnota przegłosowała remont windy.
*   **Pułapka:** Dziedziczysz ten koszt.
*   **Audyt:** Sprawdzamy protokoły zebrań z 2 lat.

## 2. Analiza Nota Simple
*   **Odpowiedzialność Podatkowa:** Dom odpowiada za podatki przez 5 lat.
*   **Hipoteka:** Sprzedawca musi wykreślić hipotekę z ksiąg na swój koszt.

## 3. Klauzula "Plusvalía"
Prawnie płaci **SPRZEDAJĄCY**.
*   **Trik:** Umowa przerzuca koszt na kupującego.
*   **Rada:** Wykreślamy to z umowy.

> **Protokół Tesela:** Żądamy certyfikatów o niezaleganiu ze wszystkich urzędów.
                `
            },
            fr: {
                title: "Le Piège de la Dette : Livre Blanc Juridique",
                excerpt: "En Espagne, la dette suit les murs. Nous analysons les 'Derramas' et la clause abusive de la Plusvalía.",
                tags: ["Audit Juridique", "Dettes", "Due Diligence"],
                body: `
## "Afección Real"
Le bien garantit la dette.

## 1. Le Piège des "Derramas" (Travaux Votés)
*   **Scénario :** La copropriété a voté le ravalement de façade juste avant la vente.
*   **Le Piège :** Vous héritez de la facture totale.
*   **L'Audit :** Nous lisons les PV d'AG des 2 dernières années.

## 2. Audit de la Nota Simple
*   **Afección Fiscal :** Le bien répond des impôts impayés pendant 5 ans.
*   **Hypothèque :** Le vendeur doit payer la radiation registrale (mainlevée).

## 3. La Clause de la "Plusvalía"
La loi dit que le **VENDEUR** paie.
*   **L'Astuce :** Le contrat vous fait payer à sa place.
*   **Conseil :** Nous refusons cette clause.

> **Protocole Tesela :** Certificats "Dette Zéro" obligatoires.
                `
            },
            it: {
                title: "La Trappola del Debito: White Paper Legale",
                excerpt: "In Spagna il debito segue la casa. Analizziamo le spese straordinarie ('Derramas') e le trappole contrattuali.",
                tags: ["Audit Legale", "Debiti", "Due Diligence"],
                body: `
## "Afección Real"
L'immobile garantisce il debito.

## 1. Le "Derramas" (Spese Straordinarie)
*   **Scenario:** Il condominio ha deliberato il rifacimento del tetto.
*   **La Trappola:** Tu erediti il debito.
*   **Audit:** Leggiamo i verbali degli ultimi 2 anni.

## 2. Nota Simple
*   **Responsabilità Fiscale:** La casa risponde per 5 anni delle tasse non pagate.
*   **Ipoteca:** Il venditore deve cancellarla dal registro a sue spese.

## 3. La Clausola "Plusvalía"
Per legge paga il **VENDITORE**.
*   **Il Truco:** Il contratto scarica la tassa su di te.
*   **Consiglio:** Cancelliamo sempre questa clausola.

> **Protocolo Tesela:** Esigiamo certificati di "Debito Zero".
                `
            },
            ru: {
                title: "Долговая ловушка: Юридическая Белая книга",
                excerpt: "В Испании долг привязан к дому. Мы анализируем 'Derramas' (сборы) и налог Plusvalía.",
                tags: ["Юридический аудит", "Долги", "Due Diligence"],
                body: `
## "Afección Real" (Привязка долга)
Дом гарантирует оплату долгов.

## 1. Ловушка "Derramas" (Целевые сборы)
*   **Сценарий:** Сообщество проголосовало за ремонт лифта (20 000€).
*   **Ловушка:** Вы наследуете этот долг, став владельцем.
*   **Аудит:** Мы требуем протоколы собраний за 2 года.

## 2. Аудит Nota Simple
*   **Налоговая ответственность:** Дом отвечает за налоги прошлых владельцев в течение 5 лет.
*   **Ипотека:** Продавец должен оплатить снятие обременения в реестре (около 800€).

## 3. Пункт о "Plusvalía"
По закону этот налог платит **ПРОДАВЕЦ**.
*   **Уловка:** В договоре пишут, что платит покупатель.
*   **Результат:** Вы платите чужой налог.
*   **Совет:** Мы вычеркиваем этот пункт.

> **Протокол Tesela:** "Нулевой долг" должен быть подтвержден документально.
                `
            }
        }
    },

    // ARTICLE 5: LPO NIGHTMARE
    {
        slug: "lpo-license-first-occupation",
        date: "2024-02-19",
        author: "Tesela Urban Planning",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
        category: "Technical",
        content: {
            en: {
                title: "The LPO Nightmare: A Technical White Paper",
                excerpt: "The License of First Occupation (LPO) is the difference between a legal home and a 'storage unit'. Without it, the property is administratively 'dead'.",
                tags: ["Urban Legality", "LPO", "Technical Audit"],
                body: `
## The "Administrative Ghost"
A property can be registered in the *Registro de la Propiedad*, you can pay taxes (IBI) on it, but **administratively, it might not exist as a dwelling.** This occurs when it lacks the **Licencia de Primera Ocupación (LPO)**.

## 1. Why is the LPO Missing?
*   **The "Infraction" Scenario:** The previous owner enclosed a terrace, built a pool, or expanded the living room without a license. The Town Hall refuses to grant the LPO because the "physical reality" does not match the "licensed project".
*   **The "Silence" Scenario:** In older buildings (pre-1980), the document was often never requested or lost.

## 2. The Consequences (It's not just paper)
*   **Tourist License Veto:** No LPO = Automatic denial of tourist license.
*   **Utility Blackout:** Water and electric companies act as "urban polices". They cannot legally sign a contract without a valid LPO. You might be forced to live with "construction electricity" (expensive and unstable).
*   **Mortgage Refusal:** Banks are increasingly refusing to finance properties without an LPO, as the asset value is questionable.

## 3. The Solution: The "ECUV" Audit
If the LPO is missing, we must prove the property is legal. We do this via an ECUV (Entidad de Control Urbanístico) audit.
*   **Step A:** Architect technical inspection (proving structural safety).
*   **Step B:** "Certificado de Antigüedad" (proving no infractions in the last 4/15 years).
*   **Step C:** Paying the tasa (tax) to the Town Hall for a "Second Occupation License".

> **Tesela Guarantee:** We do not sign acts until the ECUV report confirms the LPO is obtainable.
                `
            },
            es: {
                title: "Pesadilla LPO: White Paper Técnico",
                excerpt: "La Licencia de Primera Ocupación (LPO) distingue una vivienda legal de un 'trastero caro'. Sin ella, el activo está administrativamente muerto.",
                tags: ["LPO", "Legalidad Urbanística", "Auditoría"],
                body: `
## El "Fantasma Administrativo"
Una casa puede estar inscrita en el Registro y pagar IBI, pero **no existir administrativamente**. Esto ocurre si falta la **Licencia de Primera Ocupación (LPO)**.

## 1. ¿Por qué falta la LPO?
*   **Escenario "Infracción":** El anterior dueño cerró una terraza o amplió el salón sin licencia. El Ayuntamiento deniega la LPO porque la realidad física no coincide con el proyecto.
*   **Escenario "Silencio":** En edificios anteriores a 1980, a menudo nunca se solicitó o se perdió.

## 2. Las Consecuencias (No es solo un papel)
*   **Veto Turístico:** Sin LPO, la denegación de licencia turística es automática.
*   **Apagón de Suministros:** Las compañías de agua y luz actúan como "policía urbanística". No pueden contratar sin LPO válida. Te arriesgas a vivir con luz de obra (cara e inestable).
*   **Rechazo Hipotecario:** Los bancos rehúsan financiar activos sin LPO por su valor incierto.

## 3. La Solución: Auditoría "ECUV"
Si falta la LPO, debemos probar la legalidad vía ECUV (Entidad de Control Urbanístico).
*   **Faso A:** Inspección técnica de Arquitecto (seguridad estructural).
*   **Faso B:** Certificado de Antigüedad (probar prescripción de infracciones >15 años).
*   **Faso C:** Pago de la tasa de "Segunda Ocupación".

> **Garantía Tesela:** No firmamos arras hasta que el informe ECUV confirma que la LPO es obtenible.
                `
            },
            de: {
                title: "LPO-Albtraum: Ein technisches White Paper",
                excerpt: "Die Erstbezugslizenz (LPO) ist der Unterschied zwischen einem legalen Heim und einem 'Lagerraum'. Ohne sie ist die Immobilie 'tot'.",
                tags: ["LPO", "Baurecht", "Audit"],
                body: `
## Das "Verwaltungs-Gespenst"
Sie zahlen Steuern, aber das Haus existiert offiziell nicht. Ohne **Licencia de Primera Ocupación (LPO)** ist es administrativ unsichtbar.

## 1. Warum fehlt die LPO?
*   **Szenario "Verstoß":** Illegale Anbauten (Terrasse, Pool) führen zur Verweigerung der LPO durch das Rathaus.
*   **Szenario "Altbau":** Bei Gebäuden vor 1980 ging das Dokument oft verloren.

## 2. Die Konsequenzen
*   **Keine Ferienvermietung:** Ohne LPO keine Lizenz. Punkt.
*   **Versorgungs-Stop:** Wasserwerke dürfen ohne LPO keinen Zähler installieren. Baustrom ist keine Dauerlösung.
*   **Hypotheken-Ablehnung:** Banken finanzieren keine "illegalen" Objekte.

## 3. Die Lösung: ECUV-Audit
Wir müssen die Legalität beweisen:
*   **Schritt A:** Architektengutachten (Strukturelle Sicherheit).
*   **Schritt B:** Altershabe (Nachweis, dass Verstöße verjährt sind).
*   **Schritt C:** Beantragung der "Segunda Ocupación".

> **Tesela Garantie:** Wir unterschreiben nichts, bis das ECUV-Gutachten positiv ist.
                `
            },
            nl: {
                title: "LPO Nachtmerrie: Technisch White Paper",
                excerpt: "De LPO maakt het verschil tussen een legaal huis en een opslagplaats. Zonder dit document is uw investering in gevaar.",
                tags: ["LPO", "Stedenbouw", "Audit"],
                body: `
## Het "Administratieve Spook"
U betaalt IBI, maar het huis bestaat officieel niet zonder **LPO**.

## 1. Waarom ontbreekt de LPO?
*   **Overtredingen:** Illegale zwembaden of uitbouw zorgen ervoor dat de gemeente de LPO weigert.
*   **Oude panden:** Vóór 1980 werd dit document vaak vergeten.

## 2. De Gevolgen
*   **Geen Verhuurlicentie:** Directe afwijzing.
*   **Geen Water/Stroom:** Nutsbedrijven mogen u niet aansluiten zonder geldige LPO.
*   **Geen Hypotheek:** Banken zien het onderpand als risicovol.

## 3. De Oplossing: ECUV Audit
Wij bewijzen de legaliteit via een ECUV audit.
*   **Stap A:** Architect inspectie.
*   **Stap B:** Bewijs van verjaring van overtredingen.
*   **Stap C:** Aanvraag "Segunda Ocupación".

> **Tesela Garantie:** Geen handtekening zonder positief ECUV rapport.
                `
            },
            sv: {
                title: "LPO-mardrömmen: Ett Tekniskt White Paper",
                excerpt: "LPO avgör om du köper en bostad eller ett förråd. Utan det är fastigheten administrativt 'död'.",
                tags: ["LPO", "Stadsplanering", "Audit"],
                body: `
## Det "Administrativa Spöket"
Du betalar skatt för huset, men utan **LPO** existerar det inte för myndigheterna.

## 1. Varför saknas LPO?
*   **Överträdelser:** En inglasad terrass utan bygglov kan stoppa hela licensen.
*   **Gamla hus:** I hus byggda före 1980 finns dokumentet ofta inte kvar.

## 2. Konsekvenserna
*   **Ingen Turistlicens:** Avslag direkt.
*   **Inget Vatten/El:** Bolagen får inte koppla in dig utan giltig LPO.
*   **Inga Banklån:** Banken säger nej.

## 3. Lösningen: ECUV-Audit
Vi måste bevisa legaliteten.
*   **Steg A:** Arkitektbesiktning.
*   **Steg B:** Intyg på att brott mot byggregler är preskriberade.
*   **Steg C:** Ansökan om "Segunda Ocupación".

> **Tesela Garanti:** Vi skriver inte under förrän vi vet att LPO går att få.
                `
            },
            no: {
                title: "LPO-marerittet: Et Teknisk White Paper",
                excerpt: "LPO avgjør om du kjøper en bolig eller en bod. Uten den er boligen administrativt 'død'.",
                tags: ["LPO", "Byggesak", "Audit"],
                body: `
## Det "Administrative Spøkelset"
Du betaler skatt, men uten **LPO** finnes ikke boligen i systemet.

## 1. Hvorfor mangler LPO?
*   **Ulovligheter:** Et ulovlig basseng eller tilbygg stopper LPO-en.
*   **Gamle hus:** Før 1980 var systemet slarkete, papirer mangler ofte.

## 2. Konsekvenser
*   **Ingen Utleielisens:** Glem Airbnb.
*   **Ingen Strøm/Vann:** Du får ikke måler uten papirene i orden.
*   **Ingen Lån:** Banken tar ikke risikoen.

## 3. Løsningen: ECUV-Sjekk
Vi beviser at boligen er lovlig via ECUV.
*   **Trinn A:** Arkitektsjekk.
*   **Trinn B:** Bevis på foreldelse av ulovligheter.
*   **Trinn C:** Søknad om "Segunda Ocupación".

> **Tesela Garanti:** Vi signerer ingenting før LPO er bekreftet mulig.
                `
            },
            da: {
                title: "LPO-mareridtet: Et Teknisk White Paper",
                excerpt: "LPO er forskellen på et hjem og et lagerrum. Uden den er ejendommen 'død'.",
                tags: ["LPO", "Byggetilladelse", "Audit"],
                body: `
## Det "Administrative Spøgelse"
Du betaler skat, men uden **LPO** eksisterer boligen ikke formelt.

## 1. Hvorfor mangler LPO?
*   **Overtrædelser:** En ulovlig terrasse lukker for LPO.
*   **Gamle huse:** Før 1980 gik papirer ofte tabt.

## 2. Konsekvenserne
*   **Ingen Udlejning:** Turistlicens afvises.
*   **Ingen Forsyning:** Vand og el kræver gyldig LPO.
*   **Ingen Lån:** Banken siger stop.

## 3. Løsningen: ECUV-Audit
Vi skal bevise lovligheden.
*   **Trin A:** Arkitektrapport.
*   **Trin B:** Bevis for forældelse af ulovligheder.
*   **Trin C:** Ansøgning om "Segunda Ocupación".

> **Tesela Garanti:** Vi køber ikke uden en klar vej til LPO.
                `
            },
            pl: {
                title: "Koszmar LPO: Biała Księga Techniczna",
                excerpt: "LPO to różnica między legalnym domem a magazynem. Bez tego dokumentu nieruchomość jest administracyjnie 'martwa'.",
                tags: ["LPO", "Audyt Techniczny", "Legalność"],
                body: `
## "Administracyjny Duch"
Dom jest w Rejestrze, płacisz podatki, ale bez **LPO** oficjalnie nie istnieje.

## 1. Dlaczego brakuje LPO?
*   **Scenariusz "Naruszenie":** Nielegalna dobudówka blokuje wydanie licencji przez Ratusz.
*   **Scenariusz "Milczenie":** W budynkach sprzed 1980 roku dokument często ginął.

## 2. Konsekwencje
*   **Zakaz Wynajmu:** Brak licencji turystycznej.
*   **Odcięcie Mediów:** Wodociągi nie podpiszą umowy bez LPO.
*   **Odmowa Kredytu:** Banki nie finansują "nielegalnych" domów.

## 3. Rozwiązanie: Audyt ECUV
Musimy udowodnić legalność poprzez audyt ECUV.
*   **Krok A:** Inspekcja architekta.
*   **Krok B:** Certyfikat Starożytoności (przedawnienie naruszeń).
*   **Krok C:** Wniosek o "Segunda Ocupación".

> **Gwarancja Tesela:** Nie podpisujemy umowy przedwstępnej bez pozytywnego raportu ECUV.
                `
            },
            fr: {
                title: "Le Cauchemar de la LPO : Livre Blanc Technique",
                excerpt: "La LPO fait la différence entre un logement légal et un débarras. Sans elle, le bien est administrativement 'mort'.",
                tags: ["LPO", "Urbanisme", "Audit"],
                body: `
## Le "Fantôme Administratif"
Une maison peut payer ses impôts, mais sans **LPO**, elle n'existe pas pour l'administration.

## 1. Pourquoi la LPO manque-t-elle ?
*   **Scénario "Infraction" :** Une terrasse fermée sans permis bloque la délivrance de la LPO par la mairie.
*   **Scénario "Silence" :** Avant 1980, le document était souvent perdu ou jamais demandé.

## 2. Les Conséquences
*   **Veto Touristique :** Pas de LPO = Pas de licence Airbnb.
*   **Coupure des Services :** Pas d'eau ni d'électricité sans contrat, impossible sans LPO.
*   **Refus de Prêt :** Les banques ne financent pas les biens sans LPO.

## 3. La Solution : Audit ECUV
Nous prouvons la légalité via un audit ECUV.
*   **Étape A :** Inspection d'architecte.
*   **Étape B :** Certificat d'Antiquité (prescription des infractions).
*   **Étape C :** Demande de "Segunda Ocupación".

> **Garantie Tesela :** Nous ne signons rien sans un rapport ECUV favorable.
                `
            },
            it: {
                title: "L'Incubo LPO: White Paper Tecnico",
                excerpt: "La LPO è la differenza tra una casa legale e un magazzino. Senza di essa, l'immobile è amministrativamente 'morto'.",
                tags: ["LPO", "Urbanistica", "Audit"],
                body: `
## Il "Fantasma Amministrativo"
La casa è nel registro, paghi le tasse, ma senza **LPO** non esiste come abitazione.

## 1. Perché manca la LPO?
*   **Scenario "Abusi":** Una veranda abusiva blocca il rilascio della LPO da parte del Comune.
*   **Scenario "Silenzio":** Negli edifici pre-1980 il documento è spesso andato perso.

## 2. Le Conseguenze
*   **Veto Turistico:** Niente LPO = Niente licenza turistica.
*   **Stop Utenze:** Acqua e luce non possono essere allacciate senza LPO valida.
*   **No Mutuo:** Le banche evitano immobili senza LPO.

## 3. La Soluzione: Audit ECUV
Proviamo la legalità via ECUV.
*   **Step A:** Ispezione architetto.
*   **Step B:** Certificato di Antichità (prescrizione abusi).
*   **Step C:** Richiesta "Segunda Ocupación".

> **Garanzia Tesela:** Non firmiamo nulla senza un report ECUV positivo.
                `
            },
            ru: {
                title: "Кошмар LPO: Техническая Белая книга",
                excerpt: "LPO отличает легальное жилье от кладовки. Без него недвижимость административно 'мертва'.",
                tags: ["LPO", "Урбанистика", "Аудит"],
                body: `
## "Административный призрак"
Дом может быть в реестре, налоги платятся, но без **LPO** он не существует.

## 1. Почему нет LPO?
*   **Сценарий "Нарушение":** Незаконная пристройка блокирует выдачу лицензии мэрией.
*   **Сценарий "Старый фонд":** В домах до 1980 года документы часто терялись.

## 2. Последствия
*   **Нет туристической лицензии:** Без LPO это невозможно.
*   **Нет воды и света:** Компании не заключат контракт без валидной LPO.
*   **Отказ в ипотеке:** Банки не финансируют такие объекты.

## 3. Решение: Аудит ECUV
Мы доказываем законность через ECUV.
*   **Шаг A:** Инспекция архитектора.
*   **Шаг B:** Сертификат давности (доказать, что нарушениям > 15 лет).
*   **Шаг C:** Запрос "Segunda Ocupación".

> **Гарантия Tesela:** Мы не подписываем договор без положительного отчета ECUV.
                `
            }
        }
    }
];
