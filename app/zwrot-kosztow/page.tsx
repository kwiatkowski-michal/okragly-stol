import { ArrowRight, Download, ExternalLink } from "lucide-react"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Zwrot kosztów',
}
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
                            stowarzyszenia JST, EUGT, oddziały bez osobowości prawnej,
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            osoby indywidualne,
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            organizacje z zaległościami rozliczeniowymi z poprzednich edycji PROO,
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            beneficjenci PROO 5 z 2026 r., którzy już otrzymali 10 000 zł w ścieżce 2.
                        </li>
                    </ul>
                </Question>
                <Question>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Co można sfinansować?
                    </h2>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Można sfinansować:
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            koszty przejazdu (np. pociąg, autobus, samolot, taksówka, komunikacja miejska, a także paliwo, opłaty autostradowe),
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            koszty noclegu,
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            opłaty parkingowe,
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            inne koszty niezbędne do udziału w wydarzeniu, z wyjątkiem kosztów znajdujących się w katalogu kosztów niekwalifikowalnych.
                        </li>
                    </ul>
                    <p className="text-xl black-100 leading-relaxed mb-10">
                        Maksymalna kwota dofinansowania: 10 000 zł brutto.
                    </p>
                </Question>
                <Question>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Gdzie i jak złożyć wniosek?
                    </h2>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Wniosek składa się tylko przez System Obsługi Dotacji (SOD)
                    </h2>
                    <div className="flex items-center gap-4 mb-6">
                        <a href="https://generator.niw.gov.pl/login" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-malina-100 text-white font-bold rounded-full hover:bg-red-600 transition-all flex items-center gap-2">
                            Złóż wniosek <ExternalLink size={18} />
                        </a>
                    </div>
                </Question>
                <Question>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Jak dobrze napisać wniosek?
                    </h2>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Uzasadnij brak środków
                    </h2>
                    <p className="text-lg black-80 leading-relaxed mb-6">
                        Opisz, dlaczego Twoja organizacja nie może samodzielnie pokryć kosztów udziału w
                        Kongresie (np. brak dotacji, brak środków własnych, niewystarczające wsparcie od
                        partnerów/sponsorów).
                    </p>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Pokaż próbę zdobycia innych funduszy
                    </h2>
                    <p className="text-lg black-80 leading-relaxed mb-6">
                        Opisz, gdzie jeszcze próbowaliście zdobyć środki – np. czy pisaliście do samorządu,
                        sponsorów, itp.
                    </p>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Pokaż wiarygodność
                    </h2>
                    <p className="text-lg black-80 leading-relaxed mb-6">
                        Podaj rekomendacje, doświadczenie organizacji, rejestrację w bazach (np. jako
                        OPP), informacje o dotychczasowej działalności.
                    </p>

                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Sporządź budżet zgodnie z zasadami
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            Brutto, jeśli nie możecie odzyskać VAT-u.
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            Nie wpisuj sprzętu powyżej 10 000 zł.
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            Koszty podróży – zgodne z rozporządzeniem o podróżach służbowych.
                        </li>

                    </ul>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Dobre praktyki przy składaniu wniosku:
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                    <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                        Wskaż wyraźnie, dlaczego udział w Kongresie jest istotny dla Twojej organizacji.
                    </li>
                    <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                        Dołącz zaproszenie, program wydarzenia lub potwierdzenie rejestracji na Kongres.
                    </li>

                    <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                        Napisz koniecznie, że udział w Kongresie jest bezpłatny i otwarty dla wszystkich przedstawicieli organizacji społeczeństwa obywatelskiego.
                    </li>
                    <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                        Opisz, jakie działania podejmiesz po wydarzeniu (np. dzielenie się wiedzą).
                    </li>
                    <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                        Pokaż, że próbowałeś zdobyć finansowanie gdzie indziej (np. samorząd, sponsorzy).
                    </li>
                    <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                        Zadbaj o poprawność budżetu – każdy koszt musi być uzasadniony i realny.
                    </li>
                    </ul>
                </Question>
                <Question>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Warunki kluczowe (najważniejsze dla oceny)
                    </h2>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        We wniosku trzeba jasno wykazać:
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            Związek z działalnością organizacji <br />– wydarzenie musi być powiązane z celami statutowymi
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            Znaczenie wydarzenia <br />– dlaczego jest ważne dla organizacji/sektora
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            Konkretne efekty udziału <br />– zdobycie wiedzy,<br />– nawiązanie partnerstw,<br />– udział w debacie publicznej
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            Racjonalność udziału osób <br />– standardowo: 1–2 osoby (maks. 3),<br />– więcej tylko przy dobrym uzasadnieniu
                        </li>
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