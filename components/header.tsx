import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl tracking-widest-custom font-extrabold text-theta-red">
            <span className="font-['Open_Sans'] uppercase">Theta Tau | Mu Delta Chapter</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
          </nav>
        </div>
      </div>
    </header>
  )
}

