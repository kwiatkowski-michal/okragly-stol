"use client";
import './globals.css';
import React, { useState } from 'react';
import { MdLink, MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosBus, IoIosClipboard, IoIosDocument, IoIosDownload, IoMdDocument, IoMdGlobe } from 'react-icons/io';
import { useTheme } from 'next-themes';
import { ExternalLinkIcon } from 'lucide-react';

const App = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('agenda');

  const agendaItems = [
    {
      time: "09:00",
      tag: "REJESTRACJA",
      title: "Rejestracja i powitalna kawa",
      description: "Odbiór identyfikatorów, kawa, networking przed oficjalnym rozpoczęciem."
    },
    {
      time: "10:00",
      tag: "OTWARCIE",
      title: "Uroczyste otwarcie Okrągłego Stołu",
      description: "Słowo wstępne organizatorów — SUS i Fundacja PZU. Wprowadzenie w tematykę Krajowej Strategii Młodzieżowej i cele konsultacji."
    },
    {
      time: "10:30",
      tag: "PANEL DYSKUSYJNY",
      title: "„Diagnoza Młodzieży 2026” — co mówią dane?",
      description: "Prezentacja wyników raportu przygotowanego przez Polskie Towarzystwo Polityki Społecznej. Dyskusja ekspercka z udziałem zaproszonych gości."
    }
  ];
  const downloads = [
    {
      title: "Diagnoza Młodzieży 2026",
      mainIcon: IoIosDocument,
      short: "Raport",
      description: "Raport przygotowany przez Polskie Towarzystwo Polityki Społecznej. Stanowi analizę ponad 200 badań dotyczących życia młodych ludzi w Polsce.",
      buttons: [
        { label: "Diagnoza", link: "https://www.gov.pl/attachment/947513a7-db19-446d-b9ea-774dcf631333", icon: IoMdDocument },
        { label: "Streszczenie Diagnozy", link: "https://www.gov.pl/attachment/805476f9-d5c0-486c-93bc-ab1159063d28", icon: IoMdDocument }
      ]
    },
    {
      title: "Masz wpływ na strategię",
      mainIcon: IoMdGlobe,
      short: "WWW",
      description: "Fundacja Civis Polonus uruchomiła serwis „Masz wpływ na strategię”. Pokazuje on, jak w dialog o Strategii mogą włączyć się młodzi ludzie i szkoły.",
      buttons: [
        { label: "Strona główna", link: "https://maszwplywnastrategie.pl/", icon: ExternalLinkIcon },
        { label: "Lekcje i debaty", link: "https://maszwplywnastrategie.pl/lekcje-i-debaty/", icon: ExternalLinkIcon }
      ]
    },
    {
      title: "Wypełnij ankietę",
      mainIcon: IoIosClipboard,
      short: "Ankieta",
      description: "Fundacja Civis Polonus zaprasza do wypełnienia ankiet, dzięki którym możecie już teraz zabrać głos na temat Strategii. Zebrane dane posłużą do opracowania raportu.",
      buttons: [
        { label: "Ankieta (wiek: 13-18)", link: "https://maszwplywnastrategie.pl/formularz-dla-mlodziezy/", icon: ExternalLinkIcon },
        { label: "Ankieta (wiek: 19-29)", link: "https://maszwplywnastrategie.pl/formularz-dla-mlodych-doroslych/", icon: ExternalLinkIcon }
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden ">

      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-malina font-bold text-sm tracking-widest uppercase mb-4 block">
              — WYDARZENIE OGÓLNOPOLSKIE
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej
            </h1>
            <p className="text-xl mb-10 leading-relaxed">
              Polska tworzy pierwszą od ponad 20 lat Krajową Strategię Młodzieżową. Weź udział w konsultacjach – Twój głos ma realny wpływ!
            </p>

            <div className="rounded-lg text-sm gap-8 mb-12 pt-8">
              <div className="grid grid-cols-[auto_1fr] gap-x-12 gap-y-6 items-baseline">
                <span className="uppercase font-bold tracking-wider">Data</span>
                <span className="text-malina uppercase font-medium">25 Maja 2026</span>
                <span className="uppercase font-bold tracking-wider">Miejsce</span>
                <span className="text-malina uppercase font-medium">Warszawa</span>
                <span className="uppercase font-bold tracking-wider">Forma</span>
                <span className="text-malina uppercase font-medium">Wydarzenie stacjonarne i udział bezpłatny</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#agenda" className="px-8 py-4 border-2 black-100 font-bold rounded-full dark:hover:bg-white/10 transition-all flex items-center gap-2">
                Agenda <MdOutlineArrowForwardIos />
              </a>
              <a href="#rejestracja" className="px-8 py-4 bg-malina text-white font-bold rounded-full transition-all shadow-xl shadow-malina/30 hover:bg-malinaDark hover:shadow-none flex items-center gap-2">
                Zarejestruj się <MdOutlineArrowForwardIos />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-[-130] opacity-40 sm:opacity-100 md:right-[-250] lg:right-[-350] sm:w-1/2 h-full pointer-events-none visible">
          <img src="/ornament.png" alt="Ornament" className="h-150 object-contain" />
        </div>
      </section>

      {/*01*/}
      <section id="o-wydarzeniu" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-24">
              <span className="font-special text-8xl font-extralight text-[#D8C8C8] leading-none">01</span>
            </div>
            <div className="flex-1">
              <span className="text-malina font-bold text-sm tracking-widest uppercase mb-2 block">
                — O WYDARZENIU
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Nic o młodych bez młodych</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 leading-relaxed">
                  <p>
                    W marcu 2026 roku Ministerstwo Edukacji Narodowej zainaugurowało prace nad Krajową Strategią Młodzieżową — pierwszym takim dokumentem od ponad dwóch dekad. Na jej podstawie rząd wyznaczy konkretne działania dotyczące ponad 5,7 mln osób – młodzieży i młodych dorosłych.</p>
                  <p>
                    Ogólnopolski Okrągły Stół to jedno z kluczowych wydarzeń w procesie konsultacji społecznych. Organizujemy je wspólnie — Stowarzyszenie Umarłych Statutów (SUS) i Fundacja PZU — bo wierzymy, że strategia dla młodych musi powstawać z młodymi.
                  </p>
                  <p>Podczas spotkania uczniowie, studenci, młodzi dorośli, przedstawiciele organizacji pozarządowych  i osoby pracujące z młodzieżą zasiądą przy jednym stole, by dyskutować o tym, co zmienić w takich obszarach, jak edukacja, zdrowie psychiczne, rynek pracy czy zaangażowanie społeczne. Wnioski z debaty trafią bezpośrednio do Ministerstwa Edukacji Narodowej.</p>
                  <div className="pl-10 mt-20 border-l-4 border-malina rounded-r-2xl">
                    <h3 className="black-100 text-lg font-bold mb-2">„Nic o nich bez nich. I to powinno nam przyświecać przez najbliższe miesiące pracy”</h3>
                    <p className="text-md font-light black-60">— Barbara Nowacka, Minister Edukacji Narodowej</p>
                  </div>
                </div>
                <div className="flex flex-col gap-10 self-start">
                  <div className="pl-10 lg:ml-20 border-l-4 border-malina rounded-r-2xl">
                    <p className="text-malina font-bold text-sm tracking-widest uppercase mb-2 block">DLACZEGO TO WAŻNE?</p>
                    <p className="text-sm font-light black-60">Konsultacje Strategii mają charakter otwarty i włączający. Zaproszeni są do nich młodzi ludzi i eksperci, którzy mogą zgłaszać swoje opinie, doświadczenia i propozycje rozwiązań. To realny wpływ na kształt Strategii.
                    </p>
                  </div>
                  <div className="pl-10 lg:ml-20 border-l-4 border-malina rounded-r-2xl">
                    <p className="text-malina font-bold text-sm tracking-widest uppercase mb-2 block">Co mówi Diagnoza Młodzieży?</p>
                    <p className="text-sm font-light black-60">Sytuacja zawodowa młodych nie sprzyja usamodzielnianiu się. Połowa młodych dorosłych w wieku 25–34 lat nadal mieszka z rodzicami. Wysokie koszty najmu i zakupu mieszkań w dużych miastach pochłaniają od 35% do nawet 55% dochodu. Państwo musi znaleźć odpowiedź na te wyzwania.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*02*/}
      <section id="agenda" className="py-24 bg-black/3 dark:bg-white/3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="font-special w-24 shrink-0">
              <span className="font-special text-8xl font-extralight text-[#D8C8C8] leading-none">02</span>
            </div>
            <div className="flex-1">
              <span className="text-malina font-bold text-sm tracking-widest uppercase mb-2 block">
                — PROGRAM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Agenda Okrągłego Stołu</h2>

              <div className="space-y-12">
                <p>Agenda zostanie ogłoszona w najbliższym czasie.</p>
                {/* {agendaItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-gray-200 pb-12 last:border-0">
                    <div className="md:w-32">
                      <span className="text-2xl font-bold">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mb-4 text-malina border border-malina-100">
                        {item.tag}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className= leading-relaxed max-w-2xl">{item.description}</p>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*03*/}
      <section id="pobierz" className="py-24">
        <div className="relative max-w-7xl mx-auto p-10 sm:px-6 lg:px-8 bg-malina dark:border dark:border-malina dark:bg-transparent shadow-xl shadow-malina/30 rounded-3xl">
          <div className="absolute invisible lg:visible inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

            <div className="absolute right-0 top-0 bottom-0 min-w-[600px]">
              {/* Grupa lewa (te dwa okręgi bardziej wysunięte do środka) */}
              <div className="absolute right-[49.5%] top-1/2 -translate-y-1/2 flex flex-col gap-18 translate-x-0.5">
                <div className="w-90 h-90 border border-white/40 rounded-full" />
                <div className="w-90 h-90 border border-white/40 rounded-full -mt-20" />
              </div>

              {/* Grupa prawa (te dwa okręgi przy samej krawędzi) */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-20">
                <div className="w-90 h-90 border border-white/40 rounded-full" />
                <div className="w-90 h-90 border border-white/40 rounded-full -mt-20" />
              </div>
            </div>

          </div>

          <div className="absolute visible lg:invisible inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

            <div className="absolute right-0 top-0 bottom-0 ">


              {/* Grupa prawa (te dwa okręgi przy samej krawędzi) */}
              <div className="absolute -right-16 top-1/5 -translate-y-1/2 flex flex-col gap-20">
                <div className="w-90 h-90 border border-white/40 rounded-full" />
                <div className="w-90 h-90 border border-white/40 rounded-full -mt-20" />
              </div>
            </div>

          </div>


          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-24 shrink-0">
              <span className="font-special text-8xl font-extralight text-[#D8C8C8] leading-none">03</span>
            </div>
            <div className="flex-1">
              <span className="dark:text-malina text-white font-bold text-sm tracking-widest uppercase mb-2 block">
                — Materiały dodatkowe
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Dowiedz się więcej</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {downloads.map((doc, idx) => (
                  <div key={idx} className="bg-white/75 dark:bg-white/10 backdrop-blur-xs border border-white/15 dark:shadow-white/4 shadow-lg shadow-black/5 inset-shadow-md inset-shadow-black/13 dark:inset-shadow-white/10 rounded-3xl p-6 flex flex-col h-full">
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <doc.mainIcon className="w-25 h-25 text-malina" />
                    </div>
                    <span className="text-malina font-bold text-[13px] tracking-widest block uppercase">{doc.short}</span>
                    <h3 className="text-xl font-bold  mb-4">{doc.title}</h3>
                    <p className=" text-md mb-8 leading-relaxed">{doc.description}</p>
                    <div className="flex flex-col gap-3 mt-auto">
                      {doc.buttons?.map((btn, btnIdx) => {
                        const Icon = btn.icon;
                        return (
                          <a
                            key={btnIdx}
                            href={btn.link || "#"}
                            className="w-full py-3 text-malina dark:text-white border border-malina dark:border-white rounded-full font-bold text-sm transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap"
                          >
                            <span className="mt-[2px]">{btn.label}</span> {Icon && <Icon size={17} />}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*04*/}
      <section id="rejestracja" className="pb-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-24">
              <span className="font-special text-8xl font-extralight text-[#D8C8C8] leading-none">04</span>
            </div>
            <div className="flex-1">
              <span className="text-malina font-bold text-sm tracking-widest uppercase mb-2 block">
                — ZAPISY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Zarejestruj się</h2>
              <div className="max-w-2xl mb-12 space-y-6">
                <p>Zapraszamy uczniów, studentów, przedstawicieli młodzieżowych rad i organizacji pozarządowych, pracujących z młodymi. Dla każdego podmiotu przewidujemy miejsce dla jednego przedstawiciela.
                </p>
                <p className="font-medium">Liczba miejsc jest ograniczona. Po rejestracji otrzymasz potwierdzenie e-mailem wraz z szczegółami logistycznymi.</p>
                <a href="#" className="inline-flex items-center gap-3 px-10 py-4 bg-malina text-white font-bold rounded-full hover:bg-malinaDark hover:shadow-none shadow-xl shadow-malina/30 transition-all">
                  Rejestracja od 6 maja 2026 r. <MdOutlineArrowForwardIos size={16} />
                </a>
              </div>

              <div className="absolute z-10 max-w-2xl mr-4 h-auto p-8 bg-white/75 dark:bg-white/10 backdrop-blur-xs border border-white/15 dark:shadow-white/4 shadow-lg shadow-black/5 inset-shadow-md inset-shadow-black/13 dark:inset-shadow-white/10 rounded-[40px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12">
                    <IoIosBus className="text-malina w-10 h-10" />
                  </div>
                  <h2 className="text-xl font-bold black-100">
                    Zwrot kosztów
                  </h2>
                </div>
                <p className="leading-relaxed mb-8 text-lg">
                  Dla uczestników spoza Warszawy Partner Okrągłego Stołu – Narodowy Instytut Wolności umożliwia ubieganie się o zwrot kosztów przejazdu i noclegu.
                </p>
                <p className="leading-relaxed mb-8 text-lg font-bold">Dofinansowanie udzielane będzie w ramach konkursu PROO 5.</p>
                <a href="/zwrot-kosztow" className="inline-flex items-center gap-3 px-8 py-3 border-2 border-malina rounded-full text-malina font-semibold transition-all hover:bg-malina hover:text-white">
                  Jak skorzystać? <MdOutlineArrowForwardIos size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-[-130] opacity-40 sm:opacity-100 md:right-[-250] lg:right-[-350] sm:w-1/2 h-full pointer-events-none visible">
          <img src="/kola_light.png" alt="Koła" className="dark:hidden h-190 object-contain max-w-none" />
          <img src="/kola_dark.png" alt="Koła" className="hidden dark:block h-190 object-contain max-w-none" />
        </div>
      </section>
      {/*05*/}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 mb-16">
            <div className="w-24">
              <span className="font-special text-8xl font-extralight text-[#D8C8C8] leading-none">05</span>
            </div>
            <div>
              <span className="text-malina font-bold text-sm tracking-widest uppercase mb-2 block">
                — ZAANGAŻOWANI
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">Organizatorzy i partnerzy</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "ORGANIZATOR", name: "Stowarzyszenie Umarłych Statutów", logo: "/logos/sus/sus.svg", link: "https://sus.org.pl" },
              { label: "PARTNER", name: "Fundacja PZU", logo: "/logos/pzu/pzu.svg", link: "https://fundacja.pzu.pl" },
              { label: "PARTNER", name: "Narodowy Instytut Wolności", logo: "/logos/niw/niw.svg", link: "https://niw.gov.pl" },
              { label: "PATRONAT HONOROWY", name: "Ministerstwo Edukacji Narodowej", logo: "/logos/men/men.svg", link: "https://gov.pl/edukacja" }
            ].map((partner, i) => (
              <a key={i} href={partner.link} target="_blank" rel="noopener noreferrer" className="h-full">
                <div key={i} className="bg-white/75 dark:bg-white/10 backdrop-blur-xs border border-white/15 dark:shadow-white/4 shadow-lg shadow-black/5 inset-shadow-md inset-shadow-black/13 dark:inset-shadow-white/10 p-8 h-full rounded-2xl text-center transition-shadow">
                  <div className="text-5xl mb-6 transition-all duration-500">
                    <img src={partner.logo} alt={partner.name} className="h-20 w-full object-contain dark:hidden" />
                    <img src={partner.logo.replace('.svg', '_white.svg')} alt={partner.name} className="h-20 w-full object-contain hidden dark:block" />
                  </div>
                  <p className="text-[10px] font-bold text-malina tracking-[0.2em] mb-2 uppercase">{partner.label}</p>
                  <h4 className="font-bold text-lg text-black dark:text-white leading-tight">{partner.name}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/*06*/}
      <section id="kontakt" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-24">
              <span className="font-special text-8xl font-extralight text-[#D8C8C8] leading-none">06</span>
            </div>
            <div className="flex-1">
              <span className="text-malina font-bold tracking-widest uppercase mb-2 block">
                — KONTAKT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-16">Masz pytania?</h2>

              <div className="grid md:grid-cols-2 gap-16 mb-24">
                <div>
                  <p className="text-md font-bold text-malina tracking-widest mb-4 uppercase">E-MAIL</p>
                  <a href="mailto:kontakt@sus.org.pl" className="border-b border-red-500 pb-8 text-2xl md:text-3xl font-bold hover:text-malina transition-colors">
                    kontakt@sus.org.pl
                  </a>
                </div>
                <div className="">
                  <p className="text-md font-bold text-malina tracking-widest mb-4 uppercase">DLA MEDIÓW</p>
                  <a href="mailto:media@sus.org.pl" className="border-b border-red-500 pb-8 text-2xl md:text-3xl font-bold hover:text-malina transition-colors">
                    media@sus.org.pl
                  </a>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 pt-12">
                <div>
                  <h4 className="font-bold uppercase text-md mb-4 text-malina">O STOWARZYSZENIU UMARŁYCH STATUTÓW</h4>
                  <p className="black-60 text-md leading-relaxed">
                    SUS to pierwsza i największa w Polsce organizacja broniąca praw uczniów, działająca od 2018 roku. Zrzesza uczniów i studentów, którzy monitorują stan edukacji i interweniują w przypadkach łamania prawa w szkołach.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-md mb-4 text-malina">O FUNDACJI PZU</h4>
                  <p className="black-60 text-md leading-relaxed">
                    Fundacja PZU prowadzi działania filantropijne od 2004 roku. W 2026 roku — we współpracy z Fundacją Civis Polonus — koordynuje ogólnopolski proces konsultacji nad Krajową Strategią Młodzieżową.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;