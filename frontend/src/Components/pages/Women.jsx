import { Headers } from "../Headers";
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { Sides } from "../Sidebar";
import { women } from "../../assets/data";
import { Articles } from "../Articles";

import { Link, useNavigate } from "react-router-dom";

export const WomenPage = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/women/new-arrivals/view-all");
  };

  return (
    <>
      {/* Main container for the page */}
      <div className="px-4 pt-8 w-screen">
        <Navbar />
        <Headers />

        {/* Main content area */}
        <div className="flex">
          {/* Sidebar section */}
          <Sides sidebarData={women} />

          {/* Main articles and content section */}
          <section className="flex flex-col justify-center items-center">
            <Articles />

            {/* Spacer div */}
            <div className="h-16"></div>

            {/* Featured image section with navigation */}
            <section className="flex justify-center">
              <img
                className="h-[600px] w-[88%]"
                src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk33/WS40H-16x9-women-start-page-wk33.jpg?imwidth=1536%22"
                onClick={handleChange}
                alt="New Arrivals"
              />
            </section>

            {/* Spacer div */}
            <div className="h-8"></div>

            {/* Preppy edit section */}
            <section className="flex">
              <div>
                <img
                  className="h-[600px]"
                  src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk33/DS30F-4x5-women-start-page-wk33.jpg?imwidth=1536"
                  alt="Preppy Edit"
                />
                <div className="flex justify-between px-4 py-2">
                  <h1>THE PREPPY EDIT</h1>
                  <b>SHOP NOW</b>
                </div>
              </div>

              <div>
                <img
                  className="h-[600px]"
                  src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk33/WS40i-4x5-women-start-page-wk33.jpg?imwidth=1536"
                  alt="Preppy Edit"
                />
                <div className="flex justify-between">
                  <h1>THE PREPPY EDIT</h1>
                  <b>SHOP NOW</b>
                </div>
              </div>
            </section>

            {/* Spacer div */}
            <div className="flex space-x-12"></div>

            {/* New in section */}
            <section className="h-16"></section>

            <section className="flex justify-between">
              <h1>NEW IN</h1>
              <b>VIEW ALL</b>
            </section>

            {/* Spacer div */}
            <div className="h-8"></div>

            {/* Image gallery section */}
            <section className="flex items-center justify-center">
              <img
                className="h-[750px] w-[50%]"
                src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk32/Dresses-CE-wk32-34.jpg?imwidth=1536360"
                alt="Dresses"
              />

              <img
                className="h-[750px] w-[50%]"
                src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk32/Denim-CE-wk32-34.jpg?imwidth=1536"
                alt="Denim"
              />
            </section>

            {/* Explore categories section */}
            <section className="flex justify-between">
              <span>
                <b>DRESSES</b>
                <h1>EXPLORE</h1>
              </span>
              <span>
                <b>DENIM</b>
                <h1>EXPLORE</h1>
              </span>
            </section>

            {/* Additional image gallery section */}
            <section className="flex items-center justify-center">
              <img
                className="h-[750px] w-[50%]"
                src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk32/Knitwear-CE-wk32-34.jpg?imwidth=1536"
                alt="Knitwear"
              />
              <img
                className="h-[750px] w-[50%]"
                src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk32/Tops-CE-wk32-34.jpg?imwidth=1536"
                alt="Tops"
              />
            </section>

            {/* Explore categories section */}
            <section className="flex justify-between">
              <span>
                <b>KNITWEAR</b>
                <h1>EXPLORE</h1>
              </span>
              <span>
                <b>TOPS</b>
                <h1>EXPLORE</h1>
              </span>
            </section>

            {/* Description section */}
            <section className="text-xs max-w-3xl mx-auto">
              <h1 className="font-bold">Women's Clothing</h1>
              <p>
                Refresh your daily rotation with our women’s clothing range.
                With the freshest styles available all in one place, you can
                expect everyday basics, like women's tops and skirts, as well as
                must-have knitwear and cozy loungewear for downtime days. Plans
                to go out? Our women's dresses line up mini, midi, and maxi
                styles that were made for summer evenings, while our stylish
                jeans and pants offer something to flatter every silhouette.
                Solve your wardrobe woes on busy days with cool co-ords, and
                wrap up to stay warm in our women's jackets and coats when extra
                layers are required. Finish off your favorite new looks with an
                array of trendy accessories, and don’t forget to scroll for
                statement footwear in our women's shoes range. Discover more
                women’s fashion by scrolling our Conscious collection, which has
                been crafted with the planet in mind – think sustainably sourced
                materials, including organic cotton and recycled polyester.
              </p>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
