import Navbar from "../Navbar";
import { Headers } from "../Headers";
import { Sides } from "../Sidebar";
import { women } from "../../assets/data";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

export const Women = () => {
  return (
    <>
      <div className="px-8 py-8 w-full ">
        <Navbar />
        <Headers />

        <section className=" flex ">
          <Sides sidebarData={women} />

          <section className="flex flex-col w-full ml-16">
            <h1 className="text-2xl font-bold mb-4 px-4">VIEW ALL</h1>

            <div className="flex justify-between  mb-4 px-4">
              <button className="text-gray-500">Sort by</button>
              <button className="text-gray-500 flex items-end ">Filter</button>
            </div>

            {/* Image Grid */}
            {/* <section className="flex flex-col"> */}

            <div className="grid grid-cols-4 gap-1">
              <div className=" ">
                <Link to="/women/new-arrivals/view-all/productPage.1">
                  <img
                    className="h-auto w-full"
                    src="https://image.hm.com/assets/hm/97/5b/975b7792b82ac8fa775bad09e948f22683c5e5a7.jpg?imwidth=1536"
                    alt="Knit Cardigan"
                  />
                </Link>
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Knit Cardigan</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/08/04/08041ec973a2cdb4b55a841da226b5eee3ce5d54.jpg?imwidth=1536"
                  alt="Jacket"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Jacket</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/0a/a3/0aa3e3b4e992bb6dda67ab4cd21b141130db2984.jpg?imwidth=1536"
                  alt="Mini Skirt"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/1d/34/1d340293494f415c9f17d8415e290e9ee7860795.jpg?imwidth=1536"
                  alt="Double-breasted Trench Coat"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">
                    Double-breasted Trench Coat
                  </p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1">
              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/b3/6f/b36f20f1f9fb6390dd2210208c8281b708d24905.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/57/f1/57f116daaa09d34b449930994f96ee93018dbb21.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/59/45/5945ef6271e088b770616d15a8040674f0c12e97.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/dd/3c/dd3c9f17690d3ae6f2276d150327611dd2ea6452.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>
            </div>
            {/* </section> */}

            <div className="grid grid-cols-4 gap-1">
              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/b3/6f/b36f20f1f9fb6390dd2210208c8281b708d24905.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/57/f1/57f116daaa09d34b449930994f96ee93018dbb21.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/59/45/5945ef6271e088b770616d15a8040674f0c12e97.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/dd/3c/dd3c9f17690d3ae6f2276d150327611dd2ea6452.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1">
              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/b3/6f/b36f20f1f9fb6390dd2210208c8281b708d24905.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/57/f1/57f116daaa09d34b449930994f96ee93018dbb21.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/59/45/5945ef6271e088b770616d15a8040674f0c12e97.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/dd/3c/dd3c9f17690d3ae6f2276d150327611dd2ea6452.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1">
              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/b3/6f/b36f20f1f9fb6390dd2210208c8281b708d24905.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/57/f1/57f116daaa09d34b449930994f96ee93018dbb21.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/59/45/5945ef6271e088b770616d15a8040674f0c12e97.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/dd/3c/dd3c9f17690d3ae6f2276d150327611dd2ea6452.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1">
              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/b3/6f/b36f20f1f9fb6390dd2210208c8281b708d24905.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/57/f1/57f116daaa09d34b449930994f96ee93018dbb21.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/59/45/5945ef6271e088b770616d15a8040674f0c12e97.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>

              <div className=" ">
                <img
                  className="h-auto w-full"
                  src="https://image.hm.com/assets/hm/dd/3c/dd3c9f17690d3ae6f2276d150327611dd2ea6452.jpg?imwidth=1536"
                />
                <div className="items-start mt-2">
                  <p className="text-sm font-semibold">Mini Skirt</p>
                  <p className="text-sm text-gray-500">$24.99</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-center mt-12">
              <button className="bg-black text-white py-2 px-16 rounded mb-4">
                Load next page
              </button>

              <div className="flex items-center space-x-6">
                <button className="text-gray-600">&lt;</button>{" "}
                {/* Previous Arrow */}
                <button className="text-red-500">1</button> {/* Active Page */}
                <button className="text-gray-600">2</button>
                <button className="text-gray-600">3</button>
                <button className="text-gray-600">4</button>
                <span className="text-gray-600">...</span>{" "}
                {/* Ellipsis for more pages */}
                <button className="text-gray-600">25</button> {/* Last Page */}
                <button className="text-gray-600">&gt;</button>{" "}
                {/* Next Arrow */}
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};
