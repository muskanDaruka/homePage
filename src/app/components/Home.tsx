import React from 'react'
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
            <section className="pl-10 bg-white flex flex-col sm:flex-row justify-between items-center px-5 py-10 gap-10">
  <div className="border-8 border-[#F9F49F] rounded-xl">
    <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full object-contain">
      <a href="#">
        <img className="rounded-lg w-full" src="/Image/fridge.png" alt="Fridge" />
      </a>
    </figure>
  </div>
  <div className="space-y-5">
    <h2 className="text-xl sm:text-3xl font-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </h2>
    <div className="space-y-4">
      <p className="text-left text-sm font-normal leading-9 max-sm:text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
      </p>
      <p className="text-left text-sm font-normal leading-9 max-sm:text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
      </p>
      <p className="text-left text-sm font-normal leading-9 max-sm:text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
      </p>
    </div>
  </div>
</section>

<section className="relative p-5 bg-gray-100">
  <p className="font-bold text-center text-3xl font-sans text-black mb-6">
    Lorem ipsum dolor sit<br className="hidden sm:block" /> amet consectetur adipisicing elit
  </p>
  <div className="flex justify-center items-center px-4">
    <p className="font-normal text-black text-center font-sans mb-8 w-11/12 sm:w-6/12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo vero dolore obcaecati optio repellendus laudantium at omnis ex blanditiis. Necessitatibus, nostrum! Autem, sequi nostrum facilis excepturi alias possimus voluptatum.
    </p>
  </div>
  <div className="flex flex-wrap justify-center gap-6">
    {categories.map((category, index) => (
      <div
        key={index}
        className="relative group bg-white rounded-xl shadow-lg overflow-hidden sm:w-[350px] w-full max-w-sm"
      >
        <img
          src={category.imageSrc}
          alt={category.alt}
          className="object-cover w-full h-[200px] sm:h-[250px] border-4 border-[#F9F49F]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white w-full h-0 group-hover:h-full transition-all duration-500 ease-in-out border-4 border-[#F9F49F]">
          <div className="text-black text-center px-4">
            <h3 className="font-bold text-xl mb-2">{category.title}</h3>
            <p className="text-sm">{category.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="bg-white p-6">
  <div>
    <h2 className="text-2xl font-semibold mb-4 mt-4">Lorem ipsum dolor sit amet</h2>
    <h4 className="text-lg mb-6">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas vel, voluptatum, nemo quos unde hic illum, adipisci nisi quisquam alias odio iste corporis excepturi voluptates itaque tempora? Mollitia, omnis?.
    </h4>
    <div className="flex flex-wrap">
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
                className="w-full object-cover rounded-lg border-8 border-[#F9F49F]"
              />
            </a>
            <div>{image.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="relative bg-gray-100">
  <div className="flex flex-col sm:flex-row justify-evenly items-center gap-10 p-10">
    <div>
      <img
        src="/Image/laptop.png"
        className="border-8 border-[#F9F49F] rounded-xl"
        alt="Laptop"
      />
    </div>
    <div className="space-y-5">
      <h4 className="font-bold font-sans text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h4>
      <div className="space-y-4">
        {Array(5)
          .fill(
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptates quas repellat eum unde impedit. Possimus accusamus iste, magni architecto distinctio repellendus veniam sed, consectetur, necessitatibus eveniet ipsum optio recusandae."
          )
          .map((text, index) => (
            <p key={index} className="text-sm font-sans">
              {text}
            </p>
          ))}
      </div>
    </div>
  </div>
</section>

        </>
    )
};

export default HomeComponent