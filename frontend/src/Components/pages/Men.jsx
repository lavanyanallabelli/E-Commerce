import { Headers } from "../Headers";
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { Sides } from "../Sidebar";
import { men } from "../../assets/data";
import { Articles } from "../Articles";

export const MenPage = () => {
  return (
    <>
      <div className="px-4 pt-8 w-screen ">
      <Navbar />
      <Headers />

      <div className="flex">
        <Sides sidebarData={men} />

        <div className=" flex flex-col justify-center items-center">
          <Articles/>

          <div className="h-16"></div>

          <div className=" ">
            <img
              className=" h-[600px] w-[98%]"
              src="https://image.hm.com/content/dam/global_campaigns/season_00/men/start-page-assets/w33/MP40NAC-16x9-Start-page-Prio-1-wk33.jpg?imwidth=1536"
            ></img>
          </div>

          <div className="h-8"></div>

          <div className="flex">
            <img
              className=" h-[650px] w-[50%]"
              src=" https://image.hm.com/content/dam/global_campaigns/season_00/men/start-page-assets/w33/MS40EA-4x5-Start-page-Prio-2-wk33.jpg?imwidth=1536"
            />
            <img
              className=" h-[650px] w-[50%] "
              src=" https://image.hm.com/content/dam/global_campaigns/season_00/men/start-page-assets/w33/MS40TNE4x5-Start-page-Prio-3-wk33.jpg?imwidth=1536"
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
              src=" https://image.hm.com/content/dam/global_campaigns/season_00/men/start-page-assets/w-30/Polos-CE-Week30-MP40LBB-.jpg?imwidth=1536"
            />

            <img
              className=" h-[750px] w-[50%]"
              src=" https://image.hm.com/content/dam/global_campaigns/season_09/men/start-page-assets/w-25/category-entrys/MP40LBD-Trousers%20-2x3-men-start-page-week252x3-NS-C6.jpg?imwidth=1536"
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
              src="https://image.hm.com/content/dam/global_campaigns/season_09/men/start-page-assets/w-27/category-entrys/MP30LBH-Denim-men-start-page-week-27.jpg?imwidth=1536 "
            />
            <img
              className="h-[750px] w-[50%]"
              src=" https://image.hm.com/content/dam/global_campaigns/season_00/men/start-page-assets/w-30/Graphics-CE-week30-MP40LBF-.jpg?imwidth=1536"
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

          <div >
            <h1> Women's Clothing</h1>
            <p>
              Refresh your daily rotation with our women’s clothing range. With
              the freshest styles available all in one place, you can expect
              everyday basics, like women's tops and skirts, as well as
              must-have knitwear and cozy loungewear for downtime days. Plans to
              go out? Our women's dresses line up mini, midi and maxi styles
              that were made for summer evenings, while our stylish jeans and
              pants offer something to flatter every silhouette. Solve your
              wardrobe woes on busy days with cool co-ords, and wrap up to stay
              warm in our women's jackets and coats when extra layers are
              required. Finish off your favorite new looks with an array of
              trendy accessories, and don’t forget to scroll for statement
              footwear in our women's shoes range. Discover more women’s fashion
              by scrolling our Conscious collection, which has been crafted with
              the planet in mind – think sustainably sourced materials,
              including organic cotton and recycled polyester.{" "}
            </p>
          </div>

          
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};
