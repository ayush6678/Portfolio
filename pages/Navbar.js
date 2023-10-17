import Link from "next/link";

export default function Navbar() {

    return (
        <div className=" fixed bg-teal-500 w-screen">
            <nav className=" ">
                <ul className="justify-center lg:justify-end lg:mr-7 hidden lg:flex">
                    <li className=" m-4"><Link href={'/'}>Home</Link></li>
                    <li className=" m-4" ><Link href={'/#About'}>About</Link></li>
                    <li className=" m-4" ><Link href={'/#Projects'}>Projects</Link></li>
                    <li className=" m-4">Resume</li>
                    <li className=" m-4"><Link href={'/Contact'}>Contact Me</Link></li>
                </ul>
            </nav>
        </div>
    )
}