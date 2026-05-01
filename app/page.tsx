"use client";
import './globals.css';
import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Info,
  Download,
  ChevronRight,
  Mail,
  ArrowRight,
  ExternalLink,
  Bus,
  FileText
} from 'lucide-react';

const App = () => {
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
    { title: "Diagnoza Młodzieży 2026", description: "Kompleksowy raport MEN i Polskiego Towarzystwa Polityki Społecznej. Analiza ponad 200 badań dotyczących życia młodych ludzi w Polsce." },
    { title: "Diagnoza Młodzieży 2026", description: "Kompleksowy raport MEN i Polskiego Towarzystwa Polityki Społecznej. Analiza ponad 200 badań dotyczących życia młodych ludzi w Polsce." },
    { title: "Diagnoza Młodzieży 2026", description: "Kompleksowy raport MEN i Polskiego Towarzystwa Polityki Społecznej. Analiza ponad 200 badań dotyczących życia młodych ludzi w Polsce." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 block">
              — WYDARZENIE OGÓLNOPOLSKIE
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold black-100  mb-8">
              Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Pierwsze w Polsce od ponad 20 lat konsultacje na rzecz Krajowej Strategii Młodzieżowej.<br />Twój głos ma realny wpływ.
            </p>

            <div className="rounded-lg text-sm gap-8 mb-12 pt-8"> {/* Cały kontener dla tła */}
              <div className="grid grid-cols-[auto_1fr] gap-x-12 gap-y-6 items-baseline">
                <span className="text-gray-500 uppercase tracking-wider">Data</span>
                <span className="text-red-600 uppercase font-medium">25 Maja 2026</span>
                <span className="text-gray-500 uppercase tracking-wider">Miejsce</span>
                <span className="text-red-600 uppercase font-medium">Warszawa</span>
                <span className="text-gray-500 uppercase tracking-wider">Forma</span>
                <span className="text-red-600 uppercase font-medium">Wydarzenie stacjonarne i udział bezpłatny</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#agenda" className="px-8 py-4 border-2 border-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2">
                Agenda <ArrowRight size={18} />
              </a>
              <a href="#rejestracja" className="px-8 py-4 bg-malina-100 text-white font-bold rounded-full hover:bg-red-600 transition-all shadow-lg shadow-red-200 flex items-center gap-2">
                Zarejestruj się <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-[-130] md:right-[-250] lg:right-[-350] opacity-40 sm:w-1/2 h-full pointer-events-none visible">
          <img src="/ornament.png" alt="Ornament" className="h-150 object-contain" />
        </div>
      </section>

      {/*01*/}
      <section id="o-wydarzeniu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-24">
              <span className="text-8xl font-extralight white-60 leading-none">01</span>
            </div>
            <div className="flex-1">
              <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-2 block">
                — O WYDARZENIU
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Nic o nich bez nich.</h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 black-80 leading-relaxed">
                  <p>
                    W marcu 2026 roku Ministerstwo Edukacji Narodowej zainaugurowało prace nad Krajową Strategią Młodzieżową — pierwszym takim dokumentem od ponad dwóch dekad. Na jej podstawie rząd wyznaczy konkretne działania dotyczące ponad 5,7 miliona młodych ludzi w Polsce. </p>
                  <p>
                    Ogólnopolski Okrągły Stół to jedno z kluczowych wydarzeń w procesie konsultacji społecznych. Organizujemy je wspólnie — Stowarzyszenie Umarłych Statutów (SUS) i Fundacja PZU — bo wierzymy, że strategia dla młodych musi powstawać z młodymi.
                  </p>
                  <p>Podczas spotkania uczniowie, studenci, samorządowcy, eksperci i przedstawiciele organizacji pozarządowych zasiądą przy jednym stole, by dyskutować o tym, co naprawdę zmienić w obszarach edukacji, zdrowia psychicznego, rynku pracy i aktywności obywatelskiej. Wnioski trafią bezpośrednio do Ministerstwa Edukacji Narodowej.</p>
                  <div className="pl-10 mt-20 border-l-4 border-red-500 rounded-r-2xl">
                    <h3 className="black-100 text-lg font-bold mb-2">„Nic o nich bez nich. I to powinno nam przyświecać przez najbliższe miesiące pracy.”</h3>
                    <p className="text-md font-light black-60">— Barbara Nowacka, Minister Edukacji Narodowej</p>
                  </div>
                </div>

                <div className="pl-10 lg:ml-20 border-l-4 border-malina-100 rounded-r-2xl self-start">
                  <p className="malina-100 font-bold text-sm tracking-widest uppercase mb-2 block">DLACZEGO TO WAŻNE?</p>
                  <p className="text-sm font-light black-60">Raport „Diagnoza Młodzieży 2026" pokazuje, że 60% nastolatków żyje w chronicznym stresie, a 40% wykazuje objawy depresyjne. To obraz, którego nie można ignorować — i który wymaga systemowej odpowiedzi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*02*/}
      <section id="agenda" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-24 shrink-0">
              <span className="text-8xl font-extralight white-60 leading-none">02</span>
            </div>
            <div className="flex-1">
              <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-2 block">
                — PROGRAM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Agenda dnia</h2>

              <div className="space-y-12">
                {agendaItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-gray-200 pb-12 last:border-0">
                    <div className="md:w-32">
                      <span className="text-2xl font-bold text-slate-800">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mb-4 text-[#F2313E] border-1 border-malina-100">
                        {item.tag}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed max-w-2xl">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*03*/}
      <section id="pobierz" className="py-24">
        <div className="max-w-7xl mx-auto p-10 sm:px-6 lg:px-8 bg-malina-100 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-24 shrink-0">
              <span className="text-8xl font-extralight white-100 leading-none">03</span>
            </div>
            <div className="flex-1">
              <span className="white-100 font-bold text-sm tracking-widest uppercase mb-2 block">
                — DO POBRANIA
              </span>
              <h2 className="text-4xl md:text-5xl font-bold white-100 mb-12">Materiały i strategia</h2>

              <div className="grid lg:grid-cols-3 gap-8">
                {downloads.map((doc, idx) => (
                  <div key={idx} className="bg-white/85 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-6">
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <FileText className="w-25 h-25 malina-100" />
                    </div>
                    <span className="malina-100 font-bold text-[13px] tracking-widest block uppercase">RAPORT</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{doc.title}</h3>
                    <p className="text-gray-500 text-md mb-8 leading-relaxed">{doc.description}</p>
                    <a className="w-full py-3 border border-malina-100 rounded-full font-bold text-sm hover:bg-[#F2313E] hover:text-white transition-all flex items-center justify-center gap-2 text-[#F2313E]">
                      Pobierz <Download size={16} />
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*04*/}
      <section id="rejestracja" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-24">
              <span className="text-8xl font-extralight white-60 leading-none">04</span>
            </div>
            <div className="flex-1">
              <span className="malina-100 font-bold text-sm tracking-widest uppercase mb-2 block">
                — ZAPISY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Zarejestruj się</h2>
              <div className="max-w-2xl text-gray-600 mb-12 space-y-6">
                <p>Udział w Ogólnopolskim Okrągłym Stole jest bezpłatny. Zapraszamy uczniów, studentów, przedstawicieli młodzieżowych rad, samorządów, organizacji pozarządowych, instytucji publicznych i środowisk akademickich.</p>
                <p className="font-medium text-slate-800">Liczba miejsc jest ograniczona. Po rejestracji otrzymasz potwierdzenie e-mailem wraz z szczegółami logistycznymi.</p>
                <a href="#" className="inline-flex items-center gap-3 px-10 py-4 bg-malina-100 text-white font-bold rounded-full hover:bg-[#CE1623] transition-all shadow-lg shadow-red-100">
                  Zarejestruj się <ArrowRight size={18} />
                </a>
              </div>

              <div className="max-w-2xl bg-white/70 backdrop-blur-lg p-8 border border-[#EBE0E0] rounded-[40px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <Bus className="text-[#F2313E] w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1A1A1A]">
                    Zwrot kosztów przejazdu
                  </h2>
                </div>
                <p className="text-[#555555] leading-relaxed mb-8 text-lg">
                  Dla uczestników przyjeżdżających z innych miast organizatorzy{" "}
                  <span className="font-bold text-[#333333]">zapewniają zwrot kosztów przejazdu.</span>
                </p>
                <a href="/zwrot-kosztow" className="inline-flex items-center gap-3 px-8 py-3 bg-white border-2 border-[#FF4D4D] rounded-full text-[#F2313E] font-semibold transition-all hover:bg-[#F2313E] hover:text-white">
                    Jak skorzystać? <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-[-230] md:right-[-250] lg:right-[-350] opacity-40 sm:w-1/2 h-full pointer-events-none visible">
          <img src="/ornament.png" alt="Ornament" className="h-190 object-contain" />
        </div>
      </section>
      {/*05*/}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 mb-16">
            <div className="w-24">
              <span className="text-8xl font-extralight white-60 leading-none">05</span>
            </div>
            <div>
              <span className="malina-100 font-bold text-sm tracking-widest uppercase mb-2 block">
                — ZAANGAŻOWANI
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">Organizatorzy i partnerzy</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "ORGANIZATOR", name: "Stowarzyszenie Umarłych Statutów", logo: "/sus.svg" },
              { label: "PARTNER", name: "Fundacja PZU", logo: "/pzu.svg" },
              { label: "PATRONAT HONOROWY", name: "Ministerstwo Edukacji Narodowej", logo: "/men.svg" },
              { label: "PARTNER", name: "Narodowy Instytut Wolności", logo: "/niw.svg" }
            ].map((partner, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-sm transition-shadow">
                <div className="text-5xl mb-6 transition-all duration-500">
                  <img src={partner.logo} alt={partner.name} className="h-20 w-full object-contain" />
                </div>
                <p className="text-[10px] font-bold malina-100 tracking-[0.2em] mb-2 uppercase">{partner.label}</p>
                <h4 className="font-bold text-sm text-slate-800 leading-tight">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*06*/}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-24">
              <span className="text-8xl font-extralight white-60 leading-none">06</span>
            </div>
            <div className="flex-1">
              <span className="malina-100 font-bold tracking-widest uppercase mb-2 block">
                — KONTAKT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-16">Masz pytania?</h2>

              <div className="grid md:grid-cols-2 gap-16 mb-24">
                <div>
                  <p className="text-md font-bold malina-100 tracking-widest mb-4 uppercase">E-MAIL</p>
                  <a href="mailto:kontakt@sus.org.pl" className="border-b border-red-500 pb-8 text-2xl md:text-3xl font-bold hover:malina-100 transition-colors">
                    kontakt@sus.org.pl
                  </a>
                </div>
                <div className="">
                  <p className="text-md font-bold malina-100 tracking-widest mb-4 uppercase">DLA MEDIÓW</p>
                  <a href="mailto:media@sus.org.pl" className="border-b border-red-500 pb-8 text-2xl md:text-3xl font-bold hover:malina-100 transition-colors">
                    media@sus.org.pl
                  </a>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 pt-12">
                <div>
                  <h4 className="font-bold uppercase text-md mb-4 text-red-600">O STOWARZYSZENIU UMARŁYCH STATUTÓW</h4>
                  <p className="text-gray-500 text-md leading-relaxed">
                    SUS to pierwsza i największa w Polsce organizacja broniąca praw uczniów, działająca od 2018 roku. Zrzesza uczniów i studentów, którzy monitorują stan edukacji i interweniują w przypadkach łamania prawa w szkołach.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-md mb-4 text-red-600">O FUNDACJI PZU</h4>
                  <p className="text-gray-500 text-md leading-relaxed">
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