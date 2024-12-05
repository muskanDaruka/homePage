import React from 'react'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function HomeComponent() {
    interface Image {
        src: string;
        alt: string;
        description: string;
        href: string;
    }

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

    const images: Image[] = [
        {
            src: "/Image/machine.png",
            alt: "Washing Machine",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
            href: "/Image/machine.png",
        },
        {
            src: "/Image/laptop.png",
            alt: "Laptop",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            href: "/Image/laptop.png",
        },
        {
            src: "/Image/fridge.png",
            alt: "Refrigerator",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
            href: "/Image/fridge.png",
        },
        {
            src: "/Image/tele.png",
            alt: "Television",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            href: "/Image/tele.png",
        },
    ];

    return (
        <>
            <section className="bg-white flex justify-center items-center flex-col sm:flex-row px-5 py-10 gap-10 sm:ml-32">
                <div className="flex-1 space-y-5">
                    <h2 className="text-xl sm:text-3xl font-bold">
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
                <div className="flex-1 border-8 border-[#F9F49F] rounded-xl">
                    <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full object-contain">
                        <a href="#">
                            <img className="rounded-lg w-full" src="/Image/fridge.png" alt="image description" />
                        </a>
                    </figure>
                </div>
            </section>
            <section className="relative bg-[#F9F49F] p-5">
                <p className="font-bold text-center text-3xl font-sans text-black">
                    Lorem ipsum dolor sit<br className="hidden sm:block" /> amet consectetur adipisicing elit
                </p>
                <div className="flex justify-center items-center p-4">
                    <p className="font-normal text-black text-center font-sans mb-8 w-11/12 sm:w-6/12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
                    </p>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="sm:w-[370px] w-[280px] h-auto shadow sm:flex-shrink-0 bg-white rounded-xl overflow-hidden relative group"
                            >
                                {/* Image */}
                                <img
                                    src={category.imageSrc}
                                    alt={category.alt}
                                    className="object-cover w-full h-full"
                                    width={383.96}
                                    height={263.23}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-white overflow-hidden w-full block h-0 group-hover:h-full transition-all duration-500 ease-in-out">
                                    <div className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
                                        <h3 className="font-bold text-sm mb-2">{category.title}</h3>
                                        <p className="text-xs">{category.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='bg-white p-6'>
                <div>
                    <h2 className="text-2xl font-semibold mb-4 mt-4">Lorem ipsum dolor sit amet</h2>
                    <h4 className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas vel, voluptatum, nemo quos unde hic illum, adipisci nisi quisquam alias odio iste corporis excepturi voluptates itaque tempora? Mollitia, omnis?.</h4>

                    <div className="flex gap-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 md:w-1/4 p-2 transition-all duration-300 hover:border-gray-500 border border-transparent"
                            >
                                <div className="group relative">
                                    <a href={image.href} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full object-cover rounded-lg"
                                        />
                                    </a>
                                    <div className="">
                                        {image.description}
                                    </div>
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