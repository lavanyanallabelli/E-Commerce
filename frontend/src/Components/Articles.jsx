import article1 from "../assets/Utilities/article1.png";
import searchLogo from "../assets/Utilities/searchLogo.svg";

export const Articles = () => {
  const categories = ["Details", "Women", "Men", "Kids", "Baby", "Home"];

  return (
    <section className="bg-[#f5ecd6] py-5 px-56 mt-8 flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#2e2e2e] mb-4">
          15% off $60 or 20% off $80
        </h2>
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-white text-[#2e2e2e] font-semibold py-1 px-2 border border-gray-300 shadow-sm hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
