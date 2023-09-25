import bellIcon from "../assets/icons/bell-01.svg";
import FilterIcon from "../assets/icons/filter-lines.svg";
import SearchIcon from "../assets/icons/search-lg.svg";

import { useSelector } from "react-redux";
import { Card, MobileNavBar } from "../components";
import type { RootState } from "../store";

function HomePage() {
  const products = useSelector((state: RootState) => state.products);

  return (
    <>
      {/* <main className="flex flex-col items-center"> */}
      {/* <div className="p-4 pt-10 w-screen max-w-[1440px] h-full "> */}
      <div className="flex">
        <h1 className="flex-1 text-4xl font-bold">Discover</h1>
        <img src={bellIcon} alt="" />
      </div>
      {/* SearchBar Section */}
      <div className="flex mt-9">
        {/* Search Bar */}
        <label
          htmlFor="search"
          className="flex flex-1 bg-gray-200 pl-2 rounded-xl mr-2 py-1 "
        >
          <img className="h-5 w-7 self-center" src={SearchIcon} alt="" />
          <input
            id="search"
            className="flex-1 p-2 w-full outline-transparent border-none focus:outline-none pl-2 bg-inherit rounded-xl placeholder-gray-500 text-gray-800"
            placeholder="search anything"
            type="text"
          />
        </label>
        {/* Filter Button */}
        <button className="btn btn-primary hover:shadow-md h-auto">
          <img src={FilterIcon} alt="" />
        </button>
      </div>
      {/* Tags */}
      <ul className="mt-4 flex gap-2 list-none overflow-auto">
        <li className="rounded-lg px-4 py-1 h-fit btn-primary">All</li>
        <li className="rounded-lg bg-gray-200 px-4 py-1 ">Men</li>
        <li className="rounded-lg bg-gray-200 px-4 py-1 ">Women</li>
        <li className="rounded-lg bg-gray-200 px-4 py-1 ">Children</li>
        <li className="rounded-lg bg-gray-200 px-4 py-1 ">Children</li>
        <li className="rounded-lg bg-gray-200 px-4 py-1 ">Children</li>
        <li className="rounded-lg bg-gray-200 px-4 py-1 ">Children</li>
      </ul>
      {/* Product Listing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {products.map((item, i) => (
          // <Link to="/productdetails" preventScrollReset={true} state={item}>
          <Card product={item} key={i} />
          // </Link>
        ))}
      </div>
      {/* </div> */}
      <MobileNavBar />
      {/* </main> */}
    </>
  );
}
export default HomePage;
