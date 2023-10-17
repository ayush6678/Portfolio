import Link from "next/link";
import Navbar from "../Navbar";

function Harmony(){

    return(
        <div>
        <Navbar/>
        <div className=" m-16">
        project description here!

        </div>
        <Link href={'/#Projects'}>get back</Link>
        </div>
    )
}

export default Harmony;