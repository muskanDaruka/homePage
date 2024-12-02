import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div>
      <section className="relative w-full">
        <div className="bg-[#800080] py-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 p-5">
            <div className="text-center lg:text-left lg:w-3/4">
              <h1 className="text-white text-3xl font-bold mb-4 mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <p className="text-white text-lg leading-relaxed mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam, laborum incidunt vel quae fuga adipisci minima ab quisquam cum temporibus enim.
                <br />
                Tenetur repellat perferendis accusantium. Porro dolor inventore libero!
              </p>
              <p className="text-white text-lg leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam, laborum incidunt vel quae fuga adipisci minima ab quisquam cum temporibus enim.
                <br />
                Tenetur repellat perferendis accusantium. Porro dolor inventore libero!
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                className="rounded-lg shadow-lg mx-auto lg:mx-0"
                src="/Image/image.png"
                alt="Descriptive illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
