import Link from "next/link";
import Navbar from "../Navbar";
import 'app/globals.css'
import whatsappImage from "../whatsappImage.png"

function Whatsapp() {

    return (
        <div>
            <Navbar />
            <div className=" flex flex-col">
                <div style={{
                    backgroundImage: `url('${whatsappImage.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <h1 className=" h-32 lg:text-left text-white font-bold text-3xl text-center lg:pl-64 pt-8"
                        style={{
                            backdropFilter: 'brightness(60%)'

                        }}
                    >Whatsapp Clone</h1>
                </div>
                <h1 className=" text-center text-xl font-bold lg:text-left lg:ml-40 mt-10 mb-6">Overview:</h1>

                <div className="lg:flex  ">
                    <div>
                        <p className="mx-6 lg:mx-40 text-lg">This web app is a clone of Whatsapp. Based on MongoDB for data storage and Pusher API to make the 
                        messages appear realtime, it provides a space for multiple users to converse in a chat room. You can choose any name you like and send messages to this space
                        completely anonymous.
                        </p>
                        <div className="mx-8 justify-center lg:justify-start flex lg:ml-40 mt-8 ">

                            <div>
                                <Link href={'https://github.com/ayush6678/whatsaspp-clone'}>
                                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Github Frontend</button>
                                </Link>

                                <Link href={'https://github.com/ayush6678/whatsapp-backend'}>
                                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Github Backend</button>
                                </Link>

                            </div>

                            <Link href={''}>

                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Live Demo [Currently Unavailable]</button>

                            </Link>

                        </div>

                    </div>
                    <div className="flex flex-col shadow-xl rounded-sm p-4 lg:mr-10 bg-gray-300 lg:w-80 w-screen mt-10 lg:mt-0 text-center lg:text-left">
                        <h2 className=" font-bold text-center text-lg">Tech Stack Used:</h2>
                        <ul className=" pl-4 list-disc">
                            <li className=" mt-4">React</li>
                            <li className=" mt-4">Node Js</li>
                            <li className=" mt-4">Express</li>
                            <li className=" mt-4">MongoDB</li>
                            <li className=" mt-4 mb-7">Pusher API</li>
                        </ul>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Whatsapp;