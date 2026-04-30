export default async function ZwrotKosztow() {
    return (
        <>
            <section className="relative pt-16 pb-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold black-100 mb-8">
                        Jak skorzystać z konkursu PROO 5 – Edycja 2026 na udział w Ogólnopolskim Okrągłym Stole ds. Strategii Młodzieżowej.
                    </h1>
                </div>
                <Question>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Kto może składać wniosek?
                    </h2>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Organizacja musi:
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            być zarejestrowana jako NGO (fundacja, stowarzyszenie, koło gospodyń wiejskich, spółdzielnia socjalna itd.),
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            posiadać osobowość prawną,
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            nie być w trakcie realizacji innych projektów PROO5 zakończonych po 2025 roku,
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            rozliczyć wcześniejsze dotacje PROO (jeśli dotyczy).
                        </li>
                    </ul>
                </Question>
                <Question>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Nie mogą aplikować:
                    </h2>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Wniosku złożyć NIE MOGĄ:
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            stowarzyszenia JST, EUGT, oddziały bez osobowości prawnej,                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            osoby indywidualne,                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            organizacje z zaległościami rozliczeniowymi z poprzednich edycji PROO,                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            beneficjenci PROO 5 z 2026 r., którzy już otrzymali 10 000 zł w ścieżce 2.                        </li>
                    </ul>
                </Question>


            </section>
        </>
    )
}


function Question({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}