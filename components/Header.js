import { ConnectButton } from "web3uikit"
import Link from "next/link"
export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center bg-black">
            <h1 className="py-4 px-4 font-bold text-3xl text-white">Nft Marketplace</h1>
            <div className="flex flex-row items-center">
                <Link href="/" className="mr-4 p-6 text-white">
                    Home
                </Link>
                <Link href="/sell" className="mr-4 p-6 text-white">
                    Sell
                </Link>
                <ConnectButton />
            </div>
        </nav>
    )
}
