import Navbar from "../Navbar";
import { Headers } from "../Headers";
import { Articles } from "../Articles";
import { Footer } from "../Footer";
import { Sides } from "../Sidebar";
import { kids } from "../../assets/data";

export const KidsPage = () => {
  return (
    <>
      <div className="px-4 pt-8 w-screen ">
      <Navbar />
      <Headers />
      <div className="flex">
        <Sides sidebarData={kids}/>
      
      <div className=" h-6" />

      <div className=" flex flex-col justify-center items-center">
      <Articles />
      <section className="mt-8">
      <img
          className=" h-[600px] "
          src="https://image.hm.com/content/dam/global_campaigns/season_00/kids/start-page-assets/w-34/4080F-16x9-NS-1-kids-start-page-prio-week-34.jpg?imwidth=1536"
        ></img>

      </section>
        <div className=" h-6" />

        <div className="h-8"></div>

        <div className="flex">
          <img
            className=" h-[750px] w-[50%]"
            src=" https://image.hm.com/content/dam/global_campaigns/season_00/kids/start-page-assets/w-34/4080G-2x3-NS-2-kids-start-page-prio-week-34.jpg?imwidth=1536"
          />
          <img
            className=" h-[750px] w-[50%] "
            src="https://image.hm.com/content/dam/global_campaigns/season_00/kids/start-page-assets/w-34/4120D-2x3-NS-3-kids-start-page-prio-week-34.jpg?imwidth=1536 "
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
            src="https://image.hm.com/content/dam/global_campaigns/season_09/kids/start-page-assets/w-27/Kids-2-8y-2x3-kids-start-page-week27.jpg?imwidth=1536 "
          />

          <img
            className=" h-[750px] w-[50%]"
            src="https://image.hm.com/content/dam/global_campaigns/season_09/kids/start-page-assets/w-27/Kids-9-14y-2x3-kids-start-page-week27.jpg?imwidth=1536"
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
            src="https://image.hm.com/content/dam/global_campaigns/season_09/kids/start-page-assets/w-27/Baby-2x3-kids-start-page-week27.jpg?imwidth=1536 "
          />
          <img
            className="h-[750px] w-[50%]"
            src="https://image.hm.com/content/dam/global_campaigns/season_09/kids/start-page-assets/w-27/Newborn-2x3-kids-start-page-week27.jpg?imwidth=1536 "
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

        <div>
          <h1> Kid's Clothing</h1>
          <p>
            Refill on their everyday essentials with our kids' clothes. You'll
            find an extensive selection of kids' tops and T-Shirts featuring
            colors that pop, plus adorable designs to suit their personality.
            Pair their favorite cardigan or sweater with our kids' jeans and
            pants – you'll find an array of cuts and styles, including chinos
            and cargo pants, to name a few. outdoor adventures on the cards? No
            problem. Keep chills at bay and little ones warm with our standout
            edit of kids' jackets and coats – and don't forget to scroll our
            kids' shoes for wellington boots, trendy sneakers and summer
            sandals.
          </p>
        </div>

       
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};
