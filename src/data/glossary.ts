import { Locale } from './locations';

export interface GlossaryDefinition {
    term: string;
    definition: string;
}

export const glossary: Partial<Record<Locale, Record<string, GlossaryDefinition>>> = {

    fr: {
        nota_simple: {
            term: "Nota Simple",
            definition: "Le rapport officiel du registre foncier. Il prouve la propriété et révèle toutes les dettes ou hypothèques rattachées à la propriété avant l'achat."
        },
        lpo: {
            term: "Licence de Première Occupation (LPO)",
            definition: "Un document essentiel. Sans lui, la propriété n'est pas légalement considérée comme 'habitable', ce qui signifie que vous ne pouvez pas la louer légalement ni même souscrire des contrats d'électricité et d'eau."
        },
        nie: {
            term: "Numéro NIE",
            definition: "Votre numéro d'identification d'étranger. Absolument obligatoire pour signer l'acte ('Escritura') chez le notaire et pour payer des impôts en Espagne."
        },
        cee: {
            term: "Certificat Énergétique (CEE)",
            definition: "Exigé par la loi de l'UE. Une mauvaise note (F/G) pourrait vous empêcher d'accéder à certaines 'Hypothèques Vertes' ou subventions de rénovation."
        }
    },
    en: {
        nota_simple: {
            term: "Nota Simple",
            definition: "The official land registry report. It proves ownership and reveals any debts or mortgages attached to the property before you buy."
        },
        lpo: {
            term: "Licence of First Occupation (LPO)",
            definition: "A critical document. Without it, the property is not legally considered 'habitable', meaning you cannot legally rent it out or even sign up for electricity and water contracts."
        },
        nie: {
            term: "NIE Number",
            definition: "Your foreigner identification number. Absolutely mandatory to sign the deed ('Escritura') at the notary and to pay taxes in Spain."
        },
        cee: {
            term: "Energy Certificate (CEE)",
            definition: "Required by EU law. A poor rating (F/G) might prevent you from accessing certain 'Green Mortgages' or renovation grants."
        }
    },
    pl: {
        nota_simple: {
            term: "Nota Simple",
            definition: "The official land registry report. It proves ownership and reveals any debts or mortgages attached to the property before you buy."
        },
        lpo: {
            term: "Licence of First Occupation (LPO)",
            definition: "A critical document. Without it, the property is not legally considered 'habitable', meaning you cannot legally rent it out or even sign up for electricity and water contracts."
        },
        nie: {
            term: "NIE Number",
            definition: "Your foreigner identification number. Absolutely mandatory to sign the deed ('Escritura') at the notary and to pay taxes in Spain."
        },
        cee: {
            term: "Energy Certificate (CEE)",
            definition: "Required by EU law. A poor rating (F/G) might prevent you from accessing certain 'Green Mortgages' or renovation grants."
        }
    },
    it: {
        nota_simple: {
            term: "Nota Simple",
            definition: "Il rapporto ufficiale del registro fondiario. Dimostra la proprietà e rivela eventuali debiti o ipoteche legati alla proprietà prima dell'acquisto."
        },
        lpo: {
            term: "Licenza di Prima Occupazione (LPO)",
            definition: "Un documento fondamentale. Senza di esso, la proprietà non è legalmente considerata 'abitabile', il che significa che non puoi affittarla legalmente né stipulare contratti di luce e acqua."
        },
        nie: {
            term: "Numero NIE",
            definition: "Il tuo numero di identificazione per stranieri. Assolutamente obbligatorio per firmare l'atto ('Escritura') dal notaio e per pagare le tasse in Spagna."
        },
        cee: {
            term: "Certificato Energetico (CEE)",
            definition: "Richiesto dalla legge UE. Una valutazione bassa (F/G) potrebbe impedirti di accedere a certi 'Mutui Verdi' o sovvenzioni per la ristrutturazione."
        }
    },
    ru: {
        nota_simple: {
            term: "Nota Simple",
            definition: "The official land registry report. It proves ownership and reveals any debts or mortgages attached to the property before you buy."
        },
        lpo: {
            term: "Licence of First Occupation (LPO)",
            definition: "A critical document. Without it, the property is not legally considered 'habitable', meaning you cannot legally rent it out or even sign up for electricity and water contracts."
        },
        nie: {
            term: "NIE Number",
            definition: "Your foreigner identification number. Absolutely mandatory to sign the deed ('Escritura') at the notary and to pay taxes in Spain."
        },
        cee: {
            term: "Energy Certificate (CEE)",
            definition: "Required by EU law. A poor rating (F/G) might prevent you from accessing certain 'Green Mortgages' or renovation grants."
        }
    },
    pt: {
        nota_simple: {
            term: "Nota Simple",
            definition: "The official land registry report. It proves ownership and reveals any debts or mortgages attached to the property before you buy."
        },
        lpo: {
            term: "Licence of First Occupation (LPO)",
            definition: "A critical document. Without it, the property is not legally considered 'habitable', meaning you cannot legally rent it out or even sign up for electricity and water contracts."
        },
        nie: {
            term: "NIE Number",
            definition: "Your foreigner identification number. Absolutely mandatory to sign the deed ('Escritura') at the notary and to pay taxes in Spain."
        },
        cee: {
            term: "Energy Certificate (CEE)",
            definition: "Required by EU law. A poor rating (F/G) might prevent you from accessing certain 'Green Mortgages' or renovation grants."
        }
    },
    ca: {
        nota_simple: {
            term: "Nota Simple",
            definition: "The official land registry report. It proves ownership and reveals any debts or mortgages attached to the property before you buy."
        },
        lpo: {
            term: "Licence of First Occupation (LPO)",
            definition: "A critical document. Without it, the property is not legally considered 'habitable', meaning you cannot legally rent it out or even sign up for electricity and water contracts."
        },
        nie: {
            term: "NIE Number",
            definition: "Your foreigner identification number. Absolutely mandatory to sign the deed ('Escritura') at the notary and to pay taxes in Spain."
        },
        cee: {
            term: "Energy Certificate (CEE)",
            definition: "Required by EU law. A poor rating (F/G) might prevent you from accessing certain 'Green Mortgages' or renovation grants."
        }
    },
    zh: {
        nota_simple: {
            term: "Nota Simple",
            definition: "The official land registry report. It proves ownership and reveals any debts or mortgages attached to the property before you buy."
        },
        lpo: {
            term: "Licence of First Occupation (LPO)",
            definition: "A critical document. Without it, the property is not legally considered 'habitable', meaning you cannot legally rent it out or even sign up for electricity and water contracts."
        },
        nie: {
            term: "NIE Number",
            definition: "Your foreigner identification number. Absolutely mandatory to sign the deed ('Escritura') at the notary and to pay taxes in Spain."
        },
        cee: {
            term: "Energy Certificate (CEE)",
            definition: "Required by EU law. A poor rating (F/G) might prevent you from accessing certain 'Green Mortgages' or renovation grants."
        }
    },
    de: {
        nota_simple: {
            term: "Nota Simple (Grundbuchauszug)",
            definition: "Das wichtigste Dokument. Es entspricht dem deutschen Grundbuchauszug und zeigt, ob Hypotheken oder Pfändungen auf der Immobilie lasten, die Sie übernehmen würden."
        },
        lpo: {
            term: "Licencia de Primera Ocupación",
            definition: "Vergleichbar mit der deutschen Bezugsgenehmigung. Ohne dieses Dokument ist die Immobilie rechtlich 'nicht bewohnbar'. Sie können keinen Strom anmelden und nicht legal vermieten."
        },
        nie: {
            term: "NIE Nummer",
            definition: "Ihre spanische Steuernummer für Ausländer. Ohne NIE können Sie keinen Kaufvertrag ('Escritura') beim Notar unterzeichnen."
        },
        cee: {
            term: "Energieausweis (CEE)",
            definition: "Pflicht nach EU-Norm. Eine schlechte Bewertung kann den Zugang zu energetischen Sanierungsförderungen oder 'Grünen Hypotheken' blockieren."
        }
    },
    sv: { // Sweden
        nota_simple: {
            term: "Nota Simple (Fastighetsutdrag)",
            definition: "Motsvarar utdrag ur svenska Lantmäteriet. Det är enda sättet att verifiera ägarskap och se om det finns skulder som följer med bostaden."
        },
        lpo: {
            term: "Licencia de Primera Ocupación",
            definition: "Liknar ett slutbesked. Utan detta får du inte koppla in el/vatten eller hyra ut bostaden lagligt. En stor risk om det saknas."
        },
        nie: {
            term: "NIE-nummer",
            definition: "Spanskt personnummer för utlänningar. Krävs obligatoriskt för att skriva under lagfarten ('Escritura') hos notarien."
        },
        cee: {
            term: "Energicertifikat (CEE)",
            definition: "Obligatoriskt inom EU. Viktigt för att kunna söka bidrag för renovering eller få förmånliga 'gröna lån'."
        }
    },
    no: { // Norway
        nota_simple: {
            term: "Nota Simple (Grundbok)",
            definition: "Dette dokumentet avslører heftelser på eiendommen. I Spania følger gjelden eiendommen, ikke eieren, så dette er din viktigste sikkerhet."
        },
        lpo: {
            term: "Licencia de Primera Ocupación",
            definition: "Brukstillatelse. Uten denne kan du ikke opprette strømabonnement eller leie ut boligen lovlig. Det er kritisk å sjekke dette."
        },
        nie: {
            term: "NIE-nummer",
            definition: "Identifiseringsnummer for utlendinger. Du må ha dette for å signere skjøtet hos notarius publicus."
        },
        cee: {
            term: "Energiattest (CEE)",
            definition: "Lovpålagt dokument. Viser boligens energistandard, som er viktig for både strømregning og videresalg."
        }
    },
    da: { // Denmark
        nota_simple: {
            term: "Nota Simple (Tinglysning)",
            definition: "Bevis for ejerskab og gæld. I Spanien overtager man gælden på huset, hvis den ikke slettes før køb. Dette dokument afslører alt."
        },
        lpo: {
            term: "Licencia de Primera Ocupación",
            definition: "Ibrugtagningstilladelse. Uden denne er boligen ulovlig at bebo, og du kan ikke få vand eller el. En klassisk fælde for udlændinge."
        },
        nie: {
            term: "NIE-nummer",
            definition: "Spansk CPR-nummer for udlændinge. Skal bruges for at underskrive skødet ('Escritura') og betale skat."
        },
        cee: {
            term: "Energimærke (CEE)",
            definition: "EU-krav. Afgørende for at søge om tilskud til energirenoveringer eller få billigere lån."
        }
    },
    nl: { // Netherlands
        nota_simple: {
            term: "Nota Simple (Kadastraal Uittreksel)",
            definition: "Bewijs van eigendom en schulden. Essentieel om te voorkomen dat u de hypotheekschuld van de vorige eigenaar overneemt."
        },
        lpo: {
            term: "Licencia de Primera Ocupación",
            definition: "Woonvergunning. Zonder dit is de woning officieel niet bewoonbaar, krijgt u geen energiecontract en mag u niet verhuren."
        },
        nie: {
            term: "NIE Nummer",
            definition: "Fiscaal nummer voor buitenlanders. Verplicht om de leveringsakte ('Escritura') bij de notaris te kunnen tekenen."
        },
        cee: {
            term: "Energielabel (CEE)",
            definition: "Verplicht. Een goed label verhoogt de waarde en is vaak vereist voor speciale 'groene' hypotheekrentes."
        }
    },
    es: {
        nota_simple: {
            term: "Nota Simple",
            definition: "Documento oficial del Registro de la Propiedad. Certifica la titularidad y las cargas (hipotecas, embargos) antes de comprar."
        },
        lpo: {
            term: "Licencia de Primera Ocupación",
            definition: "Documento administrativo que acredita que la vivienda cumple las condiciones de habitabilidad. Imprescindible para suministros."
        },
        nie: {
            term: "NIE",
            definition: "Número de Identidad de Extranjero. Imprescindible para realizar cualquier transacción económica y firmar ante notario."
        },
        cee: {
            term: "Certificado Energético",
            definition: "Obligatorio para vender o alquilar. Califica la eficiencia energética del inmueble."
        }
    }
};
