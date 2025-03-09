import Navbar from "../Navbar";
import { Headers } from "../Headers";
import { Articles } from "../Articles";
import { Footer } from "../Footer";
import { Sides } from "../Sidebar";
import { home } from "../../assets/data";

export const HomePage = () => {
  return (
    <>
      <div className="px-4 pt-8 w-screen">
        <Navbar />
        <Headers />

        <div className="flex">
          <Sides sidebarData={home} />

          <div className=" flex flex-col justify-center items-center">
            <Articles />

           <section className="mt-8">
           <img
              className=" h-[600px]"
              src=" https://image.hm.com/content/dam/global_campaigns/season_09/home/start-page-assets/w-34/7010A-H-Stage-16x9-W34-Prio.jpg?imwidth=1536"
            ></img>
           </section>

            <div className=" h-6" />

            <div className="h-8"></div>

            <div className="flex">
              <img
                className=" h-[630px] w-[50%]"
                src=" https://image.hm.com/content/dam/global_campaigns/season_09/home/start-page-assets/w-34/7010B-H-FullBleed-4x5-W34-Prio.jpg?imwidth=1536"
              />
              <img
                className=" h-[630px] w-[50%] "
                src=" https://image.hm.com/content/dam/global_campaigns/season_09/home/start-page-assets/w-34/7010A-H-Indent-4x5-W34-Prio.jpg?imwidth=1536"
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
                src="https://image.hm.com/content/dam/global_campaigns/season_09/home/start-page-assets/w-30/bedroom-CE-w30-42.jpg?imwidth=1536 "
              />

              <img
                className=" h-[750px] w-[50%]"
                src="https://image.hm.com/content/dam/global_campaigns/season_09/home/start-page-assets/w-30/livingroom-CE-w30-42.jpg?imwidth=1536 "
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
                src=" https://image.hm.com/content/dam/global_campaigns/season_09/home/start-page-assets/w-30/kitchen-CE-w30-42.jpg?imwidth=1536 "
              />
              <img
                className="h-[750px] w-[50%]"
                src="https://image.hm.com/content/dam/global_campaigns/season_09/home/start-page-assets/w-30/kidsroom-CE-w30-42.jpg?imwidth=1536 "
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
              <h1> Home Decor</h1>
              <p>
                Level up your interior aesthetics with our home décor range.
                Whether you've moved into a new home, or you want to breathe new
                life into your existing living space, our collection has every
                room in the house covered. Our furniture edit offers stunning
                side tables and comfy lounge chairs, plus there’s an array of
                chic lighting to create a calming ambience. Looking for those
                finishing touches? Check out our beautiful bed linen, and top it
                off by scrolling for decorative cushions and cushion covers, or
                create textured layers with blankets and throws. When it comes
                to decorations, add scented candles to your bathroom, give your
                favorite plants a place to call home in our chic plant pots, or
                experiment with wall hangings and elegant glassware. Whether
                your preferred style is minimalistic or bold, we've got
                something to suit every taste in our home décor range.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
