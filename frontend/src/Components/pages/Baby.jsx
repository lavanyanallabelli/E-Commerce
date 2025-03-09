import Navbar from "../Navbar";
import { Headers } from "../Headers";
import { Articles } from "../Articles";
import { Footer } from "../Footer";
import { Sides } from "../Sidebar";
import { baby } from "../../assets/data";

export const BabyPage = () => {
  return (
    <>
      <div className="px-4 pt-8 w-screen ">
        <Navbar />
        <Headers />
        <div className="flex">
          <Sides sidebarData={baby}/>

          <div className=" h-6" />

          <div className=" flex flex-col justify-center items-center">
            <Articles />
          <div className="mt-8">
          <img
              className=" h-[880px]"
              src="https://image.hm.com/content/dam/global_campaigns/season_00/baby/4120c/4120C-1x1-1-everyday-outfits.jpg?imwidth=1536"
            ></img>

          </div>
            <div className=" h-6" />

            <div className="bold">Baby Cloths</div>
            <p>
              {" "}
              Fill their newborn wardrobe with our super soft and extra cozy
              baby clothes. Whether you’re searching for T-shirts and jeans or
              rompers and bodysuits, we have a variety of comfy options to make
              everyday dressing easy-peasy. When it comes to preparing them for
              a dreamy sleep, look no further than our baby sleepwear collection
              where you’ll find sweet pajamas and snuggly sleeping bags.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
