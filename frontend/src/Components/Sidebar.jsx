

export const Sides = ({sidebarData} ) => {

//   console.log(Object.entries(sidebarData))
  // Object.entries(women).map((element) 
    // console.log(sidebarData)
  return (
    <div className="flex flex-col gap-4 text-sm">
      {Object.entries(sidebarData).map((element) => (
        <div>
          <h1 className="font-bold"> {element[0]} </h1>
          <ul>
            {element[1].map((i) => (
              <li> {i} </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
