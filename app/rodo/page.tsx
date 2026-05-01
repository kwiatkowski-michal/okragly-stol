import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'RODO',
}

export default async function OchronaDanych() {
    return (
        <>
            <section className="relative pt-16 pb-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold black-100 mb-6">
                        Informacja o przetwarzaniu danych osobowych (RODO)
                    </h1>
                    <p className="text-lg black-80 leading-relaxed mb-8">
                        Na podstawie art. 13 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), dalej jako „RODO”, informujemy, jak niżej.
                    </p>
                </div>

                <NewSection>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Administrator danych osobowych
                    </h2>
                    <p className="text-lg black-80 leading-relaxed mb-10">
                        Administratorem Pana/Pani danych osobowych jest Stowarzyszenie na rzecz Praworządności w Szkołach „Stowarzyszenie Umarłych Statutów” z siedzibą w Chełmie, KRS: 0000830651, adres poczty elektronicznej: kontakt@sus.org.pl, adres do doręczeń elektronicznych: AE:PL-89866-99301-AGBFF-32, dalej także jako: „Stowarzyszenie”.
                    </p>
                </NewSection>

                <NewSection>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        —  Cel i podstawa prawna przetwarzania danych osobowych
                    </h2>
                    <h2 className="text-xl font-extrabold black-80 mb-3">
                        Pana/Pani dane osobowe przetwarzamy w celu:
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                przeanalizowania zgłoszonej przez Pana/Panią sprawy i udzielenia Panu/Pani odpowiedzi, konsultacji lub podjęcia interwencji w zgłoszonej przez Pana/Panią sprawie – na podstawie naszego prawnie uzasadnionego interesu, którym jest realizacja celów statutowych Stowarzyszenia, w tym realizacja przez Stowarzyszenie projektu, grantu, zadania lub innego tego typu programu, czyli art. 6 ust. 1 lit. f RODO oraz zgody tj. art. 6 ust. 1 lit. a, a jeżeli w zgłoszonej sprawie znajdą się Pana/Pani dane osobowe szczególnych kategorii (np. dotyczące zdrowia, poglądów politycznych), będziemy je przetwarzać na podstawie Pana/Pani zgody, czyli art. 9 ust. 2 lit. a RODO. Jeżeli dane osobowe będą pochodziły od osoby nieposiadającej pełnej zdolności do czynności prawnych, zaś jej dane będą przetwarzane w związku z działalnością interwencyjną Stowarzyszenia (tj. udzieleniem konsultacji, bądź podjęciem interwencji w zgłoszonej przez nią sprawie) przetwarzanie danych osobowych odbywać się będzie na podstawie odpowiednio art. 6 ust. 1 lit. d RODO, bądź art. 9 ust. 2 lit. c — tj. celem ochrony żywotnych interesów osoby, której dane dotyczą;
                            </div>
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                zabezpieczenia naszego interesu prawnego, w tym ustalenia, dochodzenia lub obrony przed roszczeniami, a także, jeśli będzie wynikało to z przepisów prawa lub zobowiązań Stowarzyszenia, w celach archiwalnych – na podstawie art. 6 ust. 1 lit. f RODO.
                            </div>
                        </li>
                    </ul>
                </NewSection>

                <NewSection>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Odbiorcy danych osobowych i okres ich przetwarzania
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                Odbiorcami Pana/Pani danych osobowych będą członkowie, wolontariusze i współpracownicy Stowarzyszenia, a także podmioty, którym powierzamy przetwarzanie danych osobowych w oparciu o stosowne umowy powierzenia. Przekażemy Pana/Pani dane organom władzy publicznej (takim jak np. Policja, prokuratura, sąd), tylko jeżeli zażądają tego na wiążącej nas podstawie prawnej, a w innych przypadkach: jeżeli Pan/Pani wyrazi na to osobną zgodę. W przypadku, gdy udzielana odpowiedź, porada lub konsultacja ma miejsce w ramach realizowanego przez Stowarzyszenie projektu, grantu, zadania lub innego tego typu programu – Pana/Pani dane osobowe mogą być przekazane do podmiotu uprawnionego do kontroli realizacji tego projektu, grantu, zadania lub innego tego typu programu.
                            </div>
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                Pana/Pani dane mogą być przekazywane do Google LLC z siedzibą w Stanach Zjednoczonych, ponieważ korzystamy z usługi Google Workspace oraz do Slack Technologies, LLC z siedzibą w Stanach Zjednoczonych, ponieważ korzystamy z usługi Slack. Wskazani dostawcy są uczestnikami programu Data Privacy Framework, który potwierdza zapewnienie przez Google LLC oraz Slack Technologies, LLC odpowiedniego poziomu ochrony danych osobowych.
                            </div>
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                Pana/Pani dane osobowe będą przetwarzane przez okres 5 lat od wysłania ostatniej wiadomości. W przypadku, gdy udzielana odpowiedź, porada lub konsultacja ma miejsce w ramach realizowanego przez Stowarzyszenie projektu, grantu, zadania lub innego tego typu programu – Pana/Pani dane osobowe mogą być przetwarzane przez okres dłuższy niż 5 lat, który będzie wynikał z warunków umowy, regulaminu lub innego tego typu dokumentu, dotyczącego realizowanego projektu, grantu lub innego tego typu programu, wiążących Stowarzyszenie.
                            </div>
                        </li>
                    </ul>
                </NewSection>

                <NewSection>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Na podstawie RODO przysługują Panu/Pani prawa:
                    </h2>
                    <ul className="flex flex-col gap-4 mb-10">
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                dostępu do swoich danych osobowych (art. 15 RODO) i ich sprostowania (art. 16 RODO), ograniczenia przetwarzania (art. 18 RODO), prawo do żądania przeniesienia swoich danych osobowych (art. 20 RODO), prawo do wniesienia sprzeciwu wobec przetwarzania danych osobowych odbywającego się na podstawie uzasadnionego interesu administratora (art. 21 RODO);
                            </div>
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                cofnięcia zgody na przetwarzanie danych osobowych, bez wpływu na zgodność przetwarzania danych osobowych, które nastąpiło przed cofnięciem zgody i bez wpływu na zgodność przetwarzania danych osobowych na innych podstawach niż zgoda osoby, której dane dotyczą;
                            </div>
                        </li>
                        <li className="flex items-start gap-3 black-80 text-lg leading-relaxed">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B4B4B]" />
                            <div>
                                prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
                            </div>
                        </li>
                    </ul>
                </NewSection>

                <NewSection>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Podanie danych osobowych
                    </h2>
                    <p className="text-lg black-80 leading-relaxed mb-10">
                        Podanie danych osobowych jest dobrowolne, ale niezbędne w celu prowadzenia konwersacji, wymiany informacji i udzielenia nieodpłatnego poradnictwa prawnego.
                    </p>
                </NewSection>

                <NewSection>
                    <h2 className="text-xl font-extrabold text-red-500 mb-6">
                        — Zautomatyzowane podejmowanie decyzji i profilowanie
                    </h2>
                    <p className="text-lg black-80 leading-relaxed mb-10">
                        Podane dane osobowe nie będą służyć do monitorowania zachowania celem zautomatyzowanego podejmowania decyzji lub profilowania.
                    </p>
                </NewSection>
            </section>
        </>
    )
}

function NewSection({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}