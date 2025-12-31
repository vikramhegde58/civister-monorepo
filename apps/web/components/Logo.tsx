import Link from "next/link"
import Image from "next/image"
import logo from "../assets/logo.png"

export const Logo = () => {
    return <Link href="/" className="flex items-center gap-2 group">
    <div className="relative flex items-center justify-center rounded-lg overflow-hidden">
       <Image src={logo} alt="Civister" width={65} height={65} />
    </div>
    <span className="font-bold text-lg sm:text-lg tracking-tight text-black/50">CIVISTER</span>
 </Link>
}