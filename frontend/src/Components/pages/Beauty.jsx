import Navbar from "../Navbar";
import { Headers } from "../Headers";
import { Articles } from "../Articles";
import { Footer } from "../Footer";
import { Sides } from "../Sidebar";
import { beauty } from "../../assets/data";

export const BeautyPage = () => {
  return (
    <>
      <div className="px-4 pt-8 w-screen">
        <Navbar />
        <Headers />

        <div className="flex">
          <Sides sidebarData={beauty}/>
         
          <div className=" flex flex-col justify-center items-center">
          <Articles />
           <div className="mt-8">
           <img
              className=" h-[600px]"
              src=" https://image.hm.com/content/dam/global_campaigns/season_00/beauty/start-page-assets/w-32/7380B-startpage-16x9-DK.jpg?imwidth=1536"
            ></img>
           </div>

            <div className=" h-6" />

            <div className="h-8"></div>

            <div className="flex">
              <img
                className=" h-[630px] w-[50%]"
                src=" https://image.hm.com/content/dam/global_campaigns/season_09/beauty/start-page-assets/w-31/7380C-startpage-4x5-NS-DK.jpg?imwidth=1536"
              />
              <img
                className=" h-[630px] w-[50%] "
                src=" https://image.hm.com/content/dam/global_campaigns/season_00/beauty/start-page-assets/w-34/7380E-startpage-4x5-global.jpg?imwidth=1536"
              />
            </div>

            <div className="flex space-x-12">
              <h1> THE PREPPY EDIT</h1>
              <b> SHOP NOW</b>
              <h1> NEW SEASON</h1>
              <b> SHOW NOW</b>
            </div>

            <div className="h-16"></div>

            <div className="flex justify-between">
              <h1> NEW IN</h1>
              <b> VIEW ALL</b>
            </div>

            <div className="h-8"></div>

            <div className="flex items-center justify-center">
              <img
                className=" h-[750px] w-[50%]"
                src=" https://image.hm.com/content/dam/global_campaigns/season_00/beauty/start-page-assets/w-33/skincare-2x3-beauty-startpage.jpg?imwidth=1536"
              />

              <img
                className=" h-[750px] w-[50%]"
                src=" https://image.hm.com/content/dam/global_campaigns/season_09/beauty/start-page-assets/w-31/fragrance-2x3-beauty-start-page-CE-DK-IT.jpg?imwidth=1536  "
              />
            </div>

            <div className="flex justify-between">
              <span>
                <b> DRESSES</b>
                <h1>EXPLORE</h1>
              </span>
              <span>
                <b> DENIM </b>
                <h1>EXPLORE</h1>
              </span>
            </div>

            <div className="flex items-center justify-center">
              <img
                className=" h-[750px] w-[50%]"
                src=" https://image.hm.com/content/dam/global_campaigns/season_09/beauty/start-page-assets/w-31/nails-2x3-beauty-start-page-CE-DK-IT.jpg?imwidth=1536 "
              />
              <img
                className="h-[750px] w-[50%]"
                src=" https://image.hm.com/content/dam/global_campaigns/season_09/beauty/start-page-assets/w-31/makeup-2x3-beauty-start-page-CE-DK-IT.jpg?imwidth=1536 "
              />
            </div>

            <div className="flex justify-between">
              <span>
                <b> KNITWEAR</b>
                <h1>EXPLORE</h1>
              </span>
              <span>
                <b> TOPS </b>
                <h1>EXPLORE</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
