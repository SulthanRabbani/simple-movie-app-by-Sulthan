import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-black">
            <div className="container p-4 mx-auto font-bold tracking-widest text-neutral-100 max-w-7xl font-michroma">
                <Link href={"/"}>
                    <a className="text-base text-yellow-300 md:text-2xl">Movie
                        <span className="text-red-600">App</span>
                        <p className="text-sm text-white w-fit">By Sulthan Taqi Rabbani</p>
                    </a>
                </Link>
            </div>
        </nav>
    )
}