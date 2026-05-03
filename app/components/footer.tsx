import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-malina text-white py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <img src="stol.svg" width="250" alt="Okrągły Stół Logo" className=" pointer-events-none" />
                        </div>
                        <p className="text-sm opacity-90 font-light">
                            Partnerem wydarzenia jest Fundacja PZU
                        </p>
                    </div>
                    <div className="flex flex-col space-y-8 text-sm">
                        <div className="space-y-2">
                            <Link href="https://umarlestatuty.pl/polityka-prywatnosci" className="block hover:underline opacity-90">
                                Polityka prywatności
                                <ExternalLinkIcon className="inline-block w-3 h-3 ml-1" />
                            </Link>
                            <Link href="/rodo" className="block hover:underline">
                                RODO
                            </Link>
                        </div>
                        <div className="opacity-80 leading-relaxed pt-4">
                            © {new Date().getFullYear()} Stowarzyszenie
                            Umarłych Statutów
                        </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end space-y-8">
                        <a href="https://sus.org.pl" target="_blank" rel="noopener noreferrer" className="h-12 w-auto opacity-100 invert brightness-0">
                            <img src="/sus-navbar.svg" alt="SUS Logo" className="h-full" />
                        </a>
                        <a href="https://pzu.pl" target="_blank" rel="noopener noreferrer" className="h-10 w-auto opacity-100 invert brightness-0">
                            <img src="/pzu-navbar.svg" alt="PZU Logo" className="h-full" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}