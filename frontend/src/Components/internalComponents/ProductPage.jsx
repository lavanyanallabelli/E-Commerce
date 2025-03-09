import React, { useContext, useState } from "react";
import Navbar from "../Navbar";
import { Footer } from "../Footer";


export const ProductPage = () => {

  const [selectSize, setSelectSize] = useState();


  const handleClick = (size) => {
    setSelectSize(size);
  };

  

  return (
    <>
      <div className="px-8 py-8">
        <Navbar />
        <div className="flex flex-row ">
          {/* image section */}
          <section className="w-[50%] mt-16">
            <img src="https://image.hm.com/assets/hm/97/5b/975b7792b82ac8fa775bad09e948f22683c5e5a7.jpg?imwidth=2160" />
            <img src="https://image.hm.com/assets/hm/c4/e6/c4e6e0b12463583eaf008875eeb729f2cec58374.jpg?imwidth=2160" />
            <img src="https://image.hm.com/assets/hm/79/e5/79e5ffc25c56c4ed7a9c3010d0774b4b99b9e4ec.jpg?imwidth=2160" />
            <img src="https://image.hm.com/assets/hm/88/e1/88e10cfb34330f5196f7b565b2bc442b66108bed.jpg?imwidth=2160" />
            <img src="https://image.hm.com/assets/hm/ed/0a/ed0aa7575a5786d914de6d1f31f6dda0e0ea5488.jpg?imwidth=2160" />
          </section>

          {/* product section */}
          <section className="w-[50%] mt-16 px-32 py-28 gap-10">
            <h1 className=" font-bold mb-2">KNIT CARDIGAN</h1>
            <h2 className="text-xl font-semibold mb-4">$24.99</h2>
            <h1 className="text-md mb-2 mt-8">COLOR - DARK GRAY MELANGE</h1>
            <div className="flex items-center mt-4 mb-6">
              <img
                src="https://image.hm.com/assets/hm/97/5b/975b7792b82ac8fa775bad09e948f22683c5e5a7.jpg?imwidth=2160"
                alt="Dark Gray"
                className="w-24 h-28 cursor-pointer"
              />
              <img
                src="https://image.hm.com/assets/hm/c4/e6/c4e6e0b12463583eaf008875eeb729f2cec58374.jpg?imwidth=2160"
                alt="Navy"
                className="w-24 h-28 cursor-pointer"
              />
              <img
                src="https://image.hm.com/assets/hm/79/e5/79e5ffc25c56c4ed7a9c3010d0774b4b99b9e4ec.jpg?imwidth=2160"
                alt="Brown"
                className="w-24 h-28 cursor-pointer"
              />
            </div>

            <div className="flex justify-between text-sm">
              <h1 className="text-md mb-2">
                SELECT SIZE: {selectSize ? selectSize : "None"}{" "}
              </h1>
              <h1 className="font-bold">SIZE GUIDE</h1>
            </div>

            <div className="grid grid-cols-4 mb-4">
              <button
                onClick={() => handleClick("XXS")}
                className="border border-slate-300 px-2 py-2"
              >
                XXS
              </button>
              <button
                onClick={() => handleClick("XS")}
                className="border border-slate-300 px-2 py-2"
              >
                XS
              </button>
              <button
                onClick={() => handleClick("S")}
                className="border border-slate-300 px-2 py-2"
              >
                S
              </button>
              <button
                onClick={() => handleClick("M")}
                className="border border-slate-300 px-2 py-2"
              >
                M
              </button>
              <button
                onClick={() => handleClick("L")}
                className="border border-slate-300 px-2 py-2"
              >
                L
              </button>
              <button
                onClick={() => handleClick("XL")}
                className="border border-slate-300 px-2 py-2"
              >
                XL
              </button>
              <button
                onClick={() => handleClick("XXL")}
                className="border border-slate-300 px-2 py-2"
              >
                XXL
              </button>
            </div>

            <p className="text-gray-600 mb-8 text-sm">
              SUGGESTION: PICK YOUR NORMAL SIZE
            </p>

            {/* Add to Bag Button */}
            <button
           
              className="bg-black text-white w-full py-4 text-md font-bold rounded-md hover:bg-slate-400"
            >
              ADD TO BAG
            </button>

             {/* Free Pickup */}
             <div className="flex items-center mt-10 text-sm">
              <input type="checkbox" className="w-6 h-6 mr-2" />
              <label className="text-md">FREE SAME-DAY PICKUP IN-STORE</label>
              <span className="float-right text-black cursor-pointer ml-auto font-bold">
                SELECT STORE
              </span>
            </div>

            <div className="flex items-center mt-10 text-sm">
              <label className="text-md">FIND IN STORE</label>
              <span className="float-right text-black cursor-pointer ml-auto font-bold">
                CHECK AVAILABILITY
              </span>
            </div>

            {/* Reviews and Availability */}
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-md font-semibold mb-4">REVIEWS [7]</h2>
              <div className="flex items-center">
                <p className="text-md font-semibold mr-2">4.1</p>
                <span>★★★★☆</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-8 text-center text-gray-600 text-sm">
              <p>RUNS SMALL</p>
              <p>TRUE TO SIZE</p>
              <p>RUNS LARGE</p>
            </div>
            <div className="relative mb-8">
              <div className="h-px bg-black"></div>
              <div className="absolute top-0 left-[50%] transform -translate-x-1/2 h-2 w-1 bg-black "></div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-8 text-center text-gray-600">
              <p>RUNS SHORT</p>
              <p>TRUE TO SIZE</p>
              <p>RUNS LONG</p>
            </div>
            <div className="relative mb-8">
              <div className="h-px bg-black"></div>
              <div className="absolute top-0 left-[50%] transform -translate-x-1/2 h-2 w-2 bg-black rounded-full"></div>
            </div>

            {/* Accordion Sections */}
            <div className="border-t border-gray-300 py-4">
              <h3 className="text-lg font-semibold cursor-pointer">
                DESCRIPTION & FIT <span className="float-right">+</span>
              </h3>
            </div>
            <div className="border-t border-gray-300 py-4">
              <h3 className="text-lg font-semibold cursor-pointer">
                MATERIALS <span className="float-right">+</span>
              </h3>
            </div>
            <div className="border-t border-gray-300 py-4">
              <h3 className="text-lg font-semibold cursor-pointer">
                CARE GUIDE <span className="float-right">+</span>
              </h3>
            </div>
            <div className="border-t border-gray-300 py-4">
              <h3 className="text-lg font-semibold cursor-pointer">
                DELIVERY AND PAYMENT <span className="float-right">+</span>
              </h3>
            </div>
            
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};
