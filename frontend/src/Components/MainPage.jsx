export const HomePage = () => {
  const arrays = [" Women", "Men", "Baby", "Kids ", " Home ", " Beauty "];

  return (
    <>
      <section className="h-[600px] w-[58%] bg-rose-600 flex flex-col justify-center items-center  ">
        <div className=" text-white">
          <p> Final days to save</p>
          <h1 className=" text-6xl font-bold"> Summer Sale</h1>
          <h1 className=" text-6xl font-bold">Up to 70% off</h1>
          <p className=" text-xl font-semibold">
            Score the biggest price drops of the season.
          </p>
        </div>

        <div className=" flex space-x-4 ">
          {arrays.map((item) => (
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="  flex items-center justify-center">
        <img
          className="h-[870px] w-[100%] "
          src="https://image.hm.com/content/dam/global_campaigns/season_00/kids/4080b/4080B-1x1-1-back-to-school-young.jpg?imwidth=1260"
        />
      </section>
    </>
  );
};
