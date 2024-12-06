import Link from "next/link";

const Footer = () => {
    return (
        <section className="bg-[#a70000] py-10 px-5 w-full">
            <div className="container mx-auto flex   gap-8">
                <div className="w-full md:w-1/4 p-4 flex flex-col">
                    <div className="box-content">
                    </div>
                    <p className="text-white font-sans mt-0">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odio earum rem fugit perspiciatis incidunt a quo dolore, debitis excepturi quas laudantium placeat. Quaerat ea laboriosam repudiandae cupiditate itaque quos.
                    </p>
                </div>
                <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Array(4).fill(null).map((_, colIdx) => (
                        <div key={colIdx}>
                            <Link href="/">
                                <div className="text-white xl:text-xl text-md font-bold mb-4 font-sans relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-32 after:transition-all after:duration-300 cursor-pointer">
                                    Lorem ipsum
                                </div>
                            </Link>
                            {Array(colIdx === 0 ? 4 : colIdx === 1 ? 2 : 1)
                                .fill("Lorem")
                                .map((text, idx) => (
                                    <Link href="/" key={idx}>
                                        <div className="text-white mb-3 font-sans">{text}</div>
                                    </Link>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            <hr className="w-full border-white my-5" />

            <div className="flex flex-col items-center text-center text-white space-y-3">
                <p className="hidden sm:block font-sans">Copyright ©2024 kidpro</p>
                <p className="sm:hidden font-sans mt-3">Copyright ©2024 kidpro</p>
            </div>
        </section>
    );
};

export default Footer;
