
import React from 'react';

function Header() {
  return (
    <div>
      <section className="relative w-full">
        <div className="bg-[#a70000] py-10 mt-8">
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
            <div className="">
              <img
                className="rounded-lg shadow-lg mx-auto lg:mx-0 border-8 border-[#F9F49F]"
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
