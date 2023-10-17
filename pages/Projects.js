import { SiNextdotjs, SiReact, SiHtml5, SiTailwindcss, SiCss3, SiExpress, SiMongodb, SiJavascript } from "react-icons/si"
import { DiNodejs } from "react-icons/di"
import Link from "next/link"


function Projects() {
    return (
        <div id="Projects" >
            <div className="min-h-screen flex flex-col ">
                <h1 className="mt-16 font-sans font-semibold text-4xl text-slate-600 text-center ">Projects</h1>
                <p className=" text-center lg:mx-32 m-10">
                    I am a full-stack developer with a passion for building innovative and user-friendly web applications. I have a strong foundation in both front-end and back-end development, and I am proficient in a wide range of technologies, including:
                </p>
                <div class="lg:grid lg:grid-cols-3 gap-4 mx-10 grid grid-cols-1">
                    <div className="flex bg-green-500  m-3 justify-center items-center h-32 rounded-md">

                        <Link href={'/projects/harmony'}>
                            Harmony
                        </Link>
                    </div>
                    <div className="flex bg-green-500 m-3 justify-center items-center  h-32 rounded-md">E-Commerce</div>
                    <div className="flex bg-green-500 m-3 justify-center items-center  h-32 rounded-md">AccountWaale</div>
                    <div className="flex bg-green-500 m-3 justify-center items-center  h-32 rounded-md">Whatsapp-Clone</div>
                    <div className="flex bg-green-500 m-3 justify-center items-center  h-32 rounded-md">DrumPad</div>
                </div>
            </div>



        </div>
    )
}
export default Projects