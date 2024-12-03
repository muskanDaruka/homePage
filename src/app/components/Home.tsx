import React from 'react'

function HomeComponent() {

    const categories = [
        {
            imageSrc: "/Image/image.png",
            alt: "Lorem",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.",
        },
        {
            imageSrc: "/Image/image.png",
            alt: "Lorem",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.",
        },
        {
            imageSrc: "/Image/image.png",
            alt: "Lorem",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.",
        },
    ];

    return (
        <>
            <section className="bg-white flex justify-center items-center flex-col sm:flex-row px-5 py-10 gap-10 sm:ml-32">
                <div className="flex-1 space-y-5">
                    <h2 className="text-2xl sm:text-4xl font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <h5 className="w-full">
                        <p className="text-left text-sm font-normal leading-9 mt-4 max-sm:text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
                        </p>
                        <p className="text-left text-sm font-normal leading-9 mt-4 max-sm:text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
                        </p>
                        <p className="text-left text-sm font-normal leading-9 mt-4 max-sm:text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
                        </p>
                    </h5>
                </div>
                <div className="flex-1 border-8 border-[#F8C8DC] rounded-xl">
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full object-contain">
                        <a href="#">
                            <img className="rounded-lg" src="/Image/image.png" alt="image description" />
                        </a>
                    </figure>
                </div>
            </section>
            <section className="relative bg-[#F8C8DC] p-5">
                <p className="font-bold text-center text-3xl font-sans text-white">Lorem ipsum dolor sit<br className="hidden sm:block" /> amet consectetur adipisicing elit</p>
                <div className="flex justify-center items-center p-4">
                    <p className="font-normal text-white text-center font-sans mb-8 w-11/12 sm:w-6/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.</p>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="sm:w-[370px] w-[280px] h-auto shadow sm:flex-shrink-0 bg-white rounded-xl overflow-hidden"
                            >
                                <img
                                    src={category.imageSrc}
                                    alt={category.alt}
                                    className="object-fit w-full h-auto"
                                    width={383.96}
                                    height={263.23}
                                />
                                <div className="p-6">
                                    <h3 className="font-bold font-sans">{category.title}</h3>
                                    <p className="font-normal font-sans pb-6">{category.description}</p>
                                    <a className="text-[#1747C8] mt-2 md:mt-4 font-sans">Read more&gt;&gt;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
};

export default HomeComponent