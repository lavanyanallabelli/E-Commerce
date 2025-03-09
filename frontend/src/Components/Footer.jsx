import instagramLogo from "../assets/Utilities/instagramLogo.svg";
import tiktokLogo from "../assets/Utilities/tiktokLogo.svg";
import youtubeLogo from "../assets/Utilities/youtubeLogo.svg";
import pinterestLogo from "../assets/Utilities/pinterestLogo.svg";
import facebookLogo from "../assets/Utilities/facebookLogo.svg";

export const Footer = () => {
  const shopItems = [
    " WOMEN",
    "MEN",
    "BABY",
    "KIDS",
    "HOME",
    "BEAUTY",
    "STUDENT DISCOUNT",
    "GIFT CARDS",
    "MAGAZINE",
  ];

  const corporateInfoItems = [
    " CAREER AT H&M",
    " ABOUT H&M GROUP",
    " SUSTAINABILITY H&M GROUP",
    " PRESS",
    "INVESTOR RELATIONS",
    " CORPORATE GOVERNANCE",
  ];

  const helpItems = [
    " CUSTOMER SERVICE",
    " MY ACCOUNT",
    " FINS A STORE",
    " LEGAL & PRIVACY",
    " CONTACT",
    " GIFT CARD TERMS AND CONDITIONS",
    " CA SUPPLY CHAINS ACT",
    " DO NOT SELL OR SHARE MY PERSONAL DATA",
    " OUR COMMITMENT TO ACCESSIBILITY",
    "REPORT A SCAM",
    " COOKIE NOTICE",
    " COOKIE SETTINGS",
  ];

  return (
    <footer className=" bg-gray-200 py-12 text-gray-800 font-sans text-sm mt-8">
      <div className="container mx-auto flex justify-center space-x-36 text-sm mb-12 ">
        <div className="flex flex-col gap-y-4 ">
          <h3 className="font-bold "> SHOP </h3>
          <ul className="list-none flex flex-col ">
            {shopItems.map((item) => (
              <li className="hover:underline"> {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold"> CORPORATE INFO </h3>
          <ul className="list-none flex flex-col ">
            {corporateInfoItems.map((item, index) => (
              <li className="hover:underline"> {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold"> HELP </h3>
          <ul className="list-none flex flex-col">
            {helpItems.map((item, index) => (
              <li className="hover:underline"> {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-2 ">
          <h3 className="font-bold"> Become a member</h3>
          <p> Join now and get 10% off your next purchase!</p>
          <h3 className="font-semibold"> READ MORE</h3>
        </div>
      </div>

      <div className=" container mx-auto flex flex-col justify-center items-center space-y-6 text-center">
        <div className=" flex space-x-4">
          <img src={instagramLogo} alt="Instagram" />
          <img src={tiktokLogo} alt="TikTok" />
          <img src={youtubeLogo} alt="YouTube" />
          <img src={pinterestLogo} alt="Pinterest" />
          <img src={facebookLogo} alt="Facebook" />
        </div>
      </div>

      <div className="  text-sm px-4 max-w-xl mx-auto ">
        <p className="text-center ">
          The content of this site is copyright-protected and is the property of
          H&M Hennes & Mauritz AB. H&M is committed to accessibility. That
          commitment means H&M embraces WCAG guidelines and supports assistive
          technologies such as screen readers. If you are using a screen reader,
          magnifier, or other assistive technologies and are experiencing
          difficulties using this website, please call our TOLL-FREE support
          line (855-466-7467) for assistance.
        </p>
      </div>

      <div className=" flex flex-col justify-center items-center mt-10 gap-6">
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"
          alt="h & m"
        />

        <div className="font-bold text-sm">United States | $</div>
      </div>
    </footer>
  );
};
